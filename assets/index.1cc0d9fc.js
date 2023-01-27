(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function e(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerpolicy&&(r.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?r.credentials="include":i.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=e(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ro="144",Xu=0,Do=1,qu=2,uc=1,ju=2,mr=3,Yi=0,De=1,zn=2,Hn=0,Hi=1,Ps=2,Lo=3,Ro=4,Yu=5,zi=100,Zu=101,Ku=102,Io=103,Oo=104,Qu=200,Ju=201,$u=202,th=203,hc=204,fc=205,eh=206,nh=207,ih=208,rh=209,ah=210,sh=0,oh=1,lh=2,Ds=3,ch=4,uh=5,hh=6,fh=7,dc=0,dh=1,ph=2,En=0,mh=1,gh=2,_h=3,vh=4,xh=5,pc=300,Zi=301,Ki=302,Ls=303,Rs=304,Da=306,Is=1e3,tn=1001,Os=1002,ge=1003,Bo=1004,Fo=1005,ke=1006,yh=1007,La=1008,mi=1009,Ah=1010,wh=1011,mc=1012,bh=1013,si=1014,oi=1015,Sr=1016,Mh=1017,Sh=1018,Wi=1020,Th=1021,Eh=1022,cn=1023,Ch=1024,Ph=1025,ui=1026,Qi=1027,Dh=1028,Lh=1029,Rh=1030,Ih=1031,Oh=1033,ka=33776,Va=33777,Ga=33778,Ha=33779,No=35840,Uo=35841,zo=35842,ko=35843,Bh=36196,Vo=37492,Go=37496,Ho=37808,Wo=37809,Xo=37810,qo=37811,jo=37812,Yo=37813,Zo=37814,Ko=37815,Qo=37816,Jo=37817,$o=37818,tl=37819,el=37820,nl=37821,il=36492,gi=3e3,Ht=3001,Fh=3200,Nh=3201,Uh=0,zh=1,wn="srgb",li="srgb-linear",Wa=7680,kh=519,rl=35044,al="300 es",Bs=1035;class or{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let r=0,s=i.length;r<s;r++)i[r].call(this,t);t.target=null}}}const oe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Xa=Math.PI/180,sl=180/Math.PI;function Br(){const o=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(oe[o&255]+oe[o>>8&255]+oe[o>>16&255]+oe[o>>24&255]+"-"+oe[t&255]+oe[t>>8&255]+"-"+oe[t>>16&15|64]+oe[t>>24&255]+"-"+oe[e&63|128]+oe[e>>8&255]+"-"+oe[e>>16&255]+oe[e>>24&255]+oe[n&255]+oe[n>>8&255]+oe[n>>16&255]+oe[n>>24&255]).toLowerCase()}function Ce(o,t,e){return Math.max(t,Math.min(e,o))}function Vh(o,t){return(o%t+t)%t}function qa(o,t,e){return(1-e)*o+e*t}function ol(o){return(o&o-1)===0&&o!==0}function Fs(o){return Math.pow(2,Math.floor(Math.log(o)/Math.LN2))}function Hr(o,t){switch(t.constructor){case Float32Array:return o;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function Me(o,t){switch(t.constructor){case Float32Array:return o;case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}class Nt{constructor(t=0,e=0){Nt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,s=this.y-t.y;return this.x=r*n-s*i+t.x,this.y=r*i+s*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class He{constructor(){He.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(t,e,n,i,r,s,a,l,c){const u=this.elements;return u[0]=t,u[1]=i,u[2]=a,u[3]=e,u[4]=r,u[5]=l,u[6]=n,u[7]=s,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,s=n[0],a=n[3],l=n[6],c=n[1],u=n[4],h=n[7],f=n[2],m=n[5],g=n[8],d=i[0],p=i[3],_=i[6],x=i[1],w=i[4],A=i[7],y=i[2],T=i[5],P=i[8];return r[0]=s*d+a*x+l*y,r[3]=s*p+a*w+l*T,r[6]=s*_+a*A+l*P,r[1]=c*d+u*x+h*y,r[4]=c*p+u*w+h*T,r[7]=c*_+u*A+h*P,r[2]=f*d+m*x+g*y,r[5]=f*p+m*w+g*T,r[8]=f*_+m*A+g*P,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],s=t[4],a=t[5],l=t[6],c=t[7],u=t[8];return e*s*u-e*a*c-n*r*u+n*a*l+i*r*c-i*s*l}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],s=t[4],a=t[5],l=t[6],c=t[7],u=t[8],h=u*s-a*c,f=a*l-u*r,m=c*r-s*l,g=e*h+n*f+i*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const d=1/g;return t[0]=h*d,t[1]=(i*c-u*n)*d,t[2]=(a*n-i*s)*d,t[3]=f*d,t[4]=(u*e-i*l)*d,t[5]=(i*r-a*e)*d,t[6]=m*d,t[7]=(n*l-c*e)*d,t[8]=(s*e-n*r)*d,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,s,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*s+c*a)+s+t,-i*c,i*l,-i*(-c*s+l*a)+a+e,0,0,1),this}scale(t,e){const n=this.elements;return n[0]*=t,n[3]*=t,n[6]*=t,n[1]*=e,n[4]*=e,n[7]*=e,this}rotate(t){const e=Math.cos(t),n=Math.sin(t),i=this.elements,r=i[0],s=i[3],a=i[6],l=i[1],c=i[4],u=i[7];return i[0]=e*r+n*l,i[3]=e*s+n*c,i[6]=e*a+n*u,i[1]=-n*r+e*l,i[4]=-n*s+e*c,i[7]=-n*a+e*u,this}translate(t,e){const n=this.elements;return n[0]+=t*n[2],n[3]+=t*n[5],n[6]+=t*n[8],n[1]+=e*n[2],n[4]+=e*n[5],n[7]+=e*n[8],this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}function gc(o){for(let t=o.length-1;t>=0;--t)if(o[t]>=65535)return!0;return!1}function Tr(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function hi(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function pa(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}const ja={[wn]:{[li]:hi},[li]:{[wn]:pa}},Ke={legacyMode:!0,get workingColorSpace(){return li},set workingColorSpace(o){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(o,t,e){if(this.legacyMode||t===e||!t||!e)return o;if(ja[t]&&ja[t][e]!==void 0){const n=ja[t][e];return o.r=n(o.r),o.g=n(o.g),o.b=n(o.b),o}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(o,t){return this.convert(o,this.workingColorSpace,t)},toWorkingColorSpace:function(o,t){return this.convert(o,t,this.workingColorSpace)}},_c={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Qt={r:0,g:0,b:0},Qe={h:0,s:0,l:0},Wr={h:0,s:0,l:0};function Ya(o,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?o+(t-o)*6*e:e<1/2?t:e<2/3?o+(t-o)*6*(2/3-e):o}function Xr(o,t){return t.r=o.r,t.g=o.g,t.b=o.b,t}class Ut{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,e===void 0&&n===void 0?this.set(t):this.setRGB(t,e,n)}set(t){return t&&t.isColor?this.copy(t):typeof t=="number"?this.setHex(t):typeof t=="string"&&this.setStyle(t),this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=wn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Ke.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=li){return this.r=t,this.g=e,this.b=n,Ke.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=li){if(t=Vh(t,1),e=Ce(e,0,1),n=Ce(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,s=2*n-r;this.r=Ya(s,r,t+1/3),this.g=Ya(s,r,t),this.b=Ya(s,r,t-1/3)}return Ke.toWorkingColorSpace(this,i),this}setStyle(t,e=wn){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(t)){let r;const s=i[1],a=i[2];switch(s){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(255,parseInt(r[1],10))/255,this.g=Math.min(255,parseInt(r[2],10))/255,this.b=Math.min(255,parseInt(r[3],10))/255,Ke.toWorkingColorSpace(this,e),n(r[4]),this;if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(100,parseInt(r[1],10))/100,this.g=Math.min(100,parseInt(r[2],10))/100,this.b=Math.min(100,parseInt(r[3],10))/100,Ke.toWorkingColorSpace(this,e),n(r[4]),this;break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)){const l=parseFloat(r[1])/360,c=parseFloat(r[2])/100,u=parseFloat(r[3])/100;return n(r[4]),this.setHSL(l,c,u,e)}break}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=i[1],s=r.length;if(s===3)return this.r=parseInt(r.charAt(0)+r.charAt(0),16)/255,this.g=parseInt(r.charAt(1)+r.charAt(1),16)/255,this.b=parseInt(r.charAt(2)+r.charAt(2),16)/255,Ke.toWorkingColorSpace(this,e),this;if(s===6)return this.r=parseInt(r.charAt(0)+r.charAt(1),16)/255,this.g=parseInt(r.charAt(2)+r.charAt(3),16)/255,this.b=parseInt(r.charAt(4)+r.charAt(5),16)/255,Ke.toWorkingColorSpace(this,e),this}return t&&t.length>0?this.setColorName(t,e):this}setColorName(t,e=wn){const n=_c[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=hi(t.r),this.g=hi(t.g),this.b=hi(t.b),this}copyLinearToSRGB(t){return this.r=pa(t.r),this.g=pa(t.g),this.b=pa(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=wn){return Ke.fromWorkingColorSpace(Xr(this,Qt),t),Ce(Qt.r*255,0,255)<<16^Ce(Qt.g*255,0,255)<<8^Ce(Qt.b*255,0,255)<<0}getHexString(t=wn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=li){Ke.fromWorkingColorSpace(Xr(this,Qt),e);const n=Qt.r,i=Qt.g,r=Qt.b,s=Math.max(n,i,r),a=Math.min(n,i,r);let l,c;const u=(a+s)/2;if(a===s)l=0,c=0;else{const h=s-a;switch(c=u<=.5?h/(s+a):h/(2-s-a),s){case n:l=(i-r)/h+(i<r?6:0);break;case i:l=(r-n)/h+2;break;case r:l=(n-i)/h+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=li){return Ke.fromWorkingColorSpace(Xr(this,Qt),e),t.r=Qt.r,t.g=Qt.g,t.b=Qt.b,t}getStyle(t=wn){return Ke.fromWorkingColorSpace(Xr(this,Qt),t),t!==wn?`color(${t} ${Qt.r} ${Qt.g} ${Qt.b})`:`rgb(${Qt.r*255|0},${Qt.g*255|0},${Qt.b*255|0})`}offsetHSL(t,e,n){return this.getHSL(Qe),Qe.h+=t,Qe.s+=e,Qe.l+=n,this.setHSL(Qe.h,Qe.s,Qe.l),this}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Qe),t.getHSL(Wr);const n=qa(Qe.h,Wr.h,e),i=qa(Qe.s,Wr.s,e),r=qa(Qe.l,Wr.l,e);return this.setHSL(n,i,r),this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}Ut.NAMES=_c;let bi;class vc{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{bi===void 0&&(bi=Tr("canvas")),bi.width=t.width,bi.height=t.height;const n=bi.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=bi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Tr("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let s=0;s<r.length;s++)r[s]=hi(r[s]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(hi(e[n]/255)*255):e[n]=hi(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}class xc{constructor(t=null){this.isSource=!0,this.uuid=Br(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let s=0,a=i.length;s<a;s++)i[s].isDataTexture?r.push(Za(i[s].image)):r.push(Za(i[s]))}else r=Za(i);n.url=r}return e||(t.images[this.uuid]=n),n}}function Za(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?vc.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Gh=0;class Ye extends or{constructor(t=Ye.DEFAULT_IMAGE,e=Ye.DEFAULT_MAPPING,n=tn,i=tn,r=ke,s=La,a=cn,l=mi,c=1,u=gi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Gh++}),this.uuid=Br(),this.name="",this.source=new xc(t),this.mipmaps=[],this.mapping=e,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=s,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Nt(0,0),this.repeat=new Nt(1,1),this.center=new Nt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new He,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.encoding=t.encoding,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==pc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Is:t.x=t.x-Math.floor(t.x);break;case tn:t.x=t.x<0?0:1;break;case Os:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Is:t.y=t.y-Math.floor(t.y);break;case tn:t.y=t.y<0?0:1;break;case Os:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}}Ye.DEFAULT_IMAGE=null;Ye.DEFAULT_MAPPING=pc;class se{constructor(t=0,e=0,n=0,i=1){se.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=this.w,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*i+s[12]*r,this.y=s[1]*e+s[5]*n+s[9]*i+s[13]*r,this.z=s[2]*e+s[6]*n+s[10]*i+s[14]*r,this.w=s[3]*e+s[7]*n+s[11]*i+s[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r;const l=t.elements,c=l[0],u=l[4],h=l[8],f=l[1],m=l[5],g=l[9],d=l[2],p=l[6],_=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-d)<.01&&Math.abs(g-p)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+d)<.1&&Math.abs(g+p)<.1&&Math.abs(c+m+_-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const w=(c+1)/2,A=(m+1)/2,y=(_+1)/2,T=(u+f)/4,P=(h+d)/4,v=(g+p)/4;return w>A&&w>y?w<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(w),i=T/n,r=P/n):A>y?A<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(A),n=T/i,r=v/i):y<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(y),n=P/r,i=v/r),this.set(n,i,r,e),this}let x=Math.sqrt((p-g)*(p-g)+(h-d)*(h-d)+(f-u)*(f-u));return Math.abs(x)<.001&&(x=1),this.x=(p-g)/x,this.y=(h-d)/x,this.z=(f-u)/x,this.w=Math.acos((c+m+_-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class _i extends or{constructor(t,e,n={}){super(),this.isWebGLRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new se(0,0,t,e),this.scissorTest=!1,this.viewport=new se(0,0,t,e);const i={width:t,height:e,depth:1};this.texture=new Ye(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:ke,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(t,e,n=1){(this.width!==t||this.height!==e||this.depth!==n)&&(this.width=t,this.height=e,this.depth=n,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new xc(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class yc extends Ye{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=ge,this.minFilter=ge,this.wrapR=tn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Hh extends Ye{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=ge,this.minFilter=ge,this.wrapR=tn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Fr{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,s,a){let l=n[i+0],c=n[i+1],u=n[i+2],h=n[i+3];const f=r[s+0],m=r[s+1],g=r[s+2],d=r[s+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h;return}if(a===1){t[e+0]=f,t[e+1]=m,t[e+2]=g,t[e+3]=d;return}if(h!==d||l!==f||c!==m||u!==g){let p=1-a;const _=l*f+c*m+u*g+h*d,x=_>=0?1:-1,w=1-_*_;if(w>Number.EPSILON){const y=Math.sqrt(w),T=Math.atan2(y,_*x);p=Math.sin(p*T)/y,a=Math.sin(a*T)/y}const A=a*x;if(l=l*p+f*A,c=c*p+m*A,u=u*p+g*A,h=h*p+d*A,p===1-a){const y=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=y,c*=y,u*=y,h*=y}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h}static multiplyQuaternionsFlat(t,e,n,i,r,s){const a=n[i],l=n[i+1],c=n[i+2],u=n[i+3],h=r[s],f=r[s+1],m=r[s+2],g=r[s+3];return t[e]=a*g+u*h+l*m-c*f,t[e+1]=l*g+u*f+c*h-a*m,t[e+2]=c*g+u*m+a*f-l*h,t[e+3]=u*g-a*h-l*f-c*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e){const n=t._x,i=t._y,r=t._z,s=t._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(i/2),h=a(r/2),f=l(n/2),m=l(i/2),g=l(r/2);switch(s){case"XYZ":this._x=f*u*h+c*m*g,this._y=c*m*h-f*u*g,this._z=c*u*g+f*m*h,this._w=c*u*h-f*m*g;break;case"YXZ":this._x=f*u*h+c*m*g,this._y=c*m*h-f*u*g,this._z=c*u*g-f*m*h,this._w=c*u*h+f*m*g;break;case"ZXY":this._x=f*u*h-c*m*g,this._y=c*m*h+f*u*g,this._z=c*u*g+f*m*h,this._w=c*u*h-f*m*g;break;case"ZYX":this._x=f*u*h-c*m*g,this._y=c*m*h+f*u*g,this._z=c*u*g-f*m*h,this._w=c*u*h+f*m*g;break;case"YZX":this._x=f*u*h+c*m*g,this._y=c*m*h+f*u*g,this._z=c*u*g-f*m*h,this._w=c*u*h-f*m*g;break;case"XZY":this._x=f*u*h-c*m*g,this._y=c*m*h-f*u*g,this._z=c*u*g+f*m*h,this._w=c*u*h+f*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+s)}return e!==!1&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],r=e[8],s=e[1],a=e[5],l=e[9],c=e[2],u=e[6],h=e[10],f=n+a+h;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(u-l)*m,this._y=(r-c)*m,this._z=(s-i)*m}else if(n>a&&n>h){const m=2*Math.sqrt(1+n-a-h);this._w=(u-l)/m,this._x=.25*m,this._y=(i+s)/m,this._z=(r+c)/m}else if(a>h){const m=2*Math.sqrt(1+a-n-h);this._w=(r-c)/m,this._x=(i+s)/m,this._y=.25*m,this._z=(l+u)/m}else{const m=2*Math.sqrt(1+h-n-a);this._w=(s-i)/m,this._x=(r+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ce(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,r=t._z,s=t._w,a=e._x,l=e._y,c=e._z,u=e._w;return this._x=n*u+s*a+i*c-r*l,this._y=i*u+s*l+r*a-n*c,this._z=r*u+s*c+n*l-i*a,this._w=s*u-n*a-i*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,r=this._z,s=this._w;let a=s*t._w+n*t._x+i*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=s,this._x=n,this._y=i,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const m=1-e;return this._w=m*s+e*this._w,this._x=m*n+e*this._x,this._y=m*i+e*this._y,this._z=m*r+e*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-e)*u)/c,f=Math.sin(e*u)/c;return this._w=s*h+this._w*f,this._x=n*h+this._x*f,this._y=i*h+this._y*f,this._z=r*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=Math.random(),e=Math.sqrt(1-t),n=Math.sqrt(t),i=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(e*Math.cos(i),n*Math.sin(r),n*Math.cos(r),e*Math.sin(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class F{constructor(t=0,e=0,n=0){F.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(ll.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(ll.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=t.elements,s=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*s,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*s,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*s,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,r=t.x,s=t.y,a=t.z,l=t.w,c=l*e+s*i-a*n,u=l*n+a*e-r*i,h=l*i+r*n-s*e,f=-r*e-s*n-a*i;return this.x=c*l+f*-r+u*-a-h*-s,this.y=u*l+f*-s+h*-r-c*-a,this.z=h*l+f*-a+c*-s-u*-r,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,r=t.z,s=e.x,a=e.y,l=e.z;return this.x=i*l-r*a,this.y=r*s-n*l,this.z=n*a-i*s,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Ka.copy(this).projectOnVector(t),this.sub(Ka)}reflect(t){return this.sub(Ka.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ce(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,n=Math.sqrt(1-t**2);return this.x=n*Math.cos(e),this.y=n*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ka=new F,ll=new Fr;class Nr{constructor(t=new F(1/0,1/0,1/0),e=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){let e=1/0,n=1/0,i=1/0,r=-1/0,s=-1/0,a=-1/0;for(let l=0,c=t.length;l<c;l+=3){const u=t[l],h=t[l+1],f=t[l+2];u<e&&(e=u),h<n&&(n=h),f<i&&(i=f),u>r&&(r=u),h>s&&(s=h),f>a&&(a=f)}return this.min.set(e,n,i),this.max.set(r,s,a),this}setFromBufferAttribute(t){let e=1/0,n=1/0,i=1/0,r=-1/0,s=-1/0,a=-1/0;for(let l=0,c=t.count;l<c;l++){const u=t.getX(l),h=t.getY(l),f=t.getZ(l);u<e&&(e=u),h<n&&(n=h),f<i&&(i=f),u>r&&(r=u),h>s&&(s=h),f>a&&(a=f)}return this.min.set(e,n,i),this.max.set(r,s,a),this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Qn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0)if(e&&n.attributes!=null&&n.attributes.position!==void 0){const r=n.attributes.position;for(let s=0,a=r.count;s<a;s++)Qn.fromBufferAttribute(r,s).applyMatrix4(t.matrixWorld),this.expandByPoint(Qn)}else n.boundingBox===null&&n.computeBoundingBox(),Qa.copy(n.boundingBox),Qa.applyMatrix4(t.matrixWorld),this.union(Qa);const i=t.children;for(let r=0,s=i.length;r<s;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,Qn),Qn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(hr),qr.subVectors(this.max,hr),Mi.subVectors(t.a,hr),Si.subVectors(t.b,hr),Ti.subVectors(t.c,hr),Rn.subVectors(Si,Mi),In.subVectors(Ti,Si),Jn.subVectors(Mi,Ti);let e=[0,-Rn.z,Rn.y,0,-In.z,In.y,0,-Jn.z,Jn.y,Rn.z,0,-Rn.x,In.z,0,-In.x,Jn.z,0,-Jn.x,-Rn.y,Rn.x,0,-In.y,In.x,0,-Jn.y,Jn.x,0];return!Ja(e,Mi,Si,Ti,qr)||(e=[1,0,0,0,1,0,0,0,1],!Ja(e,Mi,Si,Ti,qr))?!1:(jr.crossVectors(Rn,In),e=[jr.x,jr.y,jr.z],Ja(e,Mi,Si,Ti,qr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return Qn.copy(t).clamp(this.min,this.max).sub(t).length()}getBoundingSphere(t){return this.getCenter(t.center),t.radius=this.getSize(Qn).length()*.5,t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(_n[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),_n[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),_n[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),_n[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),_n[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),_n[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),_n[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),_n[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(_n),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const _n=[new F,new F,new F,new F,new F,new F,new F,new F],Qn=new F,Qa=new Nr,Mi=new F,Si=new F,Ti=new F,Rn=new F,In=new F,Jn=new F,hr=new F,qr=new F,jr=new F,$n=new F;function Ja(o,t,e,n,i){for(let r=0,s=o.length-3;r<=s;r+=3){$n.fromArray(o,r);const a=i.x*Math.abs($n.x)+i.y*Math.abs($n.y)+i.z*Math.abs($n.z),l=t.dot($n),c=e.dot($n),u=n.dot($n);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const Wh=new Nr,cl=new F,Yr=new F,$a=new F;class Ra{constructor(t=new F,e=-1){this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Wh.setFromPoints(t).getCenter(n);let i=0;for(let r=0,s=t.length;r<s;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){$a.subVectors(t,this.center);const e=$a.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.add($a.multiplyScalar(i/n)),this.radius+=i}return this}union(t){return this.center.equals(t.center)===!0?Yr.set(0,0,1).multiplyScalar(t.radius):Yr.subVectors(t.center,this.center).normalize().multiplyScalar(t.radius),this.expandByPoint(cl.copy(t.center).add(Yr)),this.expandByPoint(cl.copy(t.center).sub(Yr)),this}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const vn=new F,ts=new F,Zr=new F,On=new F,es=new F,Kr=new F,ns=new F;class ao{constructor(t=new F,e=new F(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.direction).multiplyScalar(t).add(this.origin)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,vn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.direction).multiplyScalar(n).add(this.origin)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=vn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(vn.copy(this.direction).multiplyScalar(e).add(this.origin),vn.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){ts.copy(t).add(e).multiplyScalar(.5),Zr.copy(e).sub(t).normalize(),On.copy(this.origin).sub(ts);const r=t.distanceTo(e)*.5,s=-this.direction.dot(Zr),a=On.dot(this.direction),l=-On.dot(Zr),c=On.lengthSq(),u=Math.abs(1-s*s);let h,f,m,g;if(u>0)if(h=s*l-a,f=s*a-l,g=r*u,h>=0)if(f>=-g)if(f<=g){const d=1/u;h*=d,f*=d,m=h*(h+s*f+2*a)+f*(s*h+f+2*l)+c}else f=r,h=Math.max(0,-(s*f+a)),m=-h*h+f*(f+2*l)+c;else f=-r,h=Math.max(0,-(s*f+a)),m=-h*h+f*(f+2*l)+c;else f<=-g?(h=Math.max(0,-(-s*r+a)),f=h>0?-r:Math.min(Math.max(-r,-l),r),m=-h*h+f*(f+2*l)+c):f<=g?(h=0,f=Math.min(Math.max(-r,-l),r),m=f*(f+2*l)+c):(h=Math.max(0,-(s*r+a)),f=h>0?r:Math.min(Math.max(-r,-l),r),m=-h*h+f*(f+2*l)+c);else f=s>0?-r:r,h=Math.max(0,-(s*f+a)),m=-h*h+f*(f+2*l)+c;return n&&n.copy(this.direction).multiplyScalar(h).add(this.origin),i&&i.copy(Zr).multiplyScalar(f).add(ts),m}intersectSphere(t,e){vn.subVectors(t.center,this.origin);const n=vn.dot(this.direction),i=vn.dot(vn)-n*n,r=t.radius*t.radius;if(i>r)return null;const s=Math.sqrt(r-i),a=n-s,l=n+s;return a<0&&l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,s,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,i=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,i=(t.min.x-f.x)*c),u>=0?(r=(t.min.y-f.y)*u,s=(t.max.y-f.y)*u):(r=(t.max.y-f.y)*u,s=(t.min.y-f.y)*u),n>s||r>i||((r>n||n!==n)&&(n=r),(s<i||i!==i)&&(i=s),h>=0?(a=(t.min.z-f.z)*h,l=(t.max.z-f.z)*h):(a=(t.max.z-f.z)*h,l=(t.min.z-f.z)*h),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,vn)!==null}intersectTriangle(t,e,n,i,r){es.subVectors(e,t),Kr.subVectors(n,t),ns.crossVectors(es,Kr);let s=this.direction.dot(ns),a;if(s>0){if(i)return null;a=1}else if(s<0)a=-1,s=-s;else return null;On.subVectors(this.origin,t);const l=a*this.direction.dot(Kr.crossVectors(On,Kr));if(l<0)return null;const c=a*this.direction.dot(es.cross(On));if(c<0||l+c>s)return null;const u=-a*On.dot(ns);return u<0?null:this.at(u/s,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class $t{constructor(){$t.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(t,e,n,i,r,s,a,l,c,u,h,f,m,g,d,p){const _=this.elements;return _[0]=t,_[4]=e,_[8]=n,_[12]=i,_[1]=r,_[5]=s,_[9]=a,_[13]=l,_[2]=c,_[6]=u,_[10]=h,_[14]=f,_[3]=m,_[7]=g,_[11]=d,_[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new $t().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/Ei.setFromMatrixColumn(t,0).length(),r=1/Ei.setFromMatrixColumn(t,1).length(),s=1/Ei.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*s,e[9]=n[9]*s,e[10]=n[10]*s,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,r=t.z,s=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(r),h=Math.sin(r);if(t.order==="XYZ"){const f=s*u,m=s*h,g=a*u,d=a*h;e[0]=l*u,e[4]=-l*h,e[8]=c,e[1]=m+g*c,e[5]=f-d*c,e[9]=-a*l,e[2]=d-f*c,e[6]=g+m*c,e[10]=s*l}else if(t.order==="YXZ"){const f=l*u,m=l*h,g=c*u,d=c*h;e[0]=f+d*a,e[4]=g*a-m,e[8]=s*c,e[1]=s*h,e[5]=s*u,e[9]=-a,e[2]=m*a-g,e[6]=d+f*a,e[10]=s*l}else if(t.order==="ZXY"){const f=l*u,m=l*h,g=c*u,d=c*h;e[0]=f-d*a,e[4]=-s*h,e[8]=g+m*a,e[1]=m+g*a,e[5]=s*u,e[9]=d-f*a,e[2]=-s*c,e[6]=a,e[10]=s*l}else if(t.order==="ZYX"){const f=s*u,m=s*h,g=a*u,d=a*h;e[0]=l*u,e[4]=g*c-m,e[8]=f*c+d,e[1]=l*h,e[5]=d*c+f,e[9]=m*c-g,e[2]=-c,e[6]=a*l,e[10]=s*l}else if(t.order==="YZX"){const f=s*l,m=s*c,g=a*l,d=a*c;e[0]=l*u,e[4]=d-f*h,e[8]=g*h+m,e[1]=h,e[5]=s*u,e[9]=-a*u,e[2]=-c*u,e[6]=m*h+g,e[10]=f-d*h}else if(t.order==="XZY"){const f=s*l,m=s*c,g=a*l,d=a*c;e[0]=l*u,e[4]=-h,e[8]=c*u,e[1]=f*h+d,e[5]=s*u,e[9]=m*h-g,e[2]=g*h-m,e[6]=a*u,e[10]=d*h+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Xh,t,qh)}lookAt(t,e,n){const i=this.elements;return Se.subVectors(t,e),Se.lengthSq()===0&&(Se.z=1),Se.normalize(),Bn.crossVectors(n,Se),Bn.lengthSq()===0&&(Math.abs(n.z)===1?Se.x+=1e-4:Se.z+=1e-4,Se.normalize(),Bn.crossVectors(n,Se)),Bn.normalize(),Qr.crossVectors(Se,Bn),i[0]=Bn.x,i[4]=Qr.x,i[8]=Se.x,i[1]=Bn.y,i[5]=Qr.y,i[9]=Se.y,i[2]=Bn.z,i[6]=Qr.z,i[10]=Se.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,s=n[0],a=n[4],l=n[8],c=n[12],u=n[1],h=n[5],f=n[9],m=n[13],g=n[2],d=n[6],p=n[10],_=n[14],x=n[3],w=n[7],A=n[11],y=n[15],T=i[0],P=i[4],v=i[8],M=i[12],D=i[1],G=i[5],J=i[9],N=i[13],R=i[2],z=i[6],j=i[10],Y=i[14],k=i[3],O=i[7],U=i[11],$=i[15];return r[0]=s*T+a*D+l*R+c*k,r[4]=s*P+a*G+l*z+c*O,r[8]=s*v+a*J+l*j+c*U,r[12]=s*M+a*N+l*Y+c*$,r[1]=u*T+h*D+f*R+m*k,r[5]=u*P+h*G+f*z+m*O,r[9]=u*v+h*J+f*j+m*U,r[13]=u*M+h*N+f*Y+m*$,r[2]=g*T+d*D+p*R+_*k,r[6]=g*P+d*G+p*z+_*O,r[10]=g*v+d*J+p*j+_*U,r[14]=g*M+d*N+p*Y+_*$,r[3]=x*T+w*D+A*R+y*k,r[7]=x*P+w*G+A*z+y*O,r[11]=x*v+w*J+A*j+y*U,r[15]=x*M+w*N+A*Y+y*$,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],s=t[1],a=t[5],l=t[9],c=t[13],u=t[2],h=t[6],f=t[10],m=t[14],g=t[3],d=t[7],p=t[11],_=t[15];return g*(+r*l*h-i*c*h-r*a*f+n*c*f+i*a*m-n*l*m)+d*(+e*l*m-e*c*f+r*s*f-i*s*m+i*c*u-r*l*u)+p*(+e*c*h-e*a*m-r*s*h+n*s*m+r*a*u-n*c*u)+_*(-i*a*u-e*l*h+e*a*f+i*s*h-n*s*f+n*l*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],s=t[4],a=t[5],l=t[6],c=t[7],u=t[8],h=t[9],f=t[10],m=t[11],g=t[12],d=t[13],p=t[14],_=t[15],x=h*p*c-d*f*c+d*l*m-a*p*m-h*l*_+a*f*_,w=g*f*c-u*p*c-g*l*m+s*p*m+u*l*_-s*f*_,A=u*d*c-g*h*c+g*a*m-s*d*m-u*a*_+s*h*_,y=g*h*l-u*d*l-g*a*f+s*d*f+u*a*p-s*h*p,T=e*x+n*w+i*A+r*y;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/T;return t[0]=x*P,t[1]=(d*f*r-h*p*r-d*i*m+n*p*m+h*i*_-n*f*_)*P,t[2]=(a*p*r-d*l*r+d*i*c-n*p*c-a*i*_+n*l*_)*P,t[3]=(h*l*r-a*f*r-h*i*c+n*f*c+a*i*m-n*l*m)*P,t[4]=w*P,t[5]=(u*p*r-g*f*r+g*i*m-e*p*m-u*i*_+e*f*_)*P,t[6]=(g*l*r-s*p*r-g*i*c+e*p*c+s*i*_-e*l*_)*P,t[7]=(s*f*r-u*l*r+u*i*c-e*f*c-s*i*m+e*l*m)*P,t[8]=A*P,t[9]=(g*h*r-u*d*r-g*n*m+e*d*m+u*n*_-e*h*_)*P,t[10]=(s*d*r-g*a*r+g*n*c-e*d*c-s*n*_+e*a*_)*P,t[11]=(u*a*r-s*h*r-u*n*c+e*h*c+s*n*m-e*a*m)*P,t[12]=y*P,t[13]=(u*d*i-g*h*i+g*n*f-e*d*f-u*n*p+e*h*p)*P,t[14]=(g*a*i-s*d*i-g*n*l+e*d*l+s*n*p-e*a*p)*P,t[15]=(s*h*i-u*a*i+u*n*l-e*h*l-s*n*f+e*a*f)*P,this}scale(t){const e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),r=1-n,s=t.x,a=t.y,l=t.z,c=r*s,u=r*a;return this.set(c*s+n,c*a-i*l,c*l+i*a,0,c*a+i*l,u*a+n,u*l-i*s,0,c*l-i*a,u*l+i*s,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,s){return this.set(1,n,r,0,t,1,s,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,r=e._x,s=e._y,a=e._z,l=e._w,c=r+r,u=s+s,h=a+a,f=r*c,m=r*u,g=r*h,d=s*u,p=s*h,_=a*h,x=l*c,w=l*u,A=l*h,y=n.x,T=n.y,P=n.z;return i[0]=(1-(d+_))*y,i[1]=(m+A)*y,i[2]=(g-w)*y,i[3]=0,i[4]=(m-A)*T,i[5]=(1-(f+_))*T,i[6]=(p+x)*T,i[7]=0,i[8]=(g+w)*P,i[9]=(p-x)*P,i[10]=(1-(f+d))*P,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let r=Ei.set(i[0],i[1],i[2]).length();const s=Ei.set(i[4],i[5],i[6]).length(),a=Ei.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),t.x=i[12],t.y=i[13],t.z=i[14],Je.copy(this);const c=1/r,u=1/s,h=1/a;return Je.elements[0]*=c,Je.elements[1]*=c,Je.elements[2]*=c,Je.elements[4]*=u,Je.elements[5]*=u,Je.elements[6]*=u,Je.elements[8]*=h,Je.elements[9]*=h,Je.elements[10]*=h,e.setFromRotationMatrix(Je),n.x=r,n.y=s,n.z=a,this}makePerspective(t,e,n,i,r,s){const a=this.elements,l=2*r/(e-t),c=2*r/(n-i),u=(e+t)/(e-t),h=(n+i)/(n-i),f=-(s+r)/(s-r),m=-2*s*r/(s-r);return a[0]=l,a[4]=0,a[8]=u,a[12]=0,a[1]=0,a[5]=c,a[9]=h,a[13]=0,a[2]=0,a[6]=0,a[10]=f,a[14]=m,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(t,e,n,i,r,s){const a=this.elements,l=1/(e-t),c=1/(n-i),u=1/(s-r),h=(e+t)*l,f=(n+i)*c,m=(s+r)*u;return a[0]=2*l,a[4]=0,a[8]=0,a[12]=-h,a[1]=0,a[5]=2*c,a[9]=0,a[13]=-f,a[2]=0,a[6]=0,a[10]=-2*u,a[14]=-m,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Ei=new F,Je=new $t,Xh=new F(0,0,0),qh=new F(1,1,1),Bn=new F,Qr=new F,Se=new F,ul=new $t,hl=new Fr;class Ur{constructor(t=0,e=0,n=0,i=Ur.DefaultOrder){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,r=i[0],s=i[4],a=i[8],l=i[1],c=i[5],u=i[9],h=i[2],f=i[6],m=i[10];switch(e){case"XYZ":this._y=Math.asin(Ce(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-s,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ce(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ce(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,m),this._z=Math.atan2(-s,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ce(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-s,c));break;case"YZX":this._z=Math.asin(Ce(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-Ce(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return ul.makeRotationFromQuaternion(t),this.setFromRotationMatrix(ul,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return hl.setFromEuler(this),this.setFromQuaternion(hl,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}toVector3(){console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")}}Ur.DefaultOrder="XYZ";Ur.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class so{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let jh=0;const fl=new F,Ci=new Fr,xn=new $t,Jr=new F,fr=new F,Yh=new F,Zh=new Fr,dl=new F(1,0,0),pl=new F(0,1,0),ml=new F(0,0,1),Kh={type:"added"},gl={type:"removed"};class ve extends or{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:jh++}),this.uuid=Br(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ve.DefaultUp.clone();const t=new F,e=new Ur,n=new Fr,i=new F(1,1,1);function r(){n.setFromEuler(e,!1)}function s(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new $t},normalMatrix:{value:new He}}),this.matrix=new $t,this.matrixWorld=new $t,this.matrixAutoUpdate=ve.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=ve.DefaultMatrixWorldAutoUpdate,this.layers=new so,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ci.setFromAxisAngle(t,e),this.quaternion.multiply(Ci),this}rotateOnWorldAxis(t,e){return Ci.setFromAxisAngle(t,e),this.quaternion.premultiply(Ci),this}rotateX(t){return this.rotateOnAxis(dl,t)}rotateY(t){return this.rotateOnAxis(pl,t)}rotateZ(t){return this.rotateOnAxis(ml,t)}translateOnAxis(t,e){return fl.copy(t).applyQuaternion(this.quaternion),this.position.add(fl.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(dl,t)}translateY(t){return this.translateOnAxis(pl,t)}translateZ(t){return this.translateOnAxis(ml,t)}localToWorld(t){return t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return t.applyMatrix4(xn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Jr.copy(t):Jr.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),fr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?xn.lookAt(fr,Jr,this.up):xn.lookAt(Jr,fr,this.up),this.quaternion.setFromRotationMatrix(xn),i&&(xn.extractRotation(i.matrixWorld),Ci.setFromRotationMatrix(xn),this.quaternion.premultiply(Ci.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(Kh)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(gl)),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){for(let t=0;t<this.children.length;t++){const e=this.children[t];e.parent=null,e.dispatchEvent(gl)}return this.children.length=0,this}attach(t){return this.updateWorldMatrix(!0,!1),xn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),xn.multiply(t.parent.matrixWorld)),t.applyMatrix4(xn),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const s=this.children[n].getObjectByProperty(t,e);if(s!==void 0)return s}}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(fr,t,Yh),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(fr,Zh,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++){const r=e[n];(r.matrixWorldAutoUpdate===!0||t===!0)&&r.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const i=this.children;for(let r=0,s=i.length;r<s;r++){const a=i[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];r(t.shapes,h)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));i.material=a}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(r(t.animations,l))}}if(e){const a=s(t.geometries),l=s(t.materials),c=s(t.textures),u=s(t.images),h=s(t.shapes),f=s(t.skeletons),m=s(t.animations),g=s(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=i,n;function s(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}ve.DefaultUp=new F(0,1,0);ve.DefaultMatrixAutoUpdate=!0;ve.DefaultMatrixWorldAutoUpdate=!0;const $e=new F,yn=new F,is=new F,An=new F,Pi=new F,Di=new F,_l=new F,rs=new F,as=new F,ss=new F;class Sn{constructor(t=new F,e=new F,n=new F){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),$e.subVectors(t,e),i.cross($e);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){$e.subVectors(i,e),yn.subVectors(n,e),is.subVectors(t,e);const s=$e.dot($e),a=$e.dot(yn),l=$e.dot(is),c=yn.dot(yn),u=yn.dot(is),h=s*c-a*a;if(h===0)return r.set(-2,-1,-1);const f=1/h,m=(c*l-a*u)*f,g=(s*u-a*l)*f;return r.set(1-m-g,g,m)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,An),An.x>=0&&An.y>=0&&An.x+An.y<=1}static getUV(t,e,n,i,r,s,a,l){return this.getBarycoord(t,e,n,i,An),l.set(0,0),l.addScaledVector(r,An.x),l.addScaledVector(s,An.y),l.addScaledVector(a,An.z),l}static isFrontFacing(t,e,n,i){return $e.subVectors(n,e),yn.subVectors(t,e),$e.cross(yn).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return $e.subVectors(this.c,this.b),yn.subVectors(this.a,this.b),$e.cross(yn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Sn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Sn.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,n,i,r){return Sn.getUV(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return Sn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Sn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,r=this.c;let s,a;Pi.subVectors(i,n),Di.subVectors(r,n),rs.subVectors(t,n);const l=Pi.dot(rs),c=Di.dot(rs);if(l<=0&&c<=0)return e.copy(n);as.subVectors(t,i);const u=Pi.dot(as),h=Di.dot(as);if(u>=0&&h<=u)return e.copy(i);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return s=l/(l-u),e.copy(n).addScaledVector(Pi,s);ss.subVectors(t,r);const m=Pi.dot(ss),g=Di.dot(ss);if(g>=0&&m<=g)return e.copy(r);const d=m*c-l*g;if(d<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(n).addScaledVector(Di,a);const p=u*g-m*h;if(p<=0&&h-u>=0&&m-g>=0)return _l.subVectors(r,i),a=(h-u)/(h-u+(m-g)),e.copy(i).addScaledVector(_l,a);const _=1/(p+d+f);return s=d*_,a=f*_,e.copy(n).addScaledVector(Pi,s).addScaledVector(Di,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}let Qh=0;class zr extends or{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Qh++}),this.uuid=Br(),this.name="",this.type="Material",this.blending=Hi,this.side=Yi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=hc,this.blendDst=fc,this.blendEquation=zi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Ds,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=kh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Wa,this.stencilZFail=Wa,this.stencilZPass=Wa,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn("THREE.Material: '"+e+"' parameter is undefined.");continue}const i=this[e];if(i===void 0){console.warn("THREE."+this.type+": '"+e+"' is not a property of this material.");continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Hi&&(n.blending=this.blending),this.side!==Yi&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData);function i(r){const s=[];for(const a in r){const l=r[a];delete l.metadata,s.push(l)}return s}if(e){const r=i(t.textures),s=i(t.images);r.length>0&&(n.textures=r),s.length>0&&(n.images=s)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class oo extends zr{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ut(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=dc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Zt=new F,$r=new Nt;class un{constructor(t,e,n){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n===!0,this.usage=rl,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)$r.fromBufferAttribute(this,e),$r.applyMatrix3(t),this.setXY(e,$r.x,$r.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Zt.fromBufferAttribute(this,e),Zt.applyMatrix3(t),this.setXYZ(e,Zt.x,Zt.y,Zt.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Zt.fromBufferAttribute(this,e),Zt.applyMatrix4(t),this.setXYZ(e,Zt.x,Zt.y,Zt.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Zt.fromBufferAttribute(this,e),Zt.applyNormalMatrix(t),this.setXYZ(e,Zt.x,Zt.y,Zt.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Zt.fromBufferAttribute(this,e),Zt.transformDirection(t),this.setXYZ(e,Zt.x,Zt.y,Zt.z);return this}set(t,e=0){return this.array.set(t,e),this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Hr(e,this.array)),e}setX(t,e){return this.normalized&&(e=Me(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Hr(e,this.array)),e}setY(t,e){return this.normalized&&(e=Me(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Hr(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Me(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Hr(e,this.array)),e}setW(t,e){return this.normalized&&(e=Me(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Me(e,this.array),n=Me(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=Me(e,this.array),n=Me(n,this.array),i=Me(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=Me(e,this.array),n=Me(n,this.array),i=Me(i,this.array),r=Me(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==rl&&(t.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(t.updateRange=this.updateRange),t}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class Ac extends un{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class wc extends un{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class en extends un{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Jh=0;const Fe=new $t,os=new ve,Li=new F,Te=new Nr,dr=new Nr,ee=new F;class pn extends or{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Jh++}),this.uuid=Br(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(gc(t)?wc:Ac)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new He().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Fe.makeRotationFromQuaternion(t),this.applyMatrix4(Fe),this}rotateX(t){return Fe.makeRotationX(t),this.applyMatrix4(Fe),this}rotateY(t){return Fe.makeRotationY(t),this.applyMatrix4(Fe),this}rotateZ(t){return Fe.makeRotationZ(t),this.applyMatrix4(Fe),this}translate(t,e,n){return Fe.makeTranslation(t,e,n),this.applyMatrix4(Fe),this}scale(t,e,n){return Fe.makeScale(t,e,n),this.applyMatrix4(Fe),this}lookAt(t){return os.lookAt(t),os.updateMatrix(),this.applyMatrix4(os.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Li).negate(),this.translate(Li.x,Li.y,Li.z),this}setFromPoints(t){const e=[];for(let n=0,i=t.length;n<i;n++){const r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new en(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Nr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const r=e[n];Te.setFromBufferAttribute(r),this.morphTargetsRelative?(ee.addVectors(this.boundingBox.min,Te.min),this.boundingBox.expandByPoint(ee),ee.addVectors(this.boundingBox.max,Te.max),this.boundingBox.expandByPoint(ee)):(this.boundingBox.expandByPoint(Te.min),this.boundingBox.expandByPoint(Te.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ra);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new F,1/0);return}if(t){const n=this.boundingSphere.center;if(Te.setFromBufferAttribute(t),e)for(let r=0,s=e.length;r<s;r++){const a=e[r];dr.setFromBufferAttribute(a),this.morphTargetsRelative?(ee.addVectors(Te.min,dr.min),Te.expandByPoint(ee),ee.addVectors(Te.max,dr.max),Te.expandByPoint(ee)):(Te.expandByPoint(dr.min),Te.expandByPoint(dr.max))}Te.getCenter(n);let i=0;for(let r=0,s=t.count;r<s;r++)ee.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(ee));if(e)for(let r=0,s=e.length;r<s;r++){const a=e[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)ee.fromBufferAttribute(a,c),l&&(Li.fromBufferAttribute(t,c),ee.add(Li)),i=Math.max(i,n.distanceToSquared(ee))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.array,i=e.position.array,r=e.normal.array,s=e.uv.array,a=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new un(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let D=0;D<a;D++)c[D]=new F,u[D]=new F;const h=new F,f=new F,m=new F,g=new Nt,d=new Nt,p=new Nt,_=new F,x=new F;function w(D,G,J){h.fromArray(i,D*3),f.fromArray(i,G*3),m.fromArray(i,J*3),g.fromArray(s,D*2),d.fromArray(s,G*2),p.fromArray(s,J*2),f.sub(h),m.sub(h),d.sub(g),p.sub(g);const N=1/(d.x*p.y-p.x*d.y);!isFinite(N)||(_.copy(f).multiplyScalar(p.y).addScaledVector(m,-d.y).multiplyScalar(N),x.copy(m).multiplyScalar(d.x).addScaledVector(f,-p.x).multiplyScalar(N),c[D].add(_),c[G].add(_),c[J].add(_),u[D].add(x),u[G].add(x),u[J].add(x))}let A=this.groups;A.length===0&&(A=[{start:0,count:n.length}]);for(let D=0,G=A.length;D<G;++D){const J=A[D],N=J.start,R=J.count;for(let z=N,j=N+R;z<j;z+=3)w(n[z+0],n[z+1],n[z+2])}const y=new F,T=new F,P=new F,v=new F;function M(D){P.fromArray(r,D*3),v.copy(P);const G=c[D];y.copy(G),y.sub(P.multiplyScalar(P.dot(G))).normalize(),T.crossVectors(v,G);const N=T.dot(u[D])<0?-1:1;l[D*4]=y.x,l[D*4+1]=y.y,l[D*4+2]=y.z,l[D*4+3]=N}for(let D=0,G=A.length;D<G;++D){const J=A[D],N=J.start,R=J.count;for(let z=N,j=N+R;z<j;z+=3)M(n[z+0]),M(n[z+1]),M(n[z+2])}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new un(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,m=n.count;f<m;f++)n.setXYZ(f,0,0,0);const i=new F,r=new F,s=new F,a=new F,l=new F,c=new F,u=new F,h=new F;if(t)for(let f=0,m=t.count;f<m;f+=3){const g=t.getX(f+0),d=t.getX(f+1),p=t.getX(f+2);i.fromBufferAttribute(e,g),r.fromBufferAttribute(e,d),s.fromBufferAttribute(e,p),u.subVectors(s,r),h.subVectors(i,r),u.cross(h),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,d),c.fromBufferAttribute(n,p),a.add(u),l.add(u),c.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(d,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,m=e.count;f<m;f+=3)i.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),s.fromBufferAttribute(e,f+2),u.subVectors(s,r),h.subVectors(i,r),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)ee.fromBufferAttribute(t,e),ee.normalize(),t.setXYZ(e,ee.x,ee.y,ee.z)}toNonIndexed(){function t(a,l){const c=a.array,u=a.itemSize,h=a.normalized,f=new c.constructor(l.length*u);let m=0,g=0;for(let d=0,p=l.length;d<p;d++){a.isInterleavedBufferAttribute?m=l[d]*a.data.stride+a.offset:m=l[d]*u;for(let _=0;_<u;_++)f[g++]=c[m++]}return new un(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new pn,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=t(l,n);e.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let u=0,h=c.length;u<h;u++){const f=c[u],m=t(f,n);l.push(m)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let a=0,l=s.length;a<l;a++){const c=s[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const m=c[h];u.push(m.toJSON(t.data))}u.length>0&&(i[l]=u,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(t.data.groups=JSON.parse(JSON.stringify(s)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(e))}const r=t.morphAttributes;for(const c in r){const u=[],h=r[c];for(let f=0,m=h.length;f<m;f++)u.push(h[f].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;const s=t.groups;for(let c=0,u=s.length;c<u;c++){const h=s[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,t.parameters!==void 0&&(this.parameters=Object.assign({},t.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const vl=new $t,Ri=new ao,ls=new Ra,Fn=new F,Nn=new F,Un=new F,cs=new F,us=new F,hs=new F,ta=new F,ea=new F,na=new F,ia=new Nt,ra=new Nt,aa=new Nt,fs=new F,sa=new F;class We extends ve{constructor(t=new pn,e=new oo){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=i.length;r<s;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}raycast(t,e){const n=this.geometry,i=this.material,r=this.matrixWorld;if(i===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),ls.copy(n.boundingSphere),ls.applyMatrix4(r),t.ray.intersectsSphere(ls)===!1)||(vl.copy(r).invert(),Ri.copy(t.ray).applyMatrix4(vl),n.boundingBox!==null&&Ri.intersectsBox(n.boundingBox)===!1))return;let s;const a=n.index,l=n.attributes.position,c=n.morphAttributes.position,u=n.morphTargetsRelative,h=n.attributes.uv,f=n.attributes.uv2,m=n.groups,g=n.drawRange;if(a!==null)if(Array.isArray(i))for(let d=0,p=m.length;d<p;d++){const _=m[d],x=i[_.materialIndex],w=Math.max(_.start,g.start),A=Math.min(a.count,Math.min(_.start+_.count,g.start+g.count));for(let y=w,T=A;y<T;y+=3){const P=a.getX(y),v=a.getX(y+1),M=a.getX(y+2);s=oa(this,x,t,Ri,l,c,u,h,f,P,v,M),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=_.materialIndex,e.push(s))}}else{const d=Math.max(0,g.start),p=Math.min(a.count,g.start+g.count);for(let _=d,x=p;_<x;_+=3){const w=a.getX(_),A=a.getX(_+1),y=a.getX(_+2);s=oa(this,i,t,Ri,l,c,u,h,f,w,A,y),s&&(s.faceIndex=Math.floor(_/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(i))for(let d=0,p=m.length;d<p;d++){const _=m[d],x=i[_.materialIndex],w=Math.max(_.start,g.start),A=Math.min(l.count,Math.min(_.start+_.count,g.start+g.count));for(let y=w,T=A;y<T;y+=3){const P=y,v=y+1,M=y+2;s=oa(this,x,t,Ri,l,c,u,h,f,P,v,M),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=_.materialIndex,e.push(s))}}else{const d=Math.max(0,g.start),p=Math.min(l.count,g.start+g.count);for(let _=d,x=p;_<x;_+=3){const w=_,A=_+1,y=_+2;s=oa(this,i,t,Ri,l,c,u,h,f,w,A,y),s&&(s.faceIndex=Math.floor(_/3),e.push(s))}}}}function $h(o,t,e,n,i,r,s,a){let l;if(t.side===De?l=n.intersectTriangle(s,r,i,!0,a):l=n.intersectTriangle(i,r,s,t.side!==zn,a),l===null)return null;sa.copy(a),sa.applyMatrix4(o.matrixWorld);const c=e.ray.origin.distanceTo(sa);return c<e.near||c>e.far?null:{distance:c,point:sa.clone(),object:o}}function oa(o,t,e,n,i,r,s,a,l,c,u,h){Fn.fromBufferAttribute(i,c),Nn.fromBufferAttribute(i,u),Un.fromBufferAttribute(i,h);const f=o.morphTargetInfluences;if(r&&f){ta.set(0,0,0),ea.set(0,0,0),na.set(0,0,0);for(let g=0,d=r.length;g<d;g++){const p=f[g],_=r[g];p!==0&&(cs.fromBufferAttribute(_,c),us.fromBufferAttribute(_,u),hs.fromBufferAttribute(_,h),s?(ta.addScaledVector(cs,p),ea.addScaledVector(us,p),na.addScaledVector(hs,p)):(ta.addScaledVector(cs.sub(Fn),p),ea.addScaledVector(us.sub(Nn),p),na.addScaledVector(hs.sub(Un),p)))}Fn.add(ta),Nn.add(ea),Un.add(na)}o.isSkinnedMesh&&(o.boneTransform(c,Fn),o.boneTransform(u,Nn),o.boneTransform(h,Un));const m=$h(o,t,e,n,Fn,Nn,Un,fs);if(m){a&&(ia.fromBufferAttribute(a,c),ra.fromBufferAttribute(a,u),aa.fromBufferAttribute(a,h),m.uv=Sn.getUV(fs,Fn,Nn,Un,ia,ra,aa,new Nt)),l&&(ia.fromBufferAttribute(l,c),ra.fromBufferAttribute(l,u),aa.fromBufferAttribute(l,h),m.uv2=Sn.getUV(fs,Fn,Nn,Un,ia,ra,aa,new Nt));const g={a:c,b:u,c:h,normal:new F,materialIndex:0};Sn.getNormal(Fn,Nn,Un,g.normal),m.face=g}return m}class lr extends pn{constructor(t=1,e=1,n=1,i=1,r=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:s};const a=this;i=Math.floor(i),r=Math.floor(r),s=Math.floor(s);const l=[],c=[],u=[],h=[];let f=0,m=0;g("z","y","x",-1,-1,n,e,t,s,r,0),g("z","y","x",1,-1,n,e,-t,s,r,1),g("x","z","y",1,1,t,n,e,i,s,2),g("x","z","y",1,-1,t,n,-e,i,s,3),g("x","y","z",1,-1,t,e,n,i,r,4),g("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new en(c,3)),this.setAttribute("normal",new en(u,3)),this.setAttribute("uv",new en(h,2));function g(d,p,_,x,w,A,y,T,P,v,M){const D=A/P,G=y/v,J=A/2,N=y/2,R=T/2,z=P+1,j=v+1;let Y=0,k=0;const O=new F;for(let U=0;U<j;U++){const $=U*G-N;for(let K=0;K<z;K++){const Q=K*D-J;O[d]=Q*x,O[p]=$*w,O[_]=R,c.push(O.x,O.y,O.z),O[d]=0,O[p]=0,O[_]=T>0?1:-1,u.push(O.x,O.y,O.z),h.push(K/P),h.push(1-U/v),Y+=1}}for(let U=0;U<v;U++)for(let $=0;$<P;$++){const K=f+$+z*U,Q=f+$+z*(U+1),rt=f+($+1)+z*(U+1),pt=f+($+1)+z*U;l.push(K,Q,pt),l.push(Q,rt,pt),k+=6}a.addGroup(m,k,M),m+=k,f+=Y}}static fromJSON(t){return new lr(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Ji(o){const t={};for(const e in o){t[e]={};for(const n in o[e]){const i=o[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function le(o){const t={};for(let e=0;e<o.length;e++){const n=Ji(o[e]);for(const i in n)t[i]=n[i]}return t}function tf(o){const t=[];for(let e=0;e<o.length;e++)t.push(o[e].clone());return t}const ef={clone:Ji,merge:le};var nf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,rf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class fn extends zr{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=nf,this.fragmentShader=rf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ji(t.uniforms),this.uniformsGroups=tf(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const s=this.uniforms[i].value;s&&s.isTexture?e.uniforms[i]={type:"t",value:s.toJSON(t).uuid}:s&&s.isColor?e.uniforms[i]={type:"c",value:s.getHex()}:s&&s.isVector2?e.uniforms[i]={type:"v2",value:s.toArray()}:s&&s.isVector3?e.uniforms[i]={type:"v3",value:s.toArray()}:s&&s.isVector4?e.uniforms[i]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?e.uniforms[i]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?e.uniforms[i]={type:"m4",value:s.toArray()}:e.uniforms[i]={value:s}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class bc extends ve{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new $t,this.projectionMatrix=new $t,this.projectionMatrixInverse=new $t}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(-e[8],-e[9],-e[10]).normalize()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Ve extends bc{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=sl*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Xa*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return sl*2*Math.atan(Math.tan(Xa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,n,i,r,s){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Xa*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i;const s=this.view;if(this.view!==null&&this.view.enabled){const l=s.fullWidth,c=s.fullHeight;r+=s.offsetX*i/l,e-=s.offsetY*n/c,i*=s.width/l,n*=s.height/c}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Ii=90,Oi=1;class af extends ve{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n;const i=new Ve(Ii,Oi,t,e);i.layers=this.layers,i.up.set(0,-1,0),i.lookAt(new F(1,0,0)),this.add(i);const r=new Ve(Ii,Oi,t,e);r.layers=this.layers,r.up.set(0,-1,0),r.lookAt(new F(-1,0,0)),this.add(r);const s=new Ve(Ii,Oi,t,e);s.layers=this.layers,s.up.set(0,0,1),s.lookAt(new F(0,1,0)),this.add(s);const a=new Ve(Ii,Oi,t,e);a.layers=this.layers,a.up.set(0,0,-1),a.lookAt(new F(0,-1,0)),this.add(a);const l=new Ve(Ii,Oi,t,e);l.layers=this.layers,l.up.set(0,-1,0),l.lookAt(new F(0,0,1)),this.add(l);const c=new Ve(Ii,Oi,t,e);c.layers=this.layers,c.up.set(0,-1,0),c.lookAt(new F(0,0,-1)),this.add(c)}update(t,e){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[i,r,s,a,l,c]=this.children,u=t.getRenderTarget(),h=t.toneMapping,f=t.xr.enabled;t.toneMapping=En,t.xr.enabled=!1;const m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0),t.render(e,i),t.setRenderTarget(n,1),t.render(e,r),t.setRenderTarget(n,2),t.render(e,s),t.setRenderTarget(n,3),t.render(e,a),t.setRenderTarget(n,4),t.render(e,l),n.texture.generateMipmaps=m,t.setRenderTarget(n,5),t.render(e,c),t.setRenderTarget(u),t.toneMapping=h,t.xr.enabled=f,n.texture.needsPMREMUpdate=!0}}class Mc extends Ye{constructor(t,e,n,i,r,s,a,l,c,u){t=t!==void 0?t:[],e=e!==void 0?e:Zi,super(t,e,n,i,r,s,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class sf extends _i{constructor(t,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new Mc(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:ke}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.encoding=e.encoding,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new lr(5,5,5),r=new fn({name:"CubemapFromEquirect",uniforms:Ji(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:De,blending:Hn});r.uniforms.tEquirect.value=e;const s=new We(i,r),a=e.minFilter;return e.minFilter===La&&(e.minFilter=ke),new af(1,10,this).update(t,s),e.minFilter=a,s.geometry.dispose(),s.material.dispose(),this}clear(t,e,n,i){const r=t.getRenderTarget();for(let s=0;s<6;s++)t.setRenderTarget(this,s),t.clear(e,n,i);t.setRenderTarget(r)}}const ds=new F,of=new F,lf=new He;class ni{constructor(t=new F(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=ds.subVectors(n,e).cross(of.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(this.normal).multiplyScalar(-this.distanceToPoint(t)).add(t)}intersectLine(t,e){const n=t.delta(ds),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:e.copy(n).multiplyScalar(r).add(t.start)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||lf.getNormalMatrix(t),i=this.coplanarPoint(ds).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Bi=new Ra,la=new F;class Sc{constructor(t=new ni,e=new ni,n=new ni,i=new ni,r=new ni,s=new ni){this.planes=[t,e,n,i,r,s]}set(t,e,n,i,r,s){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(s),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t){const e=this.planes,n=t.elements,i=n[0],r=n[1],s=n[2],a=n[3],l=n[4],c=n[5],u=n[6],h=n[7],f=n[8],m=n[9],g=n[10],d=n[11],p=n[12],_=n[13],x=n[14],w=n[15];return e[0].setComponents(a-i,h-l,d-f,w-p).normalize(),e[1].setComponents(a+i,h+l,d+f,w+p).normalize(),e[2].setComponents(a+r,h+c,d+m,w+_).normalize(),e[3].setComponents(a-r,h-c,d-m,w-_).normalize(),e[4].setComponents(a-s,h-u,d-g,w-x).normalize(),e[5].setComponents(a+s,h+u,d+g,w+x).normalize(),this}intersectsObject(t){const e=t.geometry;return e.boundingSphere===null&&e.computeBoundingSphere(),Bi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld),this.intersectsSphere(Bi)}intersectsSprite(t){return Bi.center.set(0,0,0),Bi.radius=.7071067811865476,Bi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Bi)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(la.x=i.normal.x>0?t.max.x:t.min.x,la.y=i.normal.y>0?t.max.y:t.min.y,la.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(la)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Tc(){let o=null,t=!1,e=null,n=null;function i(r,s){e(r,s),n=o.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=o.requestAnimationFrame(i),t=!0)},stop:function(){o.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){o=r}}}function cf(o,t){const e=t.isWebGL2,n=new WeakMap;function i(c,u){const h=c.array,f=c.usage,m=o.createBuffer();o.bindBuffer(u,m),o.bufferData(u,h,f),c.onUploadCallback();let g;if(h instanceof Float32Array)g=5126;else if(h instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(e)g=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=5123;else if(h instanceof Int16Array)g=5122;else if(h instanceof Uint32Array)g=5125;else if(h instanceof Int32Array)g=5124;else if(h instanceof Int8Array)g=5120;else if(h instanceof Uint8Array)g=5121;else if(h instanceof Uint8ClampedArray)g=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:m,type:g,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version}}function r(c,u,h){const f=u.array,m=u.updateRange;o.bindBuffer(h,c),m.count===-1?o.bufferSubData(h,0,f):(e?o.bufferSubData(h,m.offset*f.BYTES_PER_ELEMENT,f,m.offset,m.count):o.bufferSubData(h,m.offset*f.BYTES_PER_ELEMENT,f.subarray(m.offset,m.offset+m.count)),m.count=-1)}function s(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);u&&(o.deleteBuffer(u.buffer),n.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const f=n.get(c);(!f||f.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const h=n.get(c);h===void 0?n.set(c,i(c,u)):h.version<c.version&&(r(h.buffer,c,u),h.version=c.version)}return{get:s,remove:a,update:l}}class lo extends pn{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const r=t/2,s=e/2,a=Math.floor(n),l=Math.floor(i),c=a+1,u=l+1,h=t/a,f=e/l,m=[],g=[],d=[],p=[];for(let _=0;_<u;_++){const x=_*f-s;for(let w=0;w<c;w++){const A=w*h-r;g.push(A,-x,0),d.push(0,0,1),p.push(w/a),p.push(1-_/l)}}for(let _=0;_<l;_++)for(let x=0;x<a;x++){const w=x+c*_,A=x+c*(_+1),y=x+1+c*(_+1),T=x+1+c*_;m.push(w,A,T),m.push(A,y,T)}this.setIndex(m),this.setAttribute("position",new en(g,3)),this.setAttribute("normal",new en(d,3)),this.setAttribute("uv",new en(p,2))}static fromJSON(t){return new lo(t.width,t.height,t.widthSegments,t.heightSegments)}}var uf=`#ifdef USE_ALPHAMAP
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
#endif`,vf=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
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
#endif`,xf=`#ifdef USE_IRIDESCENCE
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
#endif`,Af=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,wf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,bf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Mf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Sf=`#if defined( USE_COLOR_ALPHA )
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
}`,Df=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Lf=`vec3 transformedNormal = objectNormal;
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
#endif`,Of=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Bf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ff="gl_FragColor = linearToOutputTexel( gl_FragColor );",Nf=`vec4 LinearToLinear( in vec4 value ) {
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
#endif`,zf=`#ifdef USE_ENVMAP
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
#endif`,jf=`#ifdef USE_GRADIENTMAP
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
}`,Yf=`#ifdef USE_LIGHTMAP
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
#endif`,ad=`struct PhysicalMaterial {
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
}`,sd=`
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
#endif`,vd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,xd=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
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
#endif`,Ad=`#ifdef USE_MORPHTARGETS
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
#endif`,wd=`#ifdef USE_MORPHTARGETS
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
#endif`,bd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 geometryNormal = normal;`,Md=`#ifdef OBJECTSPACE_NORMALMAP
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
#endif`,Sd=`#ifndef FLAT_SHADED
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
#endif`,Dd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,Ld=`#ifdef USE_CLEARCOATMAP
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
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Od=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Bd=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Fd=`vec4 mvPosition = vec4( transformed, 1.0 );
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
#endif`,zd=`float roughnessFactor = roughness;
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
#endif`,jd=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Yd=`#ifdef USE_SKINNING
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
#endif`,ap=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,sp=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
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
}`,vp=`uniform float scale;
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
}`,xp=`uniform vec3 diffuse;
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
}`,Ap=`uniform vec3 diffuse;
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
}`,wp=`#define LAMBERT
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
}`,bp=`#define LAMBERT
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
}`,Mp=`#define MATCAP
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
}`,Sp=`#define MATCAP
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
}`,Dp=`#define STANDARD
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
}`,Lp=`#define STANDARD
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
}`,Op=`uniform float size;
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
}`,Bp=`uniform vec3 diffuse;
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
}`,Fp=`#include <common>
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
}`,zp=`uniform vec3 diffuse;
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
}`,Mt={alphamap_fragment:uf,alphamap_pars_fragment:hf,alphatest_fragment:ff,alphatest_pars_fragment:df,aomap_fragment:pf,aomap_pars_fragment:mf,begin_vertex:gf,beginnormal_vertex:_f,bsdfs:vf,iridescence_fragment:xf,bumpmap_pars_fragment:yf,clipping_planes_fragment:Af,clipping_planes_pars_fragment:wf,clipping_planes_pars_vertex:bf,clipping_planes_vertex:Mf,color_fragment:Sf,color_pars_fragment:Tf,color_pars_vertex:Ef,color_vertex:Cf,common:Pf,cube_uv_reflection_fragment:Df,defaultnormal_vertex:Lf,displacementmap_pars_vertex:Rf,displacementmap_vertex:If,emissivemap_fragment:Of,emissivemap_pars_fragment:Bf,encodings_fragment:Ff,encodings_pars_fragment:Nf,envmap_fragment:Uf,envmap_common_pars_fragment:zf,envmap_pars_fragment:kf,envmap_pars_vertex:Vf,envmap_physical_pars_fragment:$f,envmap_vertex:Gf,fog_vertex:Hf,fog_pars_vertex:Wf,fog_fragment:Xf,fog_pars_fragment:qf,gradientmap_pars_fragment:jf,lightmap_fragment:Yf,lightmap_pars_fragment:Zf,lights_lambert_fragment:Kf,lights_lambert_pars_fragment:Qf,lights_pars_begin:Jf,lights_toon_fragment:td,lights_toon_pars_fragment:ed,lights_phong_fragment:nd,lights_phong_pars_fragment:id,lights_physical_fragment:rd,lights_physical_pars_fragment:ad,lights_fragment_begin:sd,lights_fragment_maps:od,lights_fragment_end:ld,logdepthbuf_fragment:cd,logdepthbuf_pars_fragment:ud,logdepthbuf_pars_vertex:hd,logdepthbuf_vertex:fd,map_fragment:dd,map_pars_fragment:pd,map_particle_fragment:md,map_particle_pars_fragment:gd,metalnessmap_fragment:_d,metalnessmap_pars_fragment:vd,morphcolor_vertex:xd,morphnormal_vertex:yd,morphtarget_pars_vertex:Ad,morphtarget_vertex:wd,normal_fragment_begin:bd,normal_fragment_maps:Md,normal_pars_fragment:Sd,normal_pars_vertex:Td,normal_vertex:Ed,normalmap_pars_fragment:Cd,clearcoat_normal_fragment_begin:Pd,clearcoat_normal_fragment_maps:Dd,clearcoat_pars_fragment:Ld,iridescence_pars_fragment:Rd,output_fragment:Id,packing:Od,premultiplied_alpha_fragment:Bd,project_vertex:Fd,dithering_fragment:Nd,dithering_pars_fragment:Ud,roughnessmap_fragment:zd,roughnessmap_pars_fragment:kd,shadowmap_pars_fragment:Vd,shadowmap_pars_vertex:Gd,shadowmap_vertex:Hd,shadowmask_pars_fragment:Wd,skinbase_vertex:Xd,skinning_pars_vertex:qd,skinning_vertex:jd,skinnormal_vertex:Yd,specularmap_fragment:Zd,specularmap_pars_fragment:Kd,tonemapping_fragment:Qd,tonemapping_pars_fragment:Jd,transmission_fragment:$d,transmission_pars_fragment:tp,uv_pars_fragment:ep,uv_pars_vertex:np,uv_vertex:ip,uv2_pars_fragment:rp,uv2_pars_vertex:ap,uv2_vertex:sp,worldpos_vertex:op,background_vert:lp,background_frag:cp,cube_vert:up,cube_frag:hp,depth_vert:fp,depth_frag:dp,distanceRGBA_vert:pp,distanceRGBA_frag:mp,equirect_vert:gp,equirect_frag:_p,linedashed_vert:vp,linedashed_frag:xp,meshbasic_vert:yp,meshbasic_frag:Ap,meshlambert_vert:wp,meshlambert_frag:bp,meshmatcap_vert:Mp,meshmatcap_frag:Sp,meshnormal_vert:Tp,meshnormal_frag:Ep,meshphong_vert:Cp,meshphong_frag:Pp,meshphysical_vert:Dp,meshphysical_frag:Lp,meshtoon_vert:Rp,meshtoon_frag:Ip,points_vert:Op,points_frag:Bp,shadow_vert:Fp,shadow_frag:Np,sprite_vert:Up,sprite_frag:zp},nt={common:{diffuse:{value:new Ut(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new He},uv2Transform:{value:new He},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new Nt(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ut(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ut(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new He}},sprite:{diffuse:{value:new Ut(16777215)},opacity:{value:1},center:{value:new Nt(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new He}}},on={basic:{uniforms:le([nt.common,nt.specularmap,nt.envmap,nt.aomap,nt.lightmap,nt.fog]),vertexShader:Mt.meshbasic_vert,fragmentShader:Mt.meshbasic_frag},lambert:{uniforms:le([nt.common,nt.specularmap,nt.envmap,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.fog,nt.lights,{emissive:{value:new Ut(0)}}]),vertexShader:Mt.meshlambert_vert,fragmentShader:Mt.meshlambert_frag},phong:{uniforms:le([nt.common,nt.specularmap,nt.envmap,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.fog,nt.lights,{emissive:{value:new Ut(0)},specular:{value:new Ut(1118481)},shininess:{value:30}}]),vertexShader:Mt.meshphong_vert,fragmentShader:Mt.meshphong_frag},standard:{uniforms:le([nt.common,nt.envmap,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.roughnessmap,nt.metalnessmap,nt.fog,nt.lights,{emissive:{value:new Ut(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Mt.meshphysical_vert,fragmentShader:Mt.meshphysical_frag},toon:{uniforms:le([nt.common,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.gradientmap,nt.fog,nt.lights,{emissive:{value:new Ut(0)}}]),vertexShader:Mt.meshtoon_vert,fragmentShader:Mt.meshtoon_frag},matcap:{uniforms:le([nt.common,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.fog,{matcap:{value:null}}]),vertexShader:Mt.meshmatcap_vert,fragmentShader:Mt.meshmatcap_frag},points:{uniforms:le([nt.points,nt.fog]),vertexShader:Mt.points_vert,fragmentShader:Mt.points_frag},dashed:{uniforms:le([nt.common,nt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Mt.linedashed_vert,fragmentShader:Mt.linedashed_frag},depth:{uniforms:le([nt.common,nt.displacementmap]),vertexShader:Mt.depth_vert,fragmentShader:Mt.depth_frag},normal:{uniforms:le([nt.common,nt.bumpmap,nt.normalmap,nt.displacementmap,{opacity:{value:1}}]),vertexShader:Mt.meshnormal_vert,fragmentShader:Mt.meshnormal_frag},sprite:{uniforms:le([nt.sprite,nt.fog]),vertexShader:Mt.sprite_vert,fragmentShader:Mt.sprite_frag},background:{uniforms:{uvTransform:{value:new He},t2D:{value:null}},vertexShader:Mt.background_vert,fragmentShader:Mt.background_frag},cube:{uniforms:le([nt.envmap,{opacity:{value:1}}]),vertexShader:Mt.cube_vert,fragmentShader:Mt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Mt.equirect_vert,fragmentShader:Mt.equirect_frag},distanceRGBA:{uniforms:le([nt.common,nt.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Mt.distanceRGBA_vert,fragmentShader:Mt.distanceRGBA_frag},shadow:{uniforms:le([nt.lights,nt.fog,{color:{value:new Ut(0)},opacity:{value:1}}]),vertexShader:Mt.shadow_vert,fragmentShader:Mt.shadow_frag}};on.physical={uniforms:le([on.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new Nt(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new Ut(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new Nt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new Ut(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new Ut(1,1,1)},specularColorMap:{value:null}}]),vertexShader:Mt.meshphysical_vert,fragmentShader:Mt.meshphysical_frag};function kp(o,t,e,n,i,r){const s=new Ut(0);let a=i===!0?0:1,l,c,u=null,h=0,f=null;function m(d,p){let _=!1,x=p.isScene===!0?p.background:null;x&&x.isTexture&&(x=t.get(x));const w=o.xr,A=w.getSession&&w.getSession();A&&A.environmentBlendMode==="additive"&&(x=null),x===null?g(s,a):x&&x.isColor&&(g(x,1),_=!0),(o.autoClear||_)&&o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil),x&&(x.isCubeTexture||x.mapping===Da)?(c===void 0&&(c=new We(new lr(1,1,1),new fn({name:"BackgroundCubeMaterial",uniforms:Ji(on.cube.uniforms),vertexShader:on.cube.vertexShader,fragmentShader:on.cube.fragmentShader,side:De,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(y,T,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=x,c.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,(u!==x||h!==x.version||f!==o.toneMapping)&&(c.material.needsUpdate=!0,u=x,h=x.version,f=o.toneMapping),c.layers.enableAll(),d.unshift(c,c.geometry,c.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new We(new lo(2,2),new fn({name:"BackgroundMaterial",uniforms:Ji(on.background.uniforms),vertexShader:on.background.vertexShader,fragmentShader:on.background.fragmentShader,side:Yi,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=x,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(u!==x||h!==x.version||f!==o.toneMapping)&&(l.material.needsUpdate=!0,u=x,h=x.version,f=o.toneMapping),l.layers.enableAll(),d.unshift(l,l.geometry,l.material,0,0,null))}function g(d,p){e.buffers.color.setClear(d.r,d.g,d.b,p,r)}return{getClearColor:function(){return s},setClearColor:function(d,p=1){s.set(d),a=p,g(s,a)},getClearAlpha:function(){return a},setClearAlpha:function(d){a=d,g(s,a)},render:m}}function Vp(o,t,e,n){const i=o.getParameter(34921),r=n.isWebGL2?null:t.get("OES_vertex_array_object"),s=n.isWebGL2||r!==null,a={},l=p(null);let c=l,u=!1;function h(R,z,j,Y,k){let O=!1;if(s){const U=d(Y,j,z);c!==U&&(c=U,m(c.object)),O=_(R,Y,j,k),O&&x(R,Y,j,k)}else{const U=z.wireframe===!0;(c.geometry!==Y.id||c.program!==j.id||c.wireframe!==U)&&(c.geometry=Y.id,c.program=j.id,c.wireframe=U,O=!0)}k!==null&&e.update(k,34963),(O||u)&&(u=!1,v(R,z,j,Y),k!==null&&o.bindBuffer(34963,e.get(k).buffer))}function f(){return n.isWebGL2?o.createVertexArray():r.createVertexArrayOES()}function m(R){return n.isWebGL2?o.bindVertexArray(R):r.bindVertexArrayOES(R)}function g(R){return n.isWebGL2?o.deleteVertexArray(R):r.deleteVertexArrayOES(R)}function d(R,z,j){const Y=j.wireframe===!0;let k=a[R.id];k===void 0&&(k={},a[R.id]=k);let O=k[z.id];O===void 0&&(O={},k[z.id]=O);let U=O[Y];return U===void 0&&(U=p(f()),O[Y]=U),U}function p(R){const z=[],j=[],Y=[];for(let k=0;k<i;k++)z[k]=0,j[k]=0,Y[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:j,attributeDivisors:Y,object:R,attributes:{},index:null}}function _(R,z,j,Y){const k=c.attributes,O=z.attributes;let U=0;const $=j.getAttributes();for(const K in $)if($[K].location>=0){const rt=k[K];let pt=O[K];if(pt===void 0&&(K==="instanceMatrix"&&R.instanceMatrix&&(pt=R.instanceMatrix),K==="instanceColor"&&R.instanceColor&&(pt=R.instanceColor)),rt===void 0||rt.attribute!==pt||pt&&rt.data!==pt.data)return!0;U++}return c.attributesNum!==U||c.index!==Y}function x(R,z,j,Y){const k={},O=z.attributes;let U=0;const $=j.getAttributes();for(const K in $)if($[K].location>=0){let rt=O[K];rt===void 0&&(K==="instanceMatrix"&&R.instanceMatrix&&(rt=R.instanceMatrix),K==="instanceColor"&&R.instanceColor&&(rt=R.instanceColor));const pt={};pt.attribute=rt,rt&&rt.data&&(pt.data=rt.data),k[K]=pt,U++}c.attributes=k,c.attributesNum=U,c.index=Y}function w(){const R=c.newAttributes;for(let z=0,j=R.length;z<j;z++)R[z]=0}function A(R){y(R,0)}function y(R,z){const j=c.newAttributes,Y=c.enabledAttributes,k=c.attributeDivisors;j[R]=1,Y[R]===0&&(o.enableVertexAttribArray(R),Y[R]=1),k[R]!==z&&((n.isWebGL2?o:t.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](R,z),k[R]=z)}function T(){const R=c.newAttributes,z=c.enabledAttributes;for(let j=0,Y=z.length;j<Y;j++)z[j]!==R[j]&&(o.disableVertexAttribArray(j),z[j]=0)}function P(R,z,j,Y,k,O){n.isWebGL2===!0&&(j===5124||j===5125)?o.vertexAttribIPointer(R,z,j,k,O):o.vertexAttribPointer(R,z,j,Y,k,O)}function v(R,z,j,Y){if(n.isWebGL2===!1&&(R.isInstancedMesh||Y.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;w();const k=Y.attributes,O=j.getAttributes(),U=z.defaultAttributeValues;for(const $ in O){const K=O[$];if(K.location>=0){let Q=k[$];if(Q===void 0&&($==="instanceMatrix"&&R.instanceMatrix&&(Q=R.instanceMatrix),$==="instanceColor"&&R.instanceColor&&(Q=R.instanceColor)),Q!==void 0){const rt=Q.normalized,pt=Q.itemSize,Z=e.get(Q);if(Z===void 0)continue;const Rt=Z.buffer,gt=Z.type,vt=Z.bytesPerElement;if(Q.isInterleavedBufferAttribute){const ct=Q.data,Ft=ct.stride,bt=Q.offset;if(ct.isInstancedInterleavedBuffer){for(let mt=0;mt<K.locationSize;mt++)y(K.location+mt,ct.meshPerAttribute);R.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=ct.meshPerAttribute*ct.count)}else for(let mt=0;mt<K.locationSize;mt++)A(K.location+mt);o.bindBuffer(34962,Rt);for(let mt=0;mt<K.locationSize;mt++)P(K.location+mt,pt/K.locationSize,gt,rt,Ft*vt,(bt+pt/K.locationSize*mt)*vt)}else{if(Q.isInstancedBufferAttribute){for(let ct=0;ct<K.locationSize;ct++)y(K.location+ct,Q.meshPerAttribute);R.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let ct=0;ct<K.locationSize;ct++)A(K.location+ct);o.bindBuffer(34962,Rt);for(let ct=0;ct<K.locationSize;ct++)P(K.location+ct,pt/K.locationSize,gt,rt,pt*vt,pt/K.locationSize*ct*vt)}}else if(U!==void 0){const rt=U[$];if(rt!==void 0)switch(rt.length){case 2:o.vertexAttrib2fv(K.location,rt);break;case 3:o.vertexAttrib3fv(K.location,rt);break;case 4:o.vertexAttrib4fv(K.location,rt);break;default:o.vertexAttrib1fv(K.location,rt)}}}}T()}function M(){J();for(const R in a){const z=a[R];for(const j in z){const Y=z[j];for(const k in Y)g(Y[k].object),delete Y[k];delete z[j]}delete a[R]}}function D(R){if(a[R.id]===void 0)return;const z=a[R.id];for(const j in z){const Y=z[j];for(const k in Y)g(Y[k].object),delete Y[k];delete z[j]}delete a[R.id]}function G(R){for(const z in a){const j=a[z];if(j[R.id]===void 0)continue;const Y=j[R.id];for(const k in Y)g(Y[k].object),delete Y[k];delete j[R.id]}}function J(){N(),u=!0,c!==l&&(c=l,m(c.object))}function N(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:J,resetDefaultState:N,dispose:M,releaseStatesOfGeometry:D,releaseStatesOfProgram:G,initAttributes:w,enableAttribute:A,disableUnusedAttributes:T}}function Gp(o,t,e,n){const i=n.isWebGL2;let r;function s(c){r=c}function a(c,u){o.drawArrays(r,c,u),e.update(u,r,1)}function l(c,u,h){if(h===0)return;let f,m;if(i)f=o,m="drawArraysInstanced";else if(f=t.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[m](r,c,u,h),e.update(u,r,h)}this.setMode=s,this.render=a,this.renderInstances=l}function Hp(o,t,e){let n;function i(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){const P=t.get("EXT_texture_filter_anisotropic");n=o.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(P){if(P==="highp"){if(o.getShaderPrecisionFormat(35633,36338).precision>0&&o.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";P="mediump"}return P==="mediump"&&o.getShaderPrecisionFormat(35633,36337).precision>0&&o.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const s=typeof WebGL2RenderingContext<"u"&&o instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext<"u"&&o instanceof WebGL2ComputeRenderingContext;let a=e.precision!==void 0?e.precision:"highp";const l=r(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=s||t.has("WEBGL_draw_buffers"),u=e.logarithmicDepthBuffer===!0,h=o.getParameter(34930),f=o.getParameter(35660),m=o.getParameter(3379),g=o.getParameter(34076),d=o.getParameter(34921),p=o.getParameter(36347),_=o.getParameter(36348),x=o.getParameter(36349),w=f>0,A=s||t.has("OES_texture_float"),y=w&&A,T=s?o.getParameter(36183):0;return{isWebGL2:s,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:f,maxTextureSize:m,maxCubemapSize:g,maxAttributes:d,maxVertexUniforms:p,maxVaryings:_,maxFragmentUniforms:x,vertexTextures:w,floatFragmentTextures:A,floatVertexTextures:y,maxSamples:T}}function Wp(o){const t=this;let e=null,n=0,i=!1,r=!1;const s=new ni,a=new He,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f,m){const g=h.length!==0||f||n!==0||i;return i=f,e=u(h,m,0),n=h.length,g},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1,c()},this.setState=function(h,f,m){const g=h.clippingPlanes,d=h.clipIntersection,p=h.clipShadows,_=o.get(h);if(!i||g===null||g.length===0||r&&!p)r?u(null):c();else{const x=r?0:n,w=x*4;let A=_.clippingState||null;l.value=A,A=u(g,f,w,m);for(let y=0;y!==w;++y)A[y]=e[y];_.clippingState=A,this.numIntersection=d?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(h,f,m,g){const d=h!==null?h.length:0;let p=null;if(d!==0){if(p=l.value,g!==!0||p===null){const _=m+d*4,x=f.matrixWorldInverse;a.getNormalMatrix(x),(p===null||p.length<_)&&(p=new Float32Array(_));for(let w=0,A=m;w!==d;++w,A+=4)s.copy(h[w]).applyMatrix4(x,a),s.normal.toArray(p,A),p[A+3]=s.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=d,t.numIntersection=0,p}}function Xp(o){let t=new WeakMap;function e(s,a){return a===Ls?s.mapping=Zi:a===Rs&&(s.mapping=Ki),s}function n(s){if(s&&s.isTexture&&s.isRenderTargetTexture===!1){const a=s.mapping;if(a===Ls||a===Rs)if(t.has(s)){const l=t.get(s).texture;return e(l,s.mapping)}else{const l=s.image;if(l&&l.height>0){const c=new sf(l.height/2);return c.fromEquirectangularTexture(o,s),t.set(s,c),s.addEventListener("dispose",i),e(c.texture,s.mapping)}else return null}}return s}function i(s){const a=s.target;a.removeEventListener("dispose",i);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class qp extends bc{constructor(t=-1,e=1,n=1,i=-1,r=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=s,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-t,s=n+t,a=i+e,l=i-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,s=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,s,a,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const ki=4,xl=[.125,.215,.35,.446,.526,.582],ai=20,ps=new qp,yl=new Ut;let ms=null;const ii=(1+Math.sqrt(5))/2,Fi=1/ii,Al=[new F(1,1,1),new F(-1,1,1),new F(1,1,-1),new F(-1,1,-1),new F(0,ii,Fi),new F(0,ii,-Fi),new F(Fi,0,ii),new F(-Fi,0,ii),new F(ii,Fi,0),new F(-ii,Fi,0)];class wl{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){ms=this._renderer.getRenderTarget(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,i,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Sl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ml(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(ms),t.scissorTest=!1,ca(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Zi||t.mapping===Ki?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ms=this._renderer.getRenderTarget();const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:ke,minFilter:ke,generateMipmaps:!1,type:Sr,format:cn,encoding:gi,depthBuffer:!1},i=bl(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=bl(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=jp(r)),this._blurMaterial=Yp(r,t,e)}return i}_compileMaterial(t){const e=new We(this._lodPlanes[0],t);this._renderer.compile(e,ps)}_sceneToCubeUV(t,e,n,i){const a=new Ve(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(yl),u.toneMapping=En,u.autoClear=!1;const m=new oo({name:"PMREM.Background",side:De,depthWrite:!1,depthTest:!1}),g=new We(new lr,m);let d=!1;const p=t.background;p?p.isColor&&(m.color.copy(p),t.background=null,d=!0):(m.color.copy(yl),d=!0);for(let _=0;_<6;_++){const x=_%3;x===0?(a.up.set(0,l[_],0),a.lookAt(c[_],0,0)):x===1?(a.up.set(0,0,l[_]),a.lookAt(0,c[_],0)):(a.up.set(0,l[_],0),a.lookAt(0,0,c[_]));const w=this._cubeSize;ca(i,x*w,_>2?w:0,w,w),u.setRenderTarget(i),d&&u.render(g,a),u.render(t,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=f,u.autoClear=h,t.background=p}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===Zi||t.mapping===Ki;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Sl()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ml());const r=i?this._cubemapMaterial:this._equirectMaterial,s=new We(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const l=this._cubeSize;ca(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(s,ps)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const r=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),s=Al[(i-1)%Al.length];this._blur(t,i-1,i,r,s)}e.autoClear=n}_blur(t,e,n,i,r){const s=this._pingPongRenderTarget;this._halfBlur(t,s,e,n,i,"latitudinal",r),this._halfBlur(s,t,n,n,i,"longitudinal",r)}_halfBlur(t,e,n,i,r,s,a){const l=this._renderer,c=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new We(this._lodPlanes[i],c),f=c.uniforms,m=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*ai-1),d=r/g,p=isFinite(r)?1+Math.floor(u*d):ai;p>ai&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${ai}`);const _=[];let x=0;for(let P=0;P<ai;++P){const v=P/d,M=Math.exp(-v*v/2);_.push(M),P===0?x+=M:P<p&&(x+=2*M)}for(let P=0;P<_.length;P++)_[P]=_[P]/x;f.envMap.value=t.texture,f.samples.value=p,f.weights.value=_,f.latitudinal.value=s==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:w}=this;f.dTheta.value=g,f.mipInt.value=w-n;const A=this._sizeLods[i],y=3*A*(i>w-ki?i-w+ki:0),T=4*(this._cubeSize-A);ca(e,y,T,3*A,2*A),l.setRenderTarget(e),l.render(h,ps)}}function jp(o){const t=[],e=[],n=[];let i=o;const r=o-ki+1+xl.length;for(let s=0;s<r;s++){const a=Math.pow(2,i);e.push(a);let l=1/a;s>o-ki?l=xl[s-o+ki-1]:s===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],m=6,g=6,d=3,p=2,_=1,x=new Float32Array(d*g*m),w=new Float32Array(p*g*m),A=new Float32Array(_*g*m);for(let T=0;T<m;T++){const P=T%3*2/3-1,v=T>2?0:-1,M=[P,v,0,P+2/3,v,0,P+2/3,v+1,0,P,v,0,P+2/3,v+1,0,P,v+1,0];x.set(M,d*g*T),w.set(f,p*g*T);const D=[T,T,T,T,T,T];A.set(D,_*g*T)}const y=new pn;y.setAttribute("position",new un(x,d)),y.setAttribute("uv",new un(w,p)),y.setAttribute("faceIndex",new un(A,_)),t.push(y),i>ki&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function bl(o,t,e){const n=new _i(o,t,e);return n.texture.mapping=Da,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ca(o,t,e,n,i){o.viewport.set(t,e,n,i),o.scissor.set(t,e,n,i)}function Yp(o,t,e){const n=new Float32Array(ai),i=new F(0,1,0);return new fn({name:"SphericalGaussianBlur",defines:{n:ai,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:co(),fragmentShader:`

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
		`,blending:Hn,depthTest:!1,depthWrite:!1})}function Ml(){return new fn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:co(),fragmentShader:`

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
		`,blending:Hn,depthTest:!1,depthWrite:!1})}function Sl(){return new fn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:co(),fragmentShader:`

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
	`}function Zp(o){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===Ls||l===Rs,u=l===Zi||l===Ki;if(c||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let h=t.get(a);return e===null&&(e=new wl(o)),h=c?e.fromEquirectangular(a,h):e.fromCubemap(a,h),t.set(a,h),h.texture}else{if(t.has(a))return t.get(a).texture;{const h=a.image;if(c&&h&&h.height>0||u&&h&&i(h)){e===null&&(e=new wl(o));const f=c?e.fromEquirectangular(a):e.fromCubemap(a);return t.set(a,f),a.addEventListener("dispose",r),f.texture}else return null}}}return a}function i(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function s(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:s}}function Kp(o){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=o.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(n){n.isWebGL2?e("EXT_color_buffer_float"):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(n){const i=e(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Qp(o,t,e,n){const i={},r=new WeakMap;function s(h){const f=h.target;f.index!==null&&t.remove(f.index);for(const g in f.attributes)t.remove(f.attributes[g]);f.removeEventListener("dispose",s),delete i[f.id];const m=r.get(f);m&&(t.remove(m),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(h,f){return i[f.id]===!0||(f.addEventListener("dispose",s),i[f.id]=!0,e.memory.geometries++),f}function l(h){const f=h.attributes;for(const g in f)t.update(f[g],34962);const m=h.morphAttributes;for(const g in m){const d=m[g];for(let p=0,_=d.length;p<_;p++)t.update(d[p],34962)}}function c(h){const f=[],m=h.index,g=h.attributes.position;let d=0;if(m!==null){const x=m.array;d=m.version;for(let w=0,A=x.length;w<A;w+=3){const y=x[w+0],T=x[w+1],P=x[w+2];f.push(y,T,T,P,P,y)}}else{const x=g.array;d=g.version;for(let w=0,A=x.length/3-1;w<A;w+=3){const y=w+0,T=w+1,P=w+2;f.push(y,T,T,P,P,y)}}const p=new(gc(f)?wc:Ac)(f,1);p.version=d;const _=r.get(h);_&&t.remove(_),r.set(h,p)}function u(h){const f=r.get(h);if(f){const m=h.index;m!==null&&f.version<m.version&&c(h)}else c(h);return r.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function Jp(o,t,e,n){const i=n.isWebGL2;let r;function s(f){r=f}let a,l;function c(f){a=f.type,l=f.bytesPerElement}function u(f,m){o.drawElements(r,m,a,f*l),e.update(m,r,1)}function h(f,m,g){if(g===0)return;let d,p;if(i)d=o,p="drawElementsInstanced";else if(d=t.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",d===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[p](r,m,a,f*l,g),e.update(m,r,g)}this.setMode=s,this.setIndex=c,this.render=u,this.renderInstances=h}function $p(o){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,s,a){switch(e.calls++,s){case 4:e.triangles+=a*(r/3);break;case 1:e.lines+=a*(r/2);break;case 3:e.lines+=a*(r-1);break;case 2:e.lines+=a*r;break;case 0:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",s);break}}function i(){e.frame++,e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function tm(o,t){return o[0]-t[0]}function em(o,t){return Math.abs(t[1])-Math.abs(o[1])}function nm(o,t,e){const n={},i=new Float32Array(8),r=new WeakMap,s=new se,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,u,h,f){const m=c.morphTargetInfluences;if(t.isWebGL2===!0){const d=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,p=d!==void 0?d.length:0;let _=r.get(u);if(_===void 0||_.count!==p){let j=function(){R.dispose(),r.delete(u),u.removeEventListener("dispose",j)};var g=j;_!==void 0&&_.texture.dispose();const A=u.morphAttributes.position!==void 0,y=u.morphAttributes.normal!==void 0,T=u.morphAttributes.color!==void 0,P=u.morphAttributes.position||[],v=u.morphAttributes.normal||[],M=u.morphAttributes.color||[];let D=0;A===!0&&(D=1),y===!0&&(D=2),T===!0&&(D=3);let G=u.attributes.position.count*D,J=1;G>t.maxTextureSize&&(J=Math.ceil(G/t.maxTextureSize),G=t.maxTextureSize);const N=new Float32Array(G*J*4*p),R=new yc(N,G,J,p);R.type=oi,R.needsUpdate=!0;const z=D*4;for(let Y=0;Y<p;Y++){const k=P[Y],O=v[Y],U=M[Y],$=G*J*4*Y;for(let K=0;K<k.count;K++){const Q=K*z;A===!0&&(s.fromBufferAttribute(k,K),N[$+Q+0]=s.x,N[$+Q+1]=s.y,N[$+Q+2]=s.z,N[$+Q+3]=0),y===!0&&(s.fromBufferAttribute(O,K),N[$+Q+4]=s.x,N[$+Q+5]=s.y,N[$+Q+6]=s.z,N[$+Q+7]=0),T===!0&&(s.fromBufferAttribute(U,K),N[$+Q+8]=s.x,N[$+Q+9]=s.y,N[$+Q+10]=s.z,N[$+Q+11]=U.itemSize===4?s.w:1)}}_={count:p,texture:R,size:new Nt(G,J)},r.set(u,_),u.addEventListener("dispose",j)}let x=0;for(let A=0;A<m.length;A++)x+=m[A];const w=u.morphTargetsRelative?1:1-x;f.getUniforms().setValue(o,"morphTargetBaseInfluence",w),f.getUniforms().setValue(o,"morphTargetInfluences",m),f.getUniforms().setValue(o,"morphTargetsTexture",_.texture,e),f.getUniforms().setValue(o,"morphTargetsTextureSize",_.size)}else{const d=m===void 0?0:m.length;let p=n[u.id];if(p===void 0||p.length!==d){p=[];for(let y=0;y<d;y++)p[y]=[y,0];n[u.id]=p}for(let y=0;y<d;y++){const T=p[y];T[0]=y,T[1]=m[y]}p.sort(em);for(let y=0;y<8;y++)y<d&&p[y][1]?(a[y][0]=p[y][0],a[y][1]=p[y][1]):(a[y][0]=Number.MAX_SAFE_INTEGER,a[y][1]=0);a.sort(tm);const _=u.morphAttributes.position,x=u.morphAttributes.normal;let w=0;for(let y=0;y<8;y++){const T=a[y],P=T[0],v=T[1];P!==Number.MAX_SAFE_INTEGER&&v?(_&&u.getAttribute("morphTarget"+y)!==_[P]&&u.setAttribute("morphTarget"+y,_[P]),x&&u.getAttribute("morphNormal"+y)!==x[P]&&u.setAttribute("morphNormal"+y,x[P]),i[y]=v,w+=v):(_&&u.hasAttribute("morphTarget"+y)===!0&&u.deleteAttribute("morphTarget"+y),x&&u.hasAttribute("morphNormal"+y)===!0&&u.deleteAttribute("morphNormal"+y),i[y]=0)}const A=u.morphTargetsRelative?1:1-w;f.getUniforms().setValue(o,"morphTargetBaseInfluence",A),f.getUniforms().setValue(o,"morphTargetInfluences",i)}}return{update:l}}function im(o,t,e,n){let i=new WeakMap;function r(l){const c=n.render.frame,u=l.geometry,h=t.get(l,u);return i.get(h)!==c&&(t.update(h),i.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),e.update(l.instanceMatrix,34962),l.instanceColor!==null&&e.update(l.instanceColor,34962)),h}function s(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:s}}const Ec=new Ye,Cc=new yc,Pc=new Hh,Dc=new Mc,Tl=[],El=[],Cl=new Float32Array(16),Pl=new Float32Array(9),Dl=new Float32Array(4);function cr(o,t,e){const n=o[0];if(n<=0||n>0)return o;const i=t*e;let r=Tl[i];if(r===void 0&&(r=new Float32Array(i),Tl[i]=r),t!==0){n.toArray(r,0);for(let s=1,a=0;s!==t;++s)a+=e,o[s].toArray(r,a)}return r}function pe(o,t){if(o.length!==t.length)return!1;for(let e=0,n=o.length;e<n;e++)if(o[e]!==t[e])return!1;return!0}function me(o,t){for(let e=0,n=t.length;e<n;e++)o[e]=t[e]}function Ia(o,t){let e=El[t];e===void 0&&(e=new Int32Array(t),El[t]=e);for(let n=0;n!==t;++n)e[n]=o.allocateTextureUnit();return e}function rm(o,t){const e=this.cache;e[0]!==t&&(o.uniform1f(this.addr,t),e[0]=t)}function am(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(o.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(pe(e,t))return;o.uniform2fv(this.addr,t),me(e,t)}}function sm(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(o.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(o.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(pe(e,t))return;o.uniform3fv(this.addr,t),me(e,t)}}function om(o,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(o.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(pe(e,t))return;o.uniform4fv(this.addr,t),me(e,t)}}function lm(o,t){const e=this.cache,n=t.elements;if(n===void 0){if(pe(e,t))return;o.uniformMatrix2fv(this.addr,!1,t),me(e,t)}else{if(pe(e,n))return;Dl.set(n),o.uniformMatrix2fv(this.addr,!1,Dl),me(e,n)}}function cm(o,t){const e=this.cache,n=t.elements;if(n===void 0){if(pe(e,t))return;o.uniformMatrix3fv(this.addr,!1,t),me(e,t)}else{if(pe(e,n))return;Pl.set(n),o.uniformMatrix3fv(this.addr,!1,Pl),me(e,n)}}function um(o,t){const e=this.cache,n=t.elements;if(n===void 0){if(pe(e,t))return;o.uniformMatrix4fv(this.addr,!1,t),me(e,t)}else{if(pe(e,n))return;Cl.set(n),o.uniformMatrix4fv(this.addr,!1,Cl),me(e,n)}}function hm(o,t){const e=this.cache;e[0]!==t&&(o.uniform1i(this.addr,t),e[0]=t)}function fm(o,t){const e=this.cache;pe(e,t)||(o.uniform2iv(this.addr,t),me(e,t))}function dm(o,t){const e=this.cache;pe(e,t)||(o.uniform3iv(this.addr,t),me(e,t))}function pm(o,t){const e=this.cache;pe(e,t)||(o.uniform4iv(this.addr,t),me(e,t))}function mm(o,t){const e=this.cache;e[0]!==t&&(o.uniform1ui(this.addr,t),e[0]=t)}function gm(o,t){const e=this.cache;pe(e,t)||(o.uniform2uiv(this.addr,t),me(e,t))}function _m(o,t){const e=this.cache;pe(e,t)||(o.uniform3uiv(this.addr,t),me(e,t))}function vm(o,t){const e=this.cache;pe(e,t)||(o.uniform4uiv(this.addr,t),me(e,t))}function xm(o,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(o.uniform1i(this.addr,i),n[0]=i),e.setTexture2D(t||Ec,i)}function ym(o,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(o.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||Pc,i)}function Am(o,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(o.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||Dc,i)}function wm(o,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(o.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||Cc,i)}function bm(o){switch(o){case 5126:return rm;case 35664:return am;case 35665:return sm;case 35666:return om;case 35674:return lm;case 35675:return cm;case 35676:return um;case 5124:case 35670:return hm;case 35667:case 35671:return fm;case 35668:case 35672:return dm;case 35669:case 35673:return pm;case 5125:return mm;case 36294:return gm;case 36295:return _m;case 36296:return vm;case 35678:case 36198:case 36298:case 36306:case 35682:return xm;case 35679:case 36299:case 36307:return ym;case 35680:case 36300:case 36308:case 36293:return Am;case 36289:case 36303:case 36311:case 36292:return wm}}function Mm(o,t){o.uniform1fv(this.addr,t)}function Sm(o,t){const e=cr(t,this.size,2);o.uniform2fv(this.addr,e)}function Tm(o,t){const e=cr(t,this.size,3);o.uniform3fv(this.addr,e)}function Em(o,t){const e=cr(t,this.size,4);o.uniform4fv(this.addr,e)}function Cm(o,t){const e=cr(t,this.size,4);o.uniformMatrix2fv(this.addr,!1,e)}function Pm(o,t){const e=cr(t,this.size,9);o.uniformMatrix3fv(this.addr,!1,e)}function Dm(o,t){const e=cr(t,this.size,16);o.uniformMatrix4fv(this.addr,!1,e)}function Lm(o,t){o.uniform1iv(this.addr,t)}function Rm(o,t){o.uniform2iv(this.addr,t)}function Im(o,t){o.uniform3iv(this.addr,t)}function Om(o,t){o.uniform4iv(this.addr,t)}function Bm(o,t){o.uniform1uiv(this.addr,t)}function Fm(o,t){o.uniform2uiv(this.addr,t)}function Nm(o,t){o.uniform3uiv(this.addr,t)}function Um(o,t){o.uniform4uiv(this.addr,t)}function zm(o,t,e){const n=t.length,i=Ia(e,n);o.uniform1iv(this.addr,i);for(let r=0;r!==n;++r)e.setTexture2D(t[r]||Ec,i[r])}function km(o,t,e){const n=t.length,i=Ia(e,n);o.uniform1iv(this.addr,i);for(let r=0;r!==n;++r)e.setTexture3D(t[r]||Pc,i[r])}function Vm(o,t,e){const n=t.length,i=Ia(e,n);o.uniform1iv(this.addr,i);for(let r=0;r!==n;++r)e.setTextureCube(t[r]||Dc,i[r])}function Gm(o,t,e){const n=t.length,i=Ia(e,n);o.uniform1iv(this.addr,i);for(let r=0;r!==n;++r)e.setTexture2DArray(t[r]||Cc,i[r])}function Hm(o){switch(o){case 5126:return Mm;case 35664:return Sm;case 35665:return Tm;case 35666:return Em;case 35674:return Cm;case 35675:return Pm;case 35676:return Dm;case 5124:case 35670:return Lm;case 35667:case 35671:return Rm;case 35668:case 35672:return Im;case 35669:case 35673:return Om;case 5125:return Bm;case 36294:return Fm;case 36295:return Nm;case 36296:return Um;case 35678:case 36198:case 36298:case 36306:case 35682:return zm;case 35679:case 36299:case 36307:return km;case 35680:case 36300:case 36308:case 36293:return Vm;case 36289:case 36303:case 36311:case 36292:return Gm}}class Wm{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.setValue=bm(e.type)}}class Xm{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.size=e.size,this.setValue=Hm(e.type)}}class qm{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let r=0,s=i.length;r!==s;++r){const a=i[r];a.setValue(t,e[a.id],n)}}}const gs=/(\w+)(\])?(\[|\.)?/g;function Ll(o,t){o.seq.push(t),o.map[t.id]=t}function jm(o,t,e){const n=o.name,i=n.length;for(gs.lastIndex=0;;){const r=gs.exec(n),s=gs.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&s+2===i){Ll(e,c===void 0?new Wm(a,o,t):new Xm(a,o,t));break}else{let h=e.map[a];h===void 0&&(h=new qm(a),Ll(e,h)),e=h}}}class ma{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,35718);for(let i=0;i<n;++i){const r=t.getActiveUniform(e,i),s=t.getUniformLocation(e,r.name);jm(r,s,this)}}setValue(t,e,n,i){const r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,s=e.length;r!==s;++r){const a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,r=t.length;i!==r;++i){const s=t[i];s.id in e&&n.push(s)}return n}}function Rl(o,t,e){const n=o.createShader(t);return o.shaderSource(n,e),o.compileShader(n),n}let Ym=0;function Zm(o,t){const e=o.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let s=i;s<r;s++){const a=s+1;n.push(`${a===t?">":" "} ${a}: ${e[s]}`)}return n.join(`
`)}function Km(o){switch(o){case gi:return["Linear","( value )"];case Ht:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",o),["Linear","( value )"]}}function Il(o,t,e){const n=o.getShaderParameter(t,35713),i=o.getShaderInfoLog(t).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const s=parseInt(r[1]);return e.toUpperCase()+`

`+i+`

`+Zm(o.getShaderSource(t),s)}else return i}function Qm(o,t){const e=Km(t);return"vec4 "+o+"( vec4 value ) { return LinearTo"+e[0]+e[1]+"; }"}function Jm(o,t){let e;switch(t){case mh:e="Linear";break;case gh:e="Reinhard";break;case _h:e="OptimizedCineon";break;case vh:e="ACESFilmic";break;case xh:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+o+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function $m(o){return[o.extensionDerivatives||!!o.envMapCubeUVHeight||o.bumpMap||o.tangentSpaceNormalMap||o.clearcoatNormalMap||o.flatShading||o.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(o.extensionFragDepth||o.logarithmicDepthBuffer)&&o.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",o.extensionDrawBuffers&&o.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(o.extensionShaderTextureLOD||o.envMap||o.transmission)&&o.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(gr).join(`
`)}function tg(o){const t=[];for(const e in o){const n=o[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function eg(o,t){const e={},n=o.getProgramParameter(t,35721);for(let i=0;i<n;i++){const r=o.getActiveAttrib(t,i),s=r.name;let a=1;r.type===35674&&(a=2),r.type===35675&&(a=3),r.type===35676&&(a=4),e[s]={type:r.type,location:o.getAttribLocation(t,s),locationSize:a}}return e}function gr(o){return o!==""}function Ol(o,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Bl(o,t){return o.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const ng=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ns(o){return o.replace(ng,ig)}function ig(o,t){const e=Mt[t];if(e===void 0)throw new Error("Can not resolve #include <"+t+">");return Ns(e)}const rg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Fl(o){return o.replace(rg,ag)}function ag(o,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Nl(o){let t="precision "+o.precision+` float;
precision `+o.precision+" int;";return o.precision==="highp"?t+=`
#define HIGH_PRECISION`:o.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function sg(o){let t="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===uc?t="SHADOWMAP_TYPE_PCF":o.shadowMapType===ju?t="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===mr&&(t="SHADOWMAP_TYPE_VSM"),t}function og(o){let t="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case Zi:case Ki:t="ENVMAP_TYPE_CUBE";break;case Da:t="ENVMAP_TYPE_CUBE_UV";break}return t}function lg(o){let t="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case Ki:t="ENVMAP_MODE_REFRACTION";break}return t}function cg(o){let t="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case dc:t="ENVMAP_BLENDING_MULTIPLY";break;case dh:t="ENVMAP_BLENDING_MIX";break;case ph:t="ENVMAP_BLENDING_ADD";break}return t}function ug(o){const t=o.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function hg(o,t,e,n){const i=o.getContext(),r=e.defines;let s=e.vertexShader,a=e.fragmentShader;const l=sg(e),c=og(e),u=lg(e),h=cg(e),f=ug(e),m=e.isWebGL2?"":$m(e),g=tg(r),d=i.createProgram();let p,_,x=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=[g].filter(gr).join(`
`),p.length>0&&(p+=`
`),_=[m,g].filter(gr).join(`
`),_.length>0&&(_+=`
`)):(p=[Nl(e),"#define SHADER_NAME "+e.shaderName,g,e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.supportsVertexTextures?"#define VERTEX_TEXTURES":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMap&&e.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",e.normalMap&&e.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.displacementMap&&e.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",e.specularColorMap?"#define USE_SPECULARCOLORMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEENCOLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",e.vertexTangents?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUvs?"#define USE_UV":"",e.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(gr).join(`
`),_=[m,Nl(e),"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMap&&e.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",e.normalMap&&e.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",e.specularColorMap?"#define USE_SPECULARCOLORMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEENCOLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.vertexTangents?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUvs?"#define USE_UV":"",e.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==En?"#define TONE_MAPPING":"",e.toneMapping!==En?Mt.tonemapping_pars_fragment:"",e.toneMapping!==En?Jm("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Mt.encodings_pars_fragment,Qm("linearToOutputTexel",e.outputEncoding),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(gr).join(`
`)),s=Ns(s),s=Ol(s,e),s=Bl(s,e),a=Ns(a),a=Ol(a,e),a=Bl(a,e),s=Fl(s),a=Fl(a),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,p=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,_=["#define varying in",e.glslVersion===al?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===al?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const w=x+p+s,A=x+_+a,y=Rl(i,35633,w),T=Rl(i,35632,A);if(i.attachShader(d,y),i.attachShader(d,T),e.index0AttributeName!==void 0?i.bindAttribLocation(d,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(d,0,"position"),i.linkProgram(d),o.debug.checkShaderErrors){const M=i.getProgramInfoLog(d).trim(),D=i.getShaderInfoLog(y).trim(),G=i.getShaderInfoLog(T).trim();let J=!0,N=!0;if(i.getProgramParameter(d,35714)===!1){J=!1;const R=Il(i,y,"vertex"),z=Il(i,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(d,35715)+`

Program Info Log: `+M+`
`+R+`
`+z)}else M!==""?console.warn("THREE.WebGLProgram: Program Info Log:",M):(D===""||G==="")&&(N=!1);N&&(this.diagnostics={runnable:J,programLog:M,vertexShader:{log:D,prefix:p},fragmentShader:{log:G,prefix:_}})}i.deleteShader(y),i.deleteShader(T);let P;this.getUniforms=function(){return P===void 0&&(P=new ma(i,d)),P};let v;return this.getAttributes=function(){return v===void 0&&(v=eg(i,d)),v},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(d),this.program=void 0},this.name=e.shaderName,this.id=Ym++,this.cacheKey=t,this.usedTimes=1,this.program=d,this.vertexShader=y,this.fragmentShader=T,this}let fg=0;class dg{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),r=this._getShaderStage(n),s=this._getShaderCacheForMaterial(t);return s.has(i)===!1&&(s.add(i),i.usedTimes++),s.has(r)===!1&&(s.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new pg(t),e.set(t,n)),n}}class pg{constructor(t){this.id=fg++,this.code=t,this.usedTimes=0}}function mg(o,t,e,n,i,r,s){const a=new so,l=new dg,c=[],u=i.isWebGL2,h=i.logarithmicDepthBuffer,f=i.vertexTextures;let m=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function d(v,M,D,G,J){const N=G.fog,R=J.geometry,z=v.isMeshStandardMaterial?G.environment:null,j=(v.isMeshStandardMaterial?e:t).get(v.envMap||z),Y=!!j&&j.mapping===Da?j.image.height:null,k=g[v.type];v.precision!==null&&(m=i.getMaxPrecision(v.precision),m!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",m,"instead."));const O=R.morphAttributes.position||R.morphAttributes.normal||R.morphAttributes.color,U=O!==void 0?O.length:0;let $=0;R.morphAttributes.position!==void 0&&($=1),R.morphAttributes.normal!==void 0&&($=2),R.morphAttributes.color!==void 0&&($=3);let K,Q,rt,pt;if(k){const Ft=on[k];K=Ft.vertexShader,Q=Ft.fragmentShader}else K=v.vertexShader,Q=v.fragmentShader,l.update(v),rt=l.getVertexShaderID(v),pt=l.getFragmentShaderID(v);const Z=o.getRenderTarget(),Rt=v.alphaTest>0,gt=v.clearcoat>0,vt=v.iridescence>0;return{isWebGL2:u,shaderID:k,shaderName:v.type,vertexShader:K,fragmentShader:Q,defines:v.defines,customVertexShaderID:rt,customFragmentShaderID:pt,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:m,instancing:J.isInstancedMesh===!0,instancingColor:J.isInstancedMesh===!0&&J.instanceColor!==null,supportsVertexTextures:f,outputEncoding:Z===null?o.outputEncoding:Z.isXRRenderTarget===!0?Z.texture.encoding:gi,map:!!v.map,matcap:!!v.matcap,envMap:!!j,envMapMode:j&&j.mapping,envMapCubeUVHeight:Y,lightMap:!!v.lightMap,aoMap:!!v.aoMap,emissiveMap:!!v.emissiveMap,bumpMap:!!v.bumpMap,normalMap:!!v.normalMap,objectSpaceNormalMap:v.normalMapType===zh,tangentSpaceNormalMap:v.normalMapType===Uh,decodeVideoTexture:!!v.map&&v.map.isVideoTexture===!0&&v.map.encoding===Ht,clearcoat:gt,clearcoatMap:gt&&!!v.clearcoatMap,clearcoatRoughnessMap:gt&&!!v.clearcoatRoughnessMap,clearcoatNormalMap:gt&&!!v.clearcoatNormalMap,iridescence:vt,iridescenceMap:vt&&!!v.iridescenceMap,iridescenceThicknessMap:vt&&!!v.iridescenceThicknessMap,displacementMap:!!v.displacementMap,roughnessMap:!!v.roughnessMap,metalnessMap:!!v.metalnessMap,specularMap:!!v.specularMap,specularIntensityMap:!!v.specularIntensityMap,specularColorMap:!!v.specularColorMap,opaque:v.transparent===!1&&v.blending===Hi,alphaMap:!!v.alphaMap,alphaTest:Rt,gradientMap:!!v.gradientMap,sheen:v.sheen>0,sheenColorMap:!!v.sheenColorMap,sheenRoughnessMap:!!v.sheenRoughnessMap,transmission:v.transmission>0,transmissionMap:!!v.transmissionMap,thicknessMap:!!v.thicknessMap,combine:v.combine,vertexTangents:!!v.normalMap&&!!R.attributes.tangent,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!R.attributes.color&&R.attributes.color.itemSize===4,vertexUvs:!!v.map||!!v.bumpMap||!!v.normalMap||!!v.specularMap||!!v.alphaMap||!!v.emissiveMap||!!v.roughnessMap||!!v.metalnessMap||!!v.clearcoatMap||!!v.clearcoatRoughnessMap||!!v.clearcoatNormalMap||!!v.iridescenceMap||!!v.iridescenceThicknessMap||!!v.displacementMap||!!v.transmissionMap||!!v.thicknessMap||!!v.specularIntensityMap||!!v.specularColorMap||!!v.sheenColorMap||!!v.sheenRoughnessMap,uvsVertexOnly:!(!!v.map||!!v.bumpMap||!!v.normalMap||!!v.specularMap||!!v.alphaMap||!!v.emissiveMap||!!v.roughnessMap||!!v.metalnessMap||!!v.clearcoatNormalMap||!!v.iridescenceMap||!!v.iridescenceThicknessMap||v.transmission>0||!!v.transmissionMap||!!v.thicknessMap||!!v.specularIntensityMap||!!v.specularColorMap||v.sheen>0||!!v.sheenColorMap||!!v.sheenRoughnessMap)&&!!v.displacementMap,fog:!!N,useFog:v.fog===!0,fogExp2:N&&N.isFogExp2,flatShading:!!v.flatShading,sizeAttenuation:v.sizeAttenuation,logarithmicDepthBuffer:h,skinning:J.isSkinnedMesh===!0,morphTargets:R.morphAttributes.position!==void 0,morphNormals:R.morphAttributes.normal!==void 0,morphColors:R.morphAttributes.color!==void 0,morphTargetsCount:U,morphTextureStride:$,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:v.dithering,shadowMapEnabled:o.shadowMap.enabled&&D.length>0,shadowMapType:o.shadowMap.type,toneMapping:v.toneMapped?o.toneMapping:En,physicallyCorrectLights:o.physicallyCorrectLights,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===zn,flipSided:v.side===De,useDepthPacking:!!v.depthPacking,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionDerivatives:v.extensions&&v.extensions.derivatives,extensionFragDepth:v.extensions&&v.extensions.fragDepth,extensionDrawBuffers:v.extensions&&v.extensions.drawBuffers,extensionShaderTextureLOD:v.extensions&&v.extensions.shaderTextureLOD,rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),customProgramCacheKey:v.customProgramCacheKey()}}function p(v){const M=[];if(v.shaderID?M.push(v.shaderID):(M.push(v.customVertexShaderID),M.push(v.customFragmentShaderID)),v.defines!==void 0)for(const D in v.defines)M.push(D),M.push(v.defines[D]);return v.isRawShaderMaterial===!1&&(_(M,v),x(M,v),M.push(o.outputEncoding)),M.push(v.customProgramCacheKey),M.join()}function _(v,M){v.push(M.precision),v.push(M.outputEncoding),v.push(M.envMapMode),v.push(M.envMapCubeUVHeight),v.push(M.combine),v.push(M.vertexUvs),v.push(M.fogExp2),v.push(M.sizeAttenuation),v.push(M.morphTargetsCount),v.push(M.morphAttributeCount),v.push(M.numDirLights),v.push(M.numPointLights),v.push(M.numSpotLights),v.push(M.numSpotLightMaps),v.push(M.numHemiLights),v.push(M.numRectAreaLights),v.push(M.numDirLightShadows),v.push(M.numPointLightShadows),v.push(M.numSpotLightShadows),v.push(M.numSpotLightShadowsWithMaps),v.push(M.shadowMapType),v.push(M.toneMapping),v.push(M.numClippingPlanes),v.push(M.numClipIntersection),v.push(M.depthPacking)}function x(v,M){a.disableAll(),M.isWebGL2&&a.enable(0),M.supportsVertexTextures&&a.enable(1),M.instancing&&a.enable(2),M.instancingColor&&a.enable(3),M.map&&a.enable(4),M.matcap&&a.enable(5),M.envMap&&a.enable(6),M.lightMap&&a.enable(7),M.aoMap&&a.enable(8),M.emissiveMap&&a.enable(9),M.bumpMap&&a.enable(10),M.normalMap&&a.enable(11),M.objectSpaceNormalMap&&a.enable(12),M.tangentSpaceNormalMap&&a.enable(13),M.clearcoat&&a.enable(14),M.clearcoatMap&&a.enable(15),M.clearcoatRoughnessMap&&a.enable(16),M.clearcoatNormalMap&&a.enable(17),M.iridescence&&a.enable(18),M.iridescenceMap&&a.enable(19),M.iridescenceThicknessMap&&a.enable(20),M.displacementMap&&a.enable(21),M.specularMap&&a.enable(22),M.roughnessMap&&a.enable(23),M.metalnessMap&&a.enable(24),M.gradientMap&&a.enable(25),M.alphaMap&&a.enable(26),M.alphaTest&&a.enable(27),M.vertexColors&&a.enable(28),M.vertexAlphas&&a.enable(29),M.vertexUvs&&a.enable(30),M.vertexTangents&&a.enable(31),M.uvsVertexOnly&&a.enable(32),v.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.skinning&&a.enable(4),M.morphTargets&&a.enable(5),M.morphNormals&&a.enable(6),M.morphColors&&a.enable(7),M.premultipliedAlpha&&a.enable(8),M.shadowMapEnabled&&a.enable(9),M.physicallyCorrectLights&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.specularIntensityMap&&a.enable(15),M.specularColorMap&&a.enable(16),M.transmission&&a.enable(17),M.transmissionMap&&a.enable(18),M.thicknessMap&&a.enable(19),M.sheen&&a.enable(20),M.sheenColorMap&&a.enable(21),M.sheenRoughnessMap&&a.enable(22),M.decodeVideoTexture&&a.enable(23),M.opaque&&a.enable(24),v.push(a.mask)}function w(v){const M=g[v.type];let D;if(M){const G=on[M];D=ef.clone(G.uniforms)}else D=v.uniforms;return D}function A(v,M){let D;for(let G=0,J=c.length;G<J;G++){const N=c[G];if(N.cacheKey===M){D=N,++D.usedTimes;break}}return D===void 0&&(D=new hg(o,M,v,r),c.push(D)),D}function y(v){if(--v.usedTimes===0){const M=c.indexOf(v);c[M]=c[c.length-1],c.pop(),v.destroy()}}function T(v){l.remove(v)}function P(){l.dispose()}return{getParameters:d,getProgramCacheKey:p,getUniforms:w,acquireProgram:A,releaseProgram:y,releaseShaderCache:T,programs:c,dispose:P}}function gg(){let o=new WeakMap;function t(r){let s=o.get(r);return s===void 0&&(s={},o.set(r,s)),s}function e(r){o.delete(r)}function n(r,s,a){o.get(r)[s]=a}function i(){o=new WeakMap}return{get:t,remove:e,update:n,dispose:i}}function _g(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.material.id!==t.material.id?o.material.id-t.material.id:o.z!==t.z?o.z-t.z:o.id-t.id}function Ul(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.z!==t.z?t.z-o.z:o.id-t.id}function zl(){const o=[];let t=0;const e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function s(h,f,m,g,d,p){let _=o[t];return _===void 0?(_={id:h.id,object:h,geometry:f,material:m,groupOrder:g,renderOrder:h.renderOrder,z:d,group:p},o[t]=_):(_.id=h.id,_.object=h,_.geometry=f,_.material=m,_.groupOrder=g,_.renderOrder=h.renderOrder,_.z=d,_.group=p),t++,_}function a(h,f,m,g,d,p){const _=s(h,f,m,g,d,p);m.transmission>0?n.push(_):m.transparent===!0?i.push(_):e.push(_)}function l(h,f,m,g,d,p){const _=s(h,f,m,g,d,p);m.transmission>0?n.unshift(_):m.transparent===!0?i.unshift(_):e.unshift(_)}function c(h,f){e.length>1&&e.sort(h||_g),n.length>1&&n.sort(f||Ul),i.length>1&&i.sort(f||Ul)}function u(){for(let h=t,f=o.length;h<f;h++){const m=o[h];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:a,unshift:l,finish:u,sort:c}}function vg(){let o=new WeakMap;function t(n,i){const r=o.get(n);let s;return r===void 0?(s=new zl,o.set(n,[s])):i>=r.length?(s=new zl,r.push(s)):s=r[i],s}function e(){o=new WeakMap}return{get:t,dispose:e}}function xg(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new F,color:new Ut};break;case"SpotLight":e={position:new F,direction:new F,color:new Ut,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new F,color:new Ut,distance:0,decay:0};break;case"HemisphereLight":e={direction:new F,skyColor:new Ut,groundColor:new Ut};break;case"RectAreaLight":e={color:new Ut,position:new F,halfWidth:new F,halfHeight:new F};break}return o[t.id]=e,e}}}function yg(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Nt};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Nt};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Nt,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[t.id]=e,e}}}let Ag=0;function wg(o,t){return(t.castShadow?2:0)-(o.castShadow?2:0)+(t.map?1:0)-(o.map?1:0)}function bg(o,t){const e=new xg,n=yg(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let u=0;u<9;u++)i.probe.push(new F);const r=new F,s=new $t,a=new $t;function l(u,h){let f=0,m=0,g=0;for(let G=0;G<9;G++)i.probe[G].set(0,0,0);let d=0,p=0,_=0,x=0,w=0,A=0,y=0,T=0,P=0,v=0;u.sort(wg);const M=h!==!0?Math.PI:1;for(let G=0,J=u.length;G<J;G++){const N=u[G],R=N.color,z=N.intensity,j=N.distance,Y=N.shadow&&N.shadow.map?N.shadow.map.texture:null;if(N.isAmbientLight)f+=R.r*z*M,m+=R.g*z*M,g+=R.b*z*M;else if(N.isLightProbe)for(let k=0;k<9;k++)i.probe[k].addScaledVector(N.sh.coefficients[k],z);else if(N.isDirectionalLight){const k=e.get(N);if(k.color.copy(N.color).multiplyScalar(N.intensity*M),N.castShadow){const O=N.shadow,U=n.get(N);U.shadowBias=O.bias,U.shadowNormalBias=O.normalBias,U.shadowRadius=O.radius,U.shadowMapSize=O.mapSize,i.directionalShadow[d]=U,i.directionalShadowMap[d]=Y,i.directionalShadowMatrix[d]=N.shadow.matrix,A++}i.directional[d]=k,d++}else if(N.isSpotLight){const k=e.get(N);k.position.setFromMatrixPosition(N.matrixWorld),k.color.copy(R).multiplyScalar(z*M),k.distance=j,k.coneCos=Math.cos(N.angle),k.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),k.decay=N.decay,i.spot[_]=k;const O=N.shadow;if(N.map&&(i.spotLightMap[P]=N.map,P++,O.updateMatrices(N),N.castShadow&&v++),i.spotLightMatrix[_]=O.matrix,N.castShadow){const U=n.get(N);U.shadowBias=O.bias,U.shadowNormalBias=O.normalBias,U.shadowRadius=O.radius,U.shadowMapSize=O.mapSize,i.spotShadow[_]=U,i.spotShadowMap[_]=Y,T++}_++}else if(N.isRectAreaLight){const k=e.get(N);k.color.copy(R).multiplyScalar(z),k.halfWidth.set(N.width*.5,0,0),k.halfHeight.set(0,N.height*.5,0),i.rectArea[x]=k,x++}else if(N.isPointLight){const k=e.get(N);if(k.color.copy(N.color).multiplyScalar(N.intensity*M),k.distance=N.distance,k.decay=N.decay,N.castShadow){const O=N.shadow,U=n.get(N);U.shadowBias=O.bias,U.shadowNormalBias=O.normalBias,U.shadowRadius=O.radius,U.shadowMapSize=O.mapSize,U.shadowCameraNear=O.camera.near,U.shadowCameraFar=O.camera.far,i.pointShadow[p]=U,i.pointShadowMap[p]=Y,i.pointShadowMatrix[p]=N.shadow.matrix,y++}i.point[p]=k,p++}else if(N.isHemisphereLight){const k=e.get(N);k.skyColor.copy(N.color).multiplyScalar(z*M),k.groundColor.copy(N.groundColor).multiplyScalar(z*M),i.hemi[w]=k,w++}}x>0&&(t.isWebGL2||o.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=nt.LTC_FLOAT_1,i.rectAreaLTC2=nt.LTC_FLOAT_2):o.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=nt.LTC_HALF_1,i.rectAreaLTC2=nt.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=f,i.ambient[1]=m,i.ambient[2]=g;const D=i.hash;(D.directionalLength!==d||D.pointLength!==p||D.spotLength!==_||D.rectAreaLength!==x||D.hemiLength!==w||D.numDirectionalShadows!==A||D.numPointShadows!==y||D.numSpotShadows!==T||D.numSpotMaps!==P)&&(i.directional.length=d,i.spot.length=_,i.rectArea.length=x,i.point.length=p,i.hemi.length=w,i.directionalShadow.length=A,i.directionalShadowMap.length=A,i.pointShadow.length=y,i.pointShadowMap.length=y,i.spotShadow.length=T,i.spotShadowMap.length=T,i.directionalShadowMatrix.length=A,i.pointShadowMatrix.length=y,i.spotLightMatrix.length=T+P-v,i.spotLightMap.length=P,i.numSpotLightShadowsWithMaps=v,D.directionalLength=d,D.pointLength=p,D.spotLength=_,D.rectAreaLength=x,D.hemiLength=w,D.numDirectionalShadows=A,D.numPointShadows=y,D.numSpotShadows=T,D.numSpotMaps=P,i.version=Ag++)}function c(u,h){let f=0,m=0,g=0,d=0,p=0;const _=h.matrixWorldInverse;for(let x=0,w=u.length;x<w;x++){const A=u[x];if(A.isDirectionalLight){const y=i.directional[f];y.direction.setFromMatrixPosition(A.matrixWorld),r.setFromMatrixPosition(A.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(_),f++}else if(A.isSpotLight){const y=i.spot[g];y.position.setFromMatrixPosition(A.matrixWorld),y.position.applyMatrix4(_),y.direction.setFromMatrixPosition(A.matrixWorld),r.setFromMatrixPosition(A.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(_),g++}else if(A.isRectAreaLight){const y=i.rectArea[d];y.position.setFromMatrixPosition(A.matrixWorld),y.position.applyMatrix4(_),a.identity(),s.copy(A.matrixWorld),s.premultiply(_),a.extractRotation(s),y.halfWidth.set(A.width*.5,0,0),y.halfHeight.set(0,A.height*.5,0),y.halfWidth.applyMatrix4(a),y.halfHeight.applyMatrix4(a),d++}else if(A.isPointLight){const y=i.point[m];y.position.setFromMatrixPosition(A.matrixWorld),y.position.applyMatrix4(_),m++}else if(A.isHemisphereLight){const y=i.hemi[p];y.direction.setFromMatrixPosition(A.matrixWorld),y.direction.transformDirection(_),p++}}}return{setup:l,setupView:c,state:i}}function kl(o,t){const e=new bg(o,t),n=[],i=[];function r(){n.length=0,i.length=0}function s(h){n.push(h)}function a(h){i.push(h)}function l(h){e.setup(n,h)}function c(h){e.setupView(n,h)}return{init:r,state:{lightsArray:n,shadowsArray:i,lights:e},setupLights:l,setupLightsView:c,pushLight:s,pushShadow:a}}function Mg(o,t){let e=new WeakMap;function n(r,s=0){const a=e.get(r);let l;return a===void 0?(l=new kl(o,t),e.set(r,[l])):s>=a.length?(l=new kl(o,t),a.push(l)):l=a[s],l}function i(){e=new WeakMap}return{get:n,dispose:i}}class Sg extends zr{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Fh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Tg extends zr{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new F,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.referencePosition.copy(t.referencePosition),this.nearDistance=t.nearDistance,this.farDistance=t.farDistance,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Eg=`void main() {
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
}`;function Pg(o,t,e){let n=new Sc;const i=new Nt,r=new Nt,s=new se,a=new Sg({depthPacking:Nh}),l=new Tg,c={},u=e.maxTextureSize,h={0:De,1:Yi,2:zn},f=new fn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Nt},radius:{value:4}},vertexShader:Eg,fragmentShader:Cg}),m=f.clone();m.defines.HORIZONTAL_PASS=1;const g=new pn;g.setAttribute("position",new un(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const d=new We(g,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=uc,this.render=function(A,y,T){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||A.length===0)return;const P=o.getRenderTarget(),v=o.getActiveCubeFace(),M=o.getActiveMipmapLevel(),D=o.state;D.setBlending(Hn),D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);for(let G=0,J=A.length;G<J;G++){const N=A[G],R=N.shadow;if(R===void 0){console.warn("THREE.WebGLShadowMap:",N,"has no shadow.");continue}if(R.autoUpdate===!1&&R.needsUpdate===!1)continue;i.copy(R.mapSize);const z=R.getFrameExtents();if(i.multiply(z),r.copy(R.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(r.x=Math.floor(u/z.x),i.x=r.x*z.x,R.mapSize.x=r.x),i.y>u&&(r.y=Math.floor(u/z.y),i.y=r.y*z.y,R.mapSize.y=r.y)),R.map===null){const Y=this.type!==mr?{minFilter:ge,magFilter:ge}:{};R.map=new _i(i.x,i.y,Y),R.map.texture.name=N.name+".shadowMap",R.camera.updateProjectionMatrix()}o.setRenderTarget(R.map),o.clear();const j=R.getViewportCount();for(let Y=0;Y<j;Y++){const k=R.getViewport(Y);s.set(r.x*k.x,r.y*k.y,r.x*k.z,r.y*k.w),D.viewport(s),R.updateMatrices(N,Y),n=R.getFrustum(),w(y,T,R.camera,N,this.type)}R.isPointLightShadow!==!0&&this.type===mr&&_(R,T),R.needsUpdate=!1}p.needsUpdate=!1,o.setRenderTarget(P,v,M)};function _(A,y){const T=t.update(d);f.defines.VSM_SAMPLES!==A.blurSamples&&(f.defines.VSM_SAMPLES=A.blurSamples,m.defines.VSM_SAMPLES=A.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new _i(i.x,i.y)),f.uniforms.shadow_pass.value=A.map.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,o.setRenderTarget(A.mapPass),o.clear(),o.renderBufferDirect(y,null,T,f,d,null),m.uniforms.shadow_pass.value=A.mapPass.texture,m.uniforms.resolution.value=A.mapSize,m.uniforms.radius.value=A.radius,o.setRenderTarget(A.map),o.clear(),o.renderBufferDirect(y,null,T,m,d,null)}function x(A,y,T,P,v,M){let D=null;const G=T.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(G!==void 0?D=G:D=T.isPointLight===!0?l:a,o.localClippingEnabled&&y.clipShadows===!0&&Array.isArray(y.clippingPlanes)&&y.clippingPlanes.length!==0||y.displacementMap&&y.displacementScale!==0||y.alphaMap&&y.alphaTest>0){const J=D.uuid,N=y.uuid;let R=c[J];R===void 0&&(R={},c[J]=R);let z=R[N];z===void 0&&(z=D.clone(),R[N]=z),D=z}return D.visible=y.visible,D.wireframe=y.wireframe,M===mr?D.side=y.shadowSide!==null?y.shadowSide:y.side:D.side=y.shadowSide!==null?y.shadowSide:h[y.side],D.alphaMap=y.alphaMap,D.alphaTest=y.alphaTest,D.clipShadows=y.clipShadows,D.clippingPlanes=y.clippingPlanes,D.clipIntersection=y.clipIntersection,D.displacementMap=y.displacementMap,D.displacementScale=y.displacementScale,D.displacementBias=y.displacementBias,D.wireframeLinewidth=y.wireframeLinewidth,D.linewidth=y.linewidth,T.isPointLight===!0&&D.isMeshDistanceMaterial===!0&&(D.referencePosition.setFromMatrixPosition(T.matrixWorld),D.nearDistance=P,D.farDistance=v),D}function w(A,y,T,P,v){if(A.visible===!1)return;if(A.layers.test(y.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&v===mr)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,A.matrixWorld);const G=t.update(A),J=A.material;if(Array.isArray(J)){const N=G.groups;for(let R=0,z=N.length;R<z;R++){const j=N[R],Y=J[j.materialIndex];if(Y&&Y.visible){const k=x(A,Y,P,T.near,T.far,v);o.renderBufferDirect(T,null,G,k,A,j)}}}else if(J.visible){const N=x(A,J,P,T.near,T.far,v);o.renderBufferDirect(T,null,G,N,A,null)}}const D=A.children;for(let G=0,J=D.length;G<J;G++)w(D[G],y,T,P,v)}}function Dg(o,t,e){const n=e.isWebGL2;function i(){let L=!1;const ot=new se;let H=null;const st=new se(0,0,0,0);return{setMask:function(it){H!==it&&!L&&(o.colorMask(it,it,it,it),H=it)},setLocked:function(it){L=it},setClear:function(it,Ct,te,qt,Dn){Dn===!0&&(it*=qt,Ct*=qt,te*=qt),ot.set(it,Ct,te,qt),st.equals(ot)===!1&&(o.clearColor(it,Ct,te,qt),st.copy(ot))},reset:function(){L=!1,H=null,st.set(-1,0,0,0)}}}function r(){let L=!1,ot=null,H=null,st=null;return{setTest:function(it){it?Rt(2929):gt(2929)},setMask:function(it){ot!==it&&!L&&(o.depthMask(it),ot=it)},setFunc:function(it){if(H!==it){if(it)switch(it){case sh:o.depthFunc(512);break;case oh:o.depthFunc(519);break;case lh:o.depthFunc(513);break;case Ds:o.depthFunc(515);break;case ch:o.depthFunc(514);break;case uh:o.depthFunc(518);break;case hh:o.depthFunc(516);break;case fh:o.depthFunc(517);break;default:o.depthFunc(515)}else o.depthFunc(515);H=it}},setLocked:function(it){L=it},setClear:function(it){st!==it&&(o.clearDepth(it),st=it)},reset:function(){L=!1,ot=null,H=null,st=null}}}function s(){let L=!1,ot=null,H=null,st=null,it=null,Ct=null,te=null,qt=null,Dn=null;return{setTest:function(Vt){L||(Vt?Rt(2960):gt(2960))},setMask:function(Vt){ot!==Vt&&!L&&(o.stencilMask(Vt),ot=Vt)},setFunc:function(Vt,gn,Oe){(H!==Vt||st!==gn||it!==Oe)&&(o.stencilFunc(Vt,gn,Oe),H=Vt,st=gn,it=Oe)},setOp:function(Vt,gn,Oe){(Ct!==Vt||te!==gn||qt!==Oe)&&(o.stencilOp(Vt,gn,Oe),Ct=Vt,te=gn,qt=Oe)},setLocked:function(Vt){L=Vt},setClear:function(Vt){Dn!==Vt&&(o.clearStencil(Vt),Dn=Vt)},reset:function(){L=!1,ot=null,H=null,st=null,it=null,Ct=null,te=null,qt=null,Dn=null}}}const a=new i,l=new r,c=new s,u=new WeakMap,h=new WeakMap;let f={},m={},g=new WeakMap,d=[],p=null,_=!1,x=null,w=null,A=null,y=null,T=null,P=null,v=null,M=!1,D=null,G=null,J=null,N=null,R=null;const z=o.getParameter(35661);let j=!1,Y=0;const k=o.getParameter(7938);k.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(k)[1]),j=Y>=1):k.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),j=Y>=2);let O=null,U={};const $=o.getParameter(3088),K=o.getParameter(2978),Q=new se().fromArray($),rt=new se().fromArray(K);function pt(L,ot,H){const st=new Uint8Array(4),it=o.createTexture();o.bindTexture(L,it),o.texParameteri(L,10241,9728),o.texParameteri(L,10240,9728);for(let Ct=0;Ct<H;Ct++)o.texImage2D(ot+Ct,0,6408,1,1,0,6408,5121,st);return it}const Z={};Z[3553]=pt(3553,3553,1),Z[34067]=pt(34067,34069,6),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Rt(2929),l.setFunc(Ds),fe(!1),rn(Do),Rt(2884),ie(Hn);function Rt(L){f[L]!==!0&&(o.enable(L),f[L]=!0)}function gt(L){f[L]!==!1&&(o.disable(L),f[L]=!1)}function vt(L,ot){return m[L]!==ot?(o.bindFramebuffer(L,ot),m[L]=ot,n&&(L===36009&&(m[36160]=ot),L===36160&&(m[36009]=ot)),!0):!1}function ct(L,ot){let H=d,st=!1;if(L)if(H=g.get(ot),H===void 0&&(H=[],g.set(ot,H)),L.isWebGLMultipleRenderTargets){const it=L.texture;if(H.length!==it.length||H[0]!==36064){for(let Ct=0,te=it.length;Ct<te;Ct++)H[Ct]=36064+Ct;H.length=it.length,st=!0}}else H[0]!==36064&&(H[0]=36064,st=!0);else H[0]!==1029&&(H[0]=1029,st=!0);st&&(e.isWebGL2?o.drawBuffers(H):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(H))}function Ft(L){return p!==L?(o.useProgram(L),p=L,!0):!1}const bt={[zi]:32774,[Zu]:32778,[Ku]:32779};if(n)bt[Io]=32775,bt[Oo]=32776;else{const L=t.get("EXT_blend_minmax");L!==null&&(bt[Io]=L.MIN_EXT,bt[Oo]=L.MAX_EXT)}const mt={[Qu]:0,[Ju]:1,[$u]:768,[hc]:770,[ah]:776,[ih]:774,[eh]:772,[th]:769,[fc]:771,[rh]:775,[nh]:773};function ie(L,ot,H,st,it,Ct,te,qt){if(L===Hn){_===!0&&(gt(3042),_=!1);return}if(_===!1&&(Rt(3042),_=!0),L!==Yu){if(L!==x||qt!==M){if((w!==zi||T!==zi)&&(o.blendEquation(32774),w=zi,T=zi),qt)switch(L){case Hi:o.blendFuncSeparate(1,771,1,771);break;case Ps:o.blendFunc(1,1);break;case Lo:o.blendFuncSeparate(0,769,0,1);break;case Ro:o.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case Hi:o.blendFuncSeparate(770,771,1,771);break;case Ps:o.blendFunc(770,1);break;case Lo:o.blendFuncSeparate(0,769,0,1);break;case Ro:o.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}A=null,y=null,P=null,v=null,x=L,M=qt}return}it=it||ot,Ct=Ct||H,te=te||st,(ot!==w||it!==T)&&(o.blendEquationSeparate(bt[ot],bt[it]),w=ot,T=it),(H!==A||st!==y||Ct!==P||te!==v)&&(o.blendFuncSeparate(mt[H],mt[st],mt[Ct],mt[te]),A=H,y=st,P=Ct,v=te),x=L,M=null}function we(L,ot){L.side===zn?gt(2884):Rt(2884);let H=L.side===De;ot&&(H=!H),fe(H),L.blending===Hi&&L.transparent===!1?ie(Hn):ie(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.premultipliedAlpha),l.setFunc(L.depthFunc),l.setTest(L.depthTest),l.setMask(L.depthWrite),a.setMask(L.colorWrite);const st=L.stencilWrite;c.setTest(st),st&&(c.setMask(L.stencilWriteMask),c.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),c.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),It(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?Rt(32926):gt(32926)}function fe(L){D!==L&&(L?o.frontFace(2304):o.frontFace(2305),D=L)}function rn(L){L!==Xu?(Rt(2884),L!==G&&(L===Do?o.cullFace(1029):L===qu?o.cullFace(1028):o.cullFace(1032))):gt(2884),G=L}function re(L){L!==J&&(j&&o.lineWidth(L),J=L)}function It(L,ot,H){L?(Rt(32823),(N!==ot||R!==H)&&(o.polygonOffset(ot,H),N=ot,R=H)):gt(32823)}function mn(L){L?Rt(3089):gt(3089)}function an(L){L===void 0&&(L=33984+z-1),O!==L&&(o.activeTexture(L),O=L)}function E(L,ot){O===null&&an();let H=U[O];H===void 0&&(H={type:void 0,texture:void 0},U[O]=H),(H.type!==L||H.texture!==ot)&&(o.bindTexture(L,ot||Z[L]),H.type=L,H.texture=ot)}function b(){const L=U[O];L!==void 0&&L.type!==void 0&&(o.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function X(){try{o.compressedTexImage2D.apply(o,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function tt(){try{o.texSubImage2D.apply(o,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function et(){try{o.texSubImage3D.apply(o,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function at(){try{o.compressedTexSubImage2D.apply(o,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function xt(){try{o.texStorage2D.apply(o,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function V(){try{o.texStorage3D.apply(o,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ft(){try{o.texImage2D.apply(o,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function lt(){try{o.texImage3D.apply(o,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ht(L){Q.equals(L)===!1&&(o.scissor(L.x,L.y,L.z,L.w),Q.copy(L))}function ut(L){rt.equals(L)===!1&&(o.viewport(L.x,L.y,L.z,L.w),rt.copy(L))}function At(L,ot){let H=h.get(ot);H===void 0&&(H=new WeakMap,h.set(ot,H));let st=H.get(L);st===void 0&&(st=o.getUniformBlockIndex(ot,L.name),H.set(L,st))}function Pt(L,ot){const st=h.get(ot).get(L);u.get(L)!==st&&(o.uniformBlockBinding(ot,st,L.__bindingPointIndex),u.set(L,st))}function Xt(){o.disable(3042),o.disable(2884),o.disable(2929),o.disable(32823),o.disable(3089),o.disable(2960),o.disable(32926),o.blendEquation(32774),o.blendFunc(1,0),o.blendFuncSeparate(1,0,1,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(513),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(519,0,4294967295),o.stencilOp(7680,7680,7680),o.clearStencil(0),o.cullFace(1029),o.frontFace(2305),o.polygonOffset(0,0),o.activeTexture(33984),o.bindFramebuffer(36160,null),n===!0&&(o.bindFramebuffer(36009,null),o.bindFramebuffer(36008,null)),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),f={},O=null,U={},m={},g=new WeakMap,d=[],p=null,_=!1,x=null,w=null,A=null,y=null,T=null,P=null,v=null,M=!1,D=null,G=null,J=null,N=null,R=null,Q.set(0,0,o.canvas.width,o.canvas.height),rt.set(0,0,o.canvas.width,o.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:Rt,disable:gt,bindFramebuffer:vt,drawBuffers:ct,useProgram:Ft,setBlending:ie,setMaterial:we,setFlipSided:fe,setCullFace:rn,setLineWidth:re,setPolygonOffset:It,setScissorTest:mn,activeTexture:an,bindTexture:E,unbindTexture:b,compressedTexImage2D:X,texImage2D:ft,texImage3D:lt,updateUBOMapping:At,uniformBlockBinding:Pt,texStorage2D:xt,texStorage3D:V,texSubImage2D:tt,texSubImage3D:et,compressedTexSubImage2D:at,scissor:ht,viewport:ut,reset:Xt}}function Lg(o,t,e,n,i,r,s){const a=i.isWebGL2,l=i.maxTextures,c=i.maxCubemapSize,u=i.maxTextureSize,h=i.maxSamples,f=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let d;const p=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(E,b){return _?new OffscreenCanvas(E,b):Tr("canvas")}function w(E,b,X,tt){let et=1;if((E.width>tt||E.height>tt)&&(et=tt/Math.max(E.width,E.height)),et<1||b===!0)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap){const at=b?Fs:Math.floor,xt=at(et*E.width),V=at(et*E.height);d===void 0&&(d=x(xt,V));const ft=X?x(xt,V):d;return ft.width=xt,ft.height=V,ft.getContext("2d").drawImage(E,0,0,xt,V),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+E.width+"x"+E.height+") to ("+xt+"x"+V+")."),ft}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+E.width+"x"+E.height+")."),E;return E}function A(E){return ol(E.width)&&ol(E.height)}function y(E){return a?!1:E.wrapS!==tn||E.wrapT!==tn||E.minFilter!==ge&&E.minFilter!==ke}function T(E,b){return E.generateMipmaps&&b&&E.minFilter!==ge&&E.minFilter!==ke}function P(E){o.generateMipmap(E)}function v(E,b,X,tt,et=!1){if(a===!1)return b;if(E!==null){if(o[E]!==void 0)return o[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let at=b;return b===6403&&(X===5126&&(at=33326),X===5131&&(at=33325),X===5121&&(at=33321)),b===33319&&(X===5126&&(at=33328),X===5131&&(at=33327),X===5121&&(at=33323)),b===6408&&(X===5126&&(at=34836),X===5131&&(at=34842),X===5121&&(at=tt===Ht&&et===!1?35907:32856),X===32819&&(at=32854),X===32820&&(at=32855)),(at===33325||at===33326||at===33327||at===33328||at===34842||at===34836)&&t.get("EXT_color_buffer_float"),at}function M(E,b,X){return T(E,X)===!0||E.isFramebufferTexture&&E.minFilter!==ge&&E.minFilter!==ke?Math.log2(Math.max(b.width,b.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?b.mipmaps.length:1}function D(E){return E===ge||E===Bo||E===Fo?9728:9729}function G(E){const b=E.target;b.removeEventListener("dispose",G),N(b),b.isVideoTexture&&g.delete(b)}function J(E){const b=E.target;b.removeEventListener("dispose",J),z(b)}function N(E){const b=n.get(E);if(b.__webglInit===void 0)return;const X=E.source,tt=p.get(X);if(tt){const et=tt[b.__cacheKey];et.usedTimes--,et.usedTimes===0&&R(E),Object.keys(tt).length===0&&p.delete(X)}n.remove(E)}function R(E){const b=n.get(E);o.deleteTexture(b.__webglTexture);const X=E.source,tt=p.get(X);delete tt[b.__cacheKey],s.memory.textures--}function z(E){const b=E.texture,X=n.get(E),tt=n.get(b);if(tt.__webglTexture!==void 0&&(o.deleteTexture(tt.__webglTexture),s.memory.textures--),E.depthTexture&&E.depthTexture.dispose(),E.isWebGLCubeRenderTarget)for(let et=0;et<6;et++)o.deleteFramebuffer(X.__webglFramebuffer[et]),X.__webglDepthbuffer&&o.deleteRenderbuffer(X.__webglDepthbuffer[et]);else{if(o.deleteFramebuffer(X.__webglFramebuffer),X.__webglDepthbuffer&&o.deleteRenderbuffer(X.__webglDepthbuffer),X.__webglMultisampledFramebuffer&&o.deleteFramebuffer(X.__webglMultisampledFramebuffer),X.__webglColorRenderbuffer)for(let et=0;et<X.__webglColorRenderbuffer.length;et++)X.__webglColorRenderbuffer[et]&&o.deleteRenderbuffer(X.__webglColorRenderbuffer[et]);X.__webglDepthRenderbuffer&&o.deleteRenderbuffer(X.__webglDepthRenderbuffer)}if(E.isWebGLMultipleRenderTargets)for(let et=0,at=b.length;et<at;et++){const xt=n.get(b[et]);xt.__webglTexture&&(o.deleteTexture(xt.__webglTexture),s.memory.textures--),n.remove(b[et])}n.remove(b),n.remove(E)}let j=0;function Y(){j=0}function k(){const E=j;return E>=l&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+l),j+=1,E}function O(E){const b=[];return b.push(E.wrapS),b.push(E.wrapT),b.push(E.magFilter),b.push(E.minFilter),b.push(E.anisotropy),b.push(E.internalFormat),b.push(E.format),b.push(E.type),b.push(E.generateMipmaps),b.push(E.premultiplyAlpha),b.push(E.flipY),b.push(E.unpackAlignment),b.push(E.encoding),b.join()}function U(E,b){const X=n.get(E);if(E.isVideoTexture&&mn(E),E.isRenderTargetTexture===!1&&E.version>0&&X.__version!==E.version){const tt=E.image;if(tt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(tt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{gt(X,E,b);return}}e.activeTexture(33984+b),e.bindTexture(3553,X.__webglTexture)}function $(E,b){const X=n.get(E);if(E.version>0&&X.__version!==E.version){gt(X,E,b);return}e.activeTexture(33984+b),e.bindTexture(35866,X.__webglTexture)}function K(E,b){const X=n.get(E);if(E.version>0&&X.__version!==E.version){gt(X,E,b);return}e.activeTexture(33984+b),e.bindTexture(32879,X.__webglTexture)}function Q(E,b){const X=n.get(E);if(E.version>0&&X.__version!==E.version){vt(X,E,b);return}e.activeTexture(33984+b),e.bindTexture(34067,X.__webglTexture)}const rt={[Is]:10497,[tn]:33071,[Os]:33648},pt={[ge]:9728,[Bo]:9984,[Fo]:9986,[ke]:9729,[yh]:9985,[La]:9987};function Z(E,b,X){if(X?(o.texParameteri(E,10242,rt[b.wrapS]),o.texParameteri(E,10243,rt[b.wrapT]),(E===32879||E===35866)&&o.texParameteri(E,32882,rt[b.wrapR]),o.texParameteri(E,10240,pt[b.magFilter]),o.texParameteri(E,10241,pt[b.minFilter])):(o.texParameteri(E,10242,33071),o.texParameteri(E,10243,33071),(E===32879||E===35866)&&o.texParameteri(E,32882,33071),(b.wrapS!==tn||b.wrapT!==tn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),o.texParameteri(E,10240,D(b.magFilter)),o.texParameteri(E,10241,D(b.minFilter)),b.minFilter!==ge&&b.minFilter!==ke&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),t.has("EXT_texture_filter_anisotropic")===!0){const tt=t.get("EXT_texture_filter_anisotropic");if(b.type===oi&&t.has("OES_texture_float_linear")===!1||a===!1&&b.type===Sr&&t.has("OES_texture_half_float_linear")===!1)return;(b.anisotropy>1||n.get(b).__currentAnisotropy)&&(o.texParameterf(E,tt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,i.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy)}}function Rt(E,b){let X=!1;E.__webglInit===void 0&&(E.__webglInit=!0,b.addEventListener("dispose",G));const tt=b.source;let et=p.get(tt);et===void 0&&(et={},p.set(tt,et));const at=O(b);if(at!==E.__cacheKey){et[at]===void 0&&(et[at]={texture:o.createTexture(),usedTimes:0},s.memory.textures++,X=!0),et[at].usedTimes++;const xt=et[E.__cacheKey];xt!==void 0&&(et[E.__cacheKey].usedTimes--,xt.usedTimes===0&&R(b)),E.__cacheKey=at,E.__webglTexture=et[at].texture}return X}function gt(E,b,X){let tt=3553;b.isDataArrayTexture&&(tt=35866),b.isData3DTexture&&(tt=32879);const et=Rt(E,b),at=b.source;if(e.activeTexture(33984+X),e.bindTexture(tt,E.__webglTexture),at.version!==at.__currentVersion||et===!0){o.pixelStorei(37440,b.flipY),o.pixelStorei(37441,b.premultiplyAlpha),o.pixelStorei(3317,b.unpackAlignment),o.pixelStorei(37443,0);const xt=y(b)&&A(b.image)===!1;let V=w(b.image,xt,!1,u);V=an(b,V);const ft=A(V)||a,lt=r.convert(b.format,b.encoding);let ht=r.convert(b.type),ut=v(b.internalFormat,lt,ht,b.encoding,b.isVideoTexture);Z(tt,b,ft);let At;const Pt=b.mipmaps,Xt=a&&b.isVideoTexture!==!0,L=at.__currentVersion===void 0||et===!0,ot=M(b,V,ft);if(b.isDepthTexture)ut=6402,a?b.type===oi?ut=36012:b.type===si?ut=33190:b.type===Wi?ut=35056:ut=33189:b.type===oi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),b.format===ui&&ut===6402&&b.type!==mc&&b.type!==si&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),b.type=si,ht=r.convert(b.type)),b.format===Qi&&ut===6402&&(ut=34041,b.type!==Wi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),b.type=Wi,ht=r.convert(b.type))),L&&(Xt?e.texStorage2D(3553,1,ut,V.width,V.height):e.texImage2D(3553,0,ut,V.width,V.height,0,lt,ht,null));else if(b.isDataTexture)if(Pt.length>0&&ft){Xt&&L&&e.texStorage2D(3553,ot,ut,Pt[0].width,Pt[0].height);for(let H=0,st=Pt.length;H<st;H++)At=Pt[H],Xt?e.texSubImage2D(3553,H,0,0,At.width,At.height,lt,ht,At.data):e.texImage2D(3553,H,ut,At.width,At.height,0,lt,ht,At.data);b.generateMipmaps=!1}else Xt?(L&&e.texStorage2D(3553,ot,ut,V.width,V.height),e.texSubImage2D(3553,0,0,0,V.width,V.height,lt,ht,V.data)):e.texImage2D(3553,0,ut,V.width,V.height,0,lt,ht,V.data);else if(b.isCompressedTexture){Xt&&L&&e.texStorage2D(3553,ot,ut,Pt[0].width,Pt[0].height);for(let H=0,st=Pt.length;H<st;H++)At=Pt[H],b.format!==cn?lt!==null?Xt?e.compressedTexSubImage2D(3553,H,0,0,At.width,At.height,lt,At.data):e.compressedTexImage2D(3553,H,ut,At.width,At.height,0,At.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Xt?e.texSubImage2D(3553,H,0,0,At.width,At.height,lt,ht,At.data):e.texImage2D(3553,H,ut,At.width,At.height,0,lt,ht,At.data)}else if(b.isDataArrayTexture)Xt?(L&&e.texStorage3D(35866,ot,ut,V.width,V.height,V.depth),e.texSubImage3D(35866,0,0,0,0,V.width,V.height,V.depth,lt,ht,V.data)):e.texImage3D(35866,0,ut,V.width,V.height,V.depth,0,lt,ht,V.data);else if(b.isData3DTexture)Xt?(L&&e.texStorage3D(32879,ot,ut,V.width,V.height,V.depth),e.texSubImage3D(32879,0,0,0,0,V.width,V.height,V.depth,lt,ht,V.data)):e.texImage3D(32879,0,ut,V.width,V.height,V.depth,0,lt,ht,V.data);else if(b.isFramebufferTexture){if(L)if(Xt)e.texStorage2D(3553,ot,ut,V.width,V.height);else{let H=V.width,st=V.height;for(let it=0;it<ot;it++)e.texImage2D(3553,it,ut,H,st,0,lt,ht,null),H>>=1,st>>=1}}else if(Pt.length>0&&ft){Xt&&L&&e.texStorage2D(3553,ot,ut,Pt[0].width,Pt[0].height);for(let H=0,st=Pt.length;H<st;H++)At=Pt[H],Xt?e.texSubImage2D(3553,H,0,0,lt,ht,At):e.texImage2D(3553,H,ut,lt,ht,At);b.generateMipmaps=!1}else Xt?(L&&e.texStorage2D(3553,ot,ut,V.width,V.height),e.texSubImage2D(3553,0,0,0,lt,ht,V)):e.texImage2D(3553,0,ut,lt,ht,V);T(b,ft)&&P(tt),at.__currentVersion=at.version,b.onUpdate&&b.onUpdate(b)}E.__version=b.version}function vt(E,b,X){if(b.image.length!==6)return;const tt=Rt(E,b),et=b.source;if(e.activeTexture(33984+X),e.bindTexture(34067,E.__webglTexture),et.version!==et.__currentVersion||tt===!0){o.pixelStorei(37440,b.flipY),o.pixelStorei(37441,b.premultiplyAlpha),o.pixelStorei(3317,b.unpackAlignment),o.pixelStorei(37443,0);const at=b.isCompressedTexture||b.image[0].isCompressedTexture,xt=b.image[0]&&b.image[0].isDataTexture,V=[];for(let H=0;H<6;H++)!at&&!xt?V[H]=w(b.image[H],!1,!0,c):V[H]=xt?b.image[H].image:b.image[H],V[H]=an(b,V[H]);const ft=V[0],lt=A(ft)||a,ht=r.convert(b.format,b.encoding),ut=r.convert(b.type),At=v(b.internalFormat,ht,ut,b.encoding),Pt=a&&b.isVideoTexture!==!0,Xt=et.__currentVersion===void 0||tt===!0;let L=M(b,ft,lt);Z(34067,b,lt);let ot;if(at){Pt&&Xt&&e.texStorage2D(34067,L,At,ft.width,ft.height);for(let H=0;H<6;H++){ot=V[H].mipmaps;for(let st=0;st<ot.length;st++){const it=ot[st];b.format!==cn?ht!==null?Pt?e.compressedTexSubImage2D(34069+H,st,0,0,it.width,it.height,ht,it.data):e.compressedTexImage2D(34069+H,st,At,it.width,it.height,0,it.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Pt?e.texSubImage2D(34069+H,st,0,0,it.width,it.height,ht,ut,it.data):e.texImage2D(34069+H,st,At,it.width,it.height,0,ht,ut,it.data)}}}else{ot=b.mipmaps,Pt&&Xt&&(ot.length>0&&L++,e.texStorage2D(34067,L,At,V[0].width,V[0].height));for(let H=0;H<6;H++)if(xt){Pt?e.texSubImage2D(34069+H,0,0,0,V[H].width,V[H].height,ht,ut,V[H].data):e.texImage2D(34069+H,0,At,V[H].width,V[H].height,0,ht,ut,V[H].data);for(let st=0;st<ot.length;st++){const Ct=ot[st].image[H].image;Pt?e.texSubImage2D(34069+H,st+1,0,0,Ct.width,Ct.height,ht,ut,Ct.data):e.texImage2D(34069+H,st+1,At,Ct.width,Ct.height,0,ht,ut,Ct.data)}}else{Pt?e.texSubImage2D(34069+H,0,0,0,ht,ut,V[H]):e.texImage2D(34069+H,0,At,ht,ut,V[H]);for(let st=0;st<ot.length;st++){const it=ot[st];Pt?e.texSubImage2D(34069+H,st+1,0,0,ht,ut,it.image[H]):e.texImage2D(34069+H,st+1,At,ht,ut,it.image[H])}}}T(b,lt)&&P(34067),et.__currentVersion=et.version,b.onUpdate&&b.onUpdate(b)}E.__version=b.version}function ct(E,b,X,tt,et){const at=r.convert(X.format,X.encoding),xt=r.convert(X.type),V=v(X.internalFormat,at,xt,X.encoding);n.get(b).__hasExternalTextures||(et===32879||et===35866?e.texImage3D(et,0,V,b.width,b.height,b.depth,0,at,xt,null):e.texImage2D(et,0,V,b.width,b.height,0,at,xt,null)),e.bindFramebuffer(36160,E),It(b)?f.framebufferTexture2DMultisampleEXT(36160,tt,et,n.get(X).__webglTexture,0,re(b)):o.framebufferTexture2D(36160,tt,et,n.get(X).__webglTexture,0),e.bindFramebuffer(36160,null)}function Ft(E,b,X){if(o.bindRenderbuffer(36161,E),b.depthBuffer&&!b.stencilBuffer){let tt=33189;if(X||It(b)){const et=b.depthTexture;et&&et.isDepthTexture&&(et.type===oi?tt=36012:et.type===si&&(tt=33190));const at=re(b);It(b)?f.renderbufferStorageMultisampleEXT(36161,at,tt,b.width,b.height):o.renderbufferStorageMultisample(36161,at,tt,b.width,b.height)}else o.renderbufferStorage(36161,tt,b.width,b.height);o.framebufferRenderbuffer(36160,36096,36161,E)}else if(b.depthBuffer&&b.stencilBuffer){const tt=re(b);X&&It(b)===!1?o.renderbufferStorageMultisample(36161,tt,35056,b.width,b.height):It(b)?f.renderbufferStorageMultisampleEXT(36161,tt,35056,b.width,b.height):o.renderbufferStorage(36161,34041,b.width,b.height),o.framebufferRenderbuffer(36160,33306,36161,E)}else{const tt=b.isWebGLMultipleRenderTargets===!0?b.texture:[b.texture];for(let et=0;et<tt.length;et++){const at=tt[et],xt=r.convert(at.format,at.encoding),V=r.convert(at.type),ft=v(at.internalFormat,xt,V,at.encoding),lt=re(b);X&&It(b)===!1?o.renderbufferStorageMultisample(36161,lt,ft,b.width,b.height):It(b)?f.renderbufferStorageMultisampleEXT(36161,lt,ft,b.width,b.height):o.renderbufferStorage(36161,ft,b.width,b.height)}}o.bindRenderbuffer(36161,null)}function bt(E,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(36160,E),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(b.depthTexture).__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),U(b.depthTexture,0);const tt=n.get(b.depthTexture).__webglTexture,et=re(b);if(b.depthTexture.format===ui)It(b)?f.framebufferTexture2DMultisampleEXT(36160,36096,3553,tt,0,et):o.framebufferTexture2D(36160,36096,3553,tt,0);else if(b.depthTexture.format===Qi)It(b)?f.framebufferTexture2DMultisampleEXT(36160,33306,3553,tt,0,et):o.framebufferTexture2D(36160,33306,3553,tt,0);else throw new Error("Unknown depthTexture format")}function mt(E){const b=n.get(E),X=E.isWebGLCubeRenderTarget===!0;if(E.depthTexture&&!b.__autoAllocateDepthBuffer){if(X)throw new Error("target.depthTexture not supported in Cube render targets");bt(b.__webglFramebuffer,E)}else if(X){b.__webglDepthbuffer=[];for(let tt=0;tt<6;tt++)e.bindFramebuffer(36160,b.__webglFramebuffer[tt]),b.__webglDepthbuffer[tt]=o.createRenderbuffer(),Ft(b.__webglDepthbuffer[tt],E,!1)}else e.bindFramebuffer(36160,b.__webglFramebuffer),b.__webglDepthbuffer=o.createRenderbuffer(),Ft(b.__webglDepthbuffer,E,!1);e.bindFramebuffer(36160,null)}function ie(E,b,X){const tt=n.get(E);b!==void 0&&ct(tt.__webglFramebuffer,E,E.texture,36064,3553),X!==void 0&&mt(E)}function we(E){const b=E.texture,X=n.get(E),tt=n.get(b);E.addEventListener("dispose",J),E.isWebGLMultipleRenderTargets!==!0&&(tt.__webglTexture===void 0&&(tt.__webglTexture=o.createTexture()),tt.__version=b.version,s.memory.textures++);const et=E.isWebGLCubeRenderTarget===!0,at=E.isWebGLMultipleRenderTargets===!0,xt=A(E)||a;if(et){X.__webglFramebuffer=[];for(let V=0;V<6;V++)X.__webglFramebuffer[V]=o.createFramebuffer()}else{if(X.__webglFramebuffer=o.createFramebuffer(),at)if(i.drawBuffers){const V=E.texture;for(let ft=0,lt=V.length;ft<lt;ft++){const ht=n.get(V[ft]);ht.__webglTexture===void 0&&(ht.__webglTexture=o.createTexture(),s.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&E.samples>0&&It(E)===!1){const V=at?b:[b];X.__webglMultisampledFramebuffer=o.createFramebuffer(),X.__webglColorRenderbuffer=[],e.bindFramebuffer(36160,X.__webglMultisampledFramebuffer);for(let ft=0;ft<V.length;ft++){const lt=V[ft];X.__webglColorRenderbuffer[ft]=o.createRenderbuffer(),o.bindRenderbuffer(36161,X.__webglColorRenderbuffer[ft]);const ht=r.convert(lt.format,lt.encoding),ut=r.convert(lt.type),At=v(lt.internalFormat,ht,ut,lt.encoding),Pt=re(E);o.renderbufferStorageMultisample(36161,Pt,At,E.width,E.height),o.framebufferRenderbuffer(36160,36064+ft,36161,X.__webglColorRenderbuffer[ft])}o.bindRenderbuffer(36161,null),E.depthBuffer&&(X.__webglDepthRenderbuffer=o.createRenderbuffer(),Ft(X.__webglDepthRenderbuffer,E,!0)),e.bindFramebuffer(36160,null)}}if(et){e.bindTexture(34067,tt.__webglTexture),Z(34067,b,xt);for(let V=0;V<6;V++)ct(X.__webglFramebuffer[V],E,b,36064,34069+V);T(b,xt)&&P(34067),e.unbindTexture()}else if(at){const V=E.texture;for(let ft=0,lt=V.length;ft<lt;ft++){const ht=V[ft],ut=n.get(ht);e.bindTexture(3553,ut.__webglTexture),Z(3553,ht,xt),ct(X.__webglFramebuffer,E,ht,36064+ft,3553),T(ht,xt)&&P(3553)}e.unbindTexture()}else{let V=3553;(E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(a?V=E.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(V,tt.__webglTexture),Z(V,b,xt),ct(X.__webglFramebuffer,E,b,36064,V),T(b,xt)&&P(V),e.unbindTexture()}E.depthBuffer&&mt(E)}function fe(E){const b=A(E)||a,X=E.isWebGLMultipleRenderTargets===!0?E.texture:[E.texture];for(let tt=0,et=X.length;tt<et;tt++){const at=X[tt];if(T(at,b)){const xt=E.isWebGLCubeRenderTarget?34067:3553,V=n.get(at).__webglTexture;e.bindTexture(xt,V),P(xt),e.unbindTexture()}}}function rn(E){if(a&&E.samples>0&&It(E)===!1){const b=E.isWebGLMultipleRenderTargets?E.texture:[E.texture],X=E.width,tt=E.height;let et=16384;const at=[],xt=E.stencilBuffer?33306:36096,V=n.get(E),ft=E.isWebGLMultipleRenderTargets===!0;if(ft)for(let lt=0;lt<b.length;lt++)e.bindFramebuffer(36160,V.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(36160,36064+lt,36161,null),e.bindFramebuffer(36160,V.__webglFramebuffer),o.framebufferTexture2D(36009,36064+lt,3553,null,0);e.bindFramebuffer(36008,V.__webglMultisampledFramebuffer),e.bindFramebuffer(36009,V.__webglFramebuffer);for(let lt=0;lt<b.length;lt++){at.push(36064+lt),E.depthBuffer&&at.push(xt);const ht=V.__ignoreDepthValues!==void 0?V.__ignoreDepthValues:!1;if(ht===!1&&(E.depthBuffer&&(et|=256),E.stencilBuffer&&(et|=1024)),ft&&o.framebufferRenderbuffer(36008,36064,36161,V.__webglColorRenderbuffer[lt]),ht===!0&&(o.invalidateFramebuffer(36008,[xt]),o.invalidateFramebuffer(36009,[xt])),ft){const ut=n.get(b[lt]).__webglTexture;o.framebufferTexture2D(36009,36064,3553,ut,0)}o.blitFramebuffer(0,0,X,tt,0,0,X,tt,et,9728),m&&o.invalidateFramebuffer(36008,at)}if(e.bindFramebuffer(36008,null),e.bindFramebuffer(36009,null),ft)for(let lt=0;lt<b.length;lt++){e.bindFramebuffer(36160,V.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(36160,36064+lt,36161,V.__webglColorRenderbuffer[lt]);const ht=n.get(b[lt]).__webglTexture;e.bindFramebuffer(36160,V.__webglFramebuffer),o.framebufferTexture2D(36009,36064+lt,3553,ht,0)}e.bindFramebuffer(36009,V.__webglMultisampledFramebuffer)}}function re(E){return Math.min(h,E.samples)}function It(E){const b=n.get(E);return a&&E.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function mn(E){const b=s.render.frame;g.get(E)!==b&&(g.set(E,b),E.update())}function an(E,b){const X=E.encoding,tt=E.format,et=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||E.format===Bs||X!==gi&&(X===Ht?a===!1?t.has("EXT_sRGB")===!0&&tt===cn?(E.format=Bs,E.minFilter=ke,E.generateMipmaps=!1):b=vc.sRGBToLinear(b):(tt!==cn||et!==mi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",X)),b}this.allocateTextureUnit=k,this.resetTextureUnits=Y,this.setTexture2D=U,this.setTexture2DArray=$,this.setTexture3D=K,this.setTextureCube=Q,this.rebindTextures=ie,this.setupRenderTarget=we,this.updateRenderTargetMipmap=fe,this.updateMultisampleRenderTarget=rn,this.setupDepthRenderbuffer=mt,this.setupFrameBufferTexture=ct,this.useMultisampledRTT=It}function Rg(o,t,e){const n=e.isWebGL2;function i(r,s=null){let a;if(r===mi)return 5121;if(r===Mh)return 32819;if(r===Sh)return 32820;if(r===Ah)return 5120;if(r===wh)return 5122;if(r===mc)return 5123;if(r===bh)return 5124;if(r===si)return 5125;if(r===oi)return 5126;if(r===Sr)return n?5131:(a=t.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===Th)return 6406;if(r===cn)return 6408;if(r===Ch)return 6409;if(r===Ph)return 6410;if(r===ui)return 6402;if(r===Qi)return 34041;if(r===Dh)return 6403;if(r===Eh)return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"),6408;if(r===Bs)return a=t.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===Lh)return 36244;if(r===Rh)return 33319;if(r===Ih)return 33320;if(r===Oh)return 36249;if(r===ka||r===Va||r===Ga||r===Ha)if(s===Ht)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===ka)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Va)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Ga)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Ha)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===ka)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Va)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Ga)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Ha)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===No||r===Uo||r===zo||r===ko)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===No)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Uo)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===zo)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===ko)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Bh)return a=t.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Vo||r===Go)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(r===Vo)return s===Ht?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===Go)return s===Ht?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Ho||r===Wo||r===Xo||r===qo||r===jo||r===Yo||r===Zo||r===Ko||r===Qo||r===Jo||r===$o||r===tl||r===el||r===nl)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(r===Ho)return s===Ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Wo)return s===Ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Xo)return s===Ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===qo)return s===Ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===jo)return s===Ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Yo)return s===Ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Zo)return s===Ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Ko)return s===Ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Qo)return s===Ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Jo)return s===Ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===$o)return s===Ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===tl)return s===Ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===el)return s===Ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===nl)return s===Ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===il)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(r===il)return s===Ht?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;return r===Wi?n?34042:(a=t.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):o[r]!==void 0?o[r]:null}return{convert:i}}class Ig extends Ve{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class _r extends ve{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Og={type:"move"};class _s{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new _r,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new _r,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new _r,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,s=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){s=!0;for(const d of t.hand.values()){const p=e.getJointPose(d,n);if(c.joints[d.jointName]===void 0){const x=new _r;x.matrixAutoUpdate=!1,x.visible=!1,c.joints[d.jointName]=x,c.add(x)}const _=c.joints[d.jointName];p!==null&&(_.matrix.fromArray(p.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.jointRadius=p.radius),_.visible=p!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),m=.02,g=.005;c.inputState.pinching&&f>m+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=m-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Og)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=s!==null),this}}class Bg extends Ye{constructor(t,e,n,i,r,s,a,l,c,u){if(u=u!==void 0?u:ui,u!==ui&&u!==Qi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===ui&&(n=si),n===void 0&&u===Qi&&(n=Wi),super(null,i,r,s,a,l,u,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:ge,this.minFilter=l!==void 0?l:ge,this.flipY=!1,this.generateMipmaps=!1}}class Fg extends or{constructor(t,e){super();const n=this;let i=null,r=1,s=null,a="local-floor",l=null,c=null,u=null,h=null,f=null,m=null;const g=e.getContextAttributes();let d=null,p=null;const _=[],x=[],w=new Ve;w.layers.enable(1),w.viewport=new se;const A=new Ve;A.layers.enable(2),A.viewport=new se;const y=[w,A],T=new Ig;T.layers.enable(1),T.layers.enable(2);let P=null,v=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(O){let U=_[O];return U===void 0&&(U=new _s,_[O]=U),U.getTargetRaySpace()},this.getControllerGrip=function(O){let U=_[O];return U===void 0&&(U=new _s,_[O]=U),U.getGripSpace()},this.getHand=function(O){let U=_[O];return U===void 0&&(U=new _s,_[O]=U),U.getHandSpace()};function M(O){const U=x.indexOf(O.inputSource);if(U===-1)return;const $=_[U];$!==void 0&&$.dispatchEvent({type:O.type,data:O.inputSource})}function D(){i.removeEventListener("select",M),i.removeEventListener("selectstart",M),i.removeEventListener("selectend",M),i.removeEventListener("squeeze",M),i.removeEventListener("squeezestart",M),i.removeEventListener("squeezeend",M),i.removeEventListener("end",D),i.removeEventListener("inputsourceschange",G);for(let O=0;O<_.length;O++){const U=x[O];U!==null&&(x[O]=null,_[O].disconnect(U))}P=null,v=null,t.setRenderTarget(d),f=null,h=null,u=null,i=null,p=null,k.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(O){r=O,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(O){a=O,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||s},this.setReferenceSpace=function(O){l=O},this.getBaseLayer=function(){return h!==null?h:f},this.getBinding=function(){return u},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function(O){if(i=O,i!==null){if(d=t.getRenderTarget(),i.addEventListener("select",M),i.addEventListener("selectstart",M),i.addEventListener("selectend",M),i.addEventListener("squeeze",M),i.addEventListener("squeezestart",M),i.addEventListener("squeezeend",M),i.addEventListener("end",D),i.addEventListener("inputsourceschange",G),g.xrCompatible!==!0&&await e.makeXRCompatible(),i.renderState.layers===void 0||t.capabilities.isWebGL2===!1){const U={antialias:i.renderState.layers===void 0?g.antialias:!0,alpha:g.alpha,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,e,U),i.updateRenderState({baseLayer:f}),p=new _i(f.framebufferWidth,f.framebufferHeight,{format:cn,type:mi,encoding:t.outputEncoding,stencilBuffer:g.stencil})}else{let U=null,$=null,K=null;g.depth&&(K=g.stencil?35056:33190,U=g.stencil?Qi:ui,$=g.stencil?Wi:si);const Q={colorFormat:32856,depthFormat:K,scaleFactor:r};u=new XRWebGLBinding(i,e),h=u.createProjectionLayer(Q),i.updateRenderState({layers:[h]}),p=new _i(h.textureWidth,h.textureHeight,{format:cn,type:mi,depthTexture:new Bg(h.textureWidth,h.textureHeight,$,void 0,void 0,void 0,void 0,void 0,void 0,U),stencilBuffer:g.stencil,encoding:t.outputEncoding,samples:g.antialias?4:0});const rt=t.properties.get(p);rt.__ignoreDepthValues=h.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(1),l=null,s=await i.requestReferenceSpace(a),k.setContext(i),k.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function G(O){for(let U=0;U<O.removed.length;U++){const $=O.removed[U],K=x.indexOf($);K>=0&&(x[K]=null,_[K].dispatchEvent({type:"disconnected",data:$}))}for(let U=0;U<O.added.length;U++){const $=O.added[U];let K=x.indexOf($);if(K===-1){for(let rt=0;rt<_.length;rt++)if(rt>=x.length){x.push($),K=rt;break}else if(x[rt]===null){x[rt]=$,K=rt;break}if(K===-1)break}const Q=_[K];Q&&Q.dispatchEvent({type:"connected",data:$})}}const J=new F,N=new F;function R(O,U,$){J.setFromMatrixPosition(U.matrixWorld),N.setFromMatrixPosition($.matrixWorld);const K=J.distanceTo(N),Q=U.projectionMatrix.elements,rt=$.projectionMatrix.elements,pt=Q[14]/(Q[10]-1),Z=Q[14]/(Q[10]+1),Rt=(Q[9]+1)/Q[5],gt=(Q[9]-1)/Q[5],vt=(Q[8]-1)/Q[0],ct=(rt[8]+1)/rt[0],Ft=pt*vt,bt=pt*ct,mt=K/(-vt+ct),ie=mt*-vt;U.matrixWorld.decompose(O.position,O.quaternion,O.scale),O.translateX(ie),O.translateZ(mt),O.matrixWorld.compose(O.position,O.quaternion,O.scale),O.matrixWorldInverse.copy(O.matrixWorld).invert();const we=pt+mt,fe=Z+mt,rn=Ft-ie,re=bt+(K-ie),It=Rt*Z/fe*we,mn=gt*Z/fe*we;O.projectionMatrix.makePerspective(rn,re,It,mn,we,fe)}function z(O,U){U===null?O.matrixWorld.copy(O.matrix):O.matrixWorld.multiplyMatrices(U.matrixWorld,O.matrix),O.matrixWorldInverse.copy(O.matrixWorld).invert()}this.updateCamera=function(O){if(i===null)return;T.near=A.near=w.near=O.near,T.far=A.far=w.far=O.far,(P!==T.near||v!==T.far)&&(i.updateRenderState({depthNear:T.near,depthFar:T.far}),P=T.near,v=T.far);const U=O.parent,$=T.cameras;z(T,U);for(let Q=0;Q<$.length;Q++)z($[Q],U);T.matrixWorld.decompose(T.position,T.quaternion,T.scale),O.matrix.copy(T.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale);const K=O.children;for(let Q=0,rt=K.length;Q<rt;Q++)K[Q].updateMatrixWorld(!0);$.length===2?R(T,w,A):T.projectionMatrix.copy(w.projectionMatrix)},this.getCamera=function(){return T},this.getFoveation=function(){if(h!==null)return h.fixedFoveation;if(f!==null)return f.fixedFoveation},this.setFoveation=function(O){h!==null&&(h.fixedFoveation=O),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=O)};let j=null;function Y(O,U){if(c=U.getViewerPose(l||s),m=U,c!==null){const $=c.views;f!==null&&(t.setRenderTargetFramebuffer(p,f.framebuffer),t.setRenderTarget(p));let K=!1;$.length!==T.cameras.length&&(T.cameras.length=0,K=!0);for(let Q=0;Q<$.length;Q++){const rt=$[Q];let pt=null;if(f!==null)pt=f.getViewport(rt);else{const Rt=u.getViewSubImage(h,rt);pt=Rt.viewport,Q===0&&(t.setRenderTargetTextures(p,Rt.colorTexture,h.ignoreDepthValues?void 0:Rt.depthStencilTexture),t.setRenderTarget(p))}let Z=y[Q];Z===void 0&&(Z=new Ve,Z.layers.enable(Q),Z.viewport=new se,y[Q]=Z),Z.matrix.fromArray(rt.transform.matrix),Z.projectionMatrix.fromArray(rt.projectionMatrix),Z.viewport.set(pt.x,pt.y,pt.width,pt.height),Q===0&&T.matrix.copy(Z.matrix),K===!0&&T.cameras.push(Z)}}for(let $=0;$<_.length;$++){const K=x[$],Q=_[$];K!==null&&Q!==void 0&&Q.update(K,U,l||s)}j&&j(O,U),m=null}const k=new Tc;k.setAnimationLoop(Y),this.setAnimationLoop=function(O){j=O},this.dispose=function(){}}}function Ng(o,t){function e(d,p){d.fogColor.value.copy(p.color),p.isFog?(d.fogNear.value=p.near,d.fogFar.value=p.far):p.isFogExp2&&(d.fogDensity.value=p.density)}function n(d,p,_,x,w){p.isMeshBasicMaterial||p.isMeshLambertMaterial?i(d,p):p.isMeshToonMaterial?(i(d,p),u(d,p)):p.isMeshPhongMaterial?(i(d,p),c(d,p)):p.isMeshStandardMaterial?(i(d,p),h(d,p),p.isMeshPhysicalMaterial&&f(d,p,w)):p.isMeshMatcapMaterial?(i(d,p),m(d,p)):p.isMeshDepthMaterial?i(d,p):p.isMeshDistanceMaterial?(i(d,p),g(d,p)):p.isMeshNormalMaterial?i(d,p):p.isLineBasicMaterial?(r(d,p),p.isLineDashedMaterial&&s(d,p)):p.isPointsMaterial?a(d,p,_,x):p.isSpriteMaterial?l(d,p):p.isShadowMaterial?(d.color.value.copy(p.color),d.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function i(d,p){d.opacity.value=p.opacity,p.color&&d.diffuse.value.copy(p.color),p.emissive&&d.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(d.map.value=p.map),p.alphaMap&&(d.alphaMap.value=p.alphaMap),p.bumpMap&&(d.bumpMap.value=p.bumpMap,d.bumpScale.value=p.bumpScale,p.side===De&&(d.bumpScale.value*=-1)),p.displacementMap&&(d.displacementMap.value=p.displacementMap,d.displacementScale.value=p.displacementScale,d.displacementBias.value=p.displacementBias),p.emissiveMap&&(d.emissiveMap.value=p.emissiveMap),p.normalMap&&(d.normalMap.value=p.normalMap,d.normalScale.value.copy(p.normalScale),p.side===De&&d.normalScale.value.negate()),p.specularMap&&(d.specularMap.value=p.specularMap),p.alphaTest>0&&(d.alphaTest.value=p.alphaTest);const _=t.get(p).envMap;if(_&&(d.envMap.value=_,d.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,d.reflectivity.value=p.reflectivity,d.ior.value=p.ior,d.refractionRatio.value=p.refractionRatio),p.lightMap){d.lightMap.value=p.lightMap;const A=o.physicallyCorrectLights!==!0?Math.PI:1;d.lightMapIntensity.value=p.lightMapIntensity*A}p.aoMap&&(d.aoMap.value=p.aoMap,d.aoMapIntensity.value=p.aoMapIntensity);let x;p.map?x=p.map:p.specularMap?x=p.specularMap:p.displacementMap?x=p.displacementMap:p.normalMap?x=p.normalMap:p.bumpMap?x=p.bumpMap:p.roughnessMap?x=p.roughnessMap:p.metalnessMap?x=p.metalnessMap:p.alphaMap?x=p.alphaMap:p.emissiveMap?x=p.emissiveMap:p.clearcoatMap?x=p.clearcoatMap:p.clearcoatNormalMap?x=p.clearcoatNormalMap:p.clearcoatRoughnessMap?x=p.clearcoatRoughnessMap:p.iridescenceMap?x=p.iridescenceMap:p.iridescenceThicknessMap?x=p.iridescenceThicknessMap:p.specularIntensityMap?x=p.specularIntensityMap:p.specularColorMap?x=p.specularColorMap:p.transmissionMap?x=p.transmissionMap:p.thicknessMap?x=p.thicknessMap:p.sheenColorMap?x=p.sheenColorMap:p.sheenRoughnessMap&&(x=p.sheenRoughnessMap),x!==void 0&&(x.isWebGLRenderTarget&&(x=x.texture),x.matrixAutoUpdate===!0&&x.updateMatrix(),d.uvTransform.value.copy(x.matrix));let w;p.aoMap?w=p.aoMap:p.lightMap&&(w=p.lightMap),w!==void 0&&(w.isWebGLRenderTarget&&(w=w.texture),w.matrixAutoUpdate===!0&&w.updateMatrix(),d.uv2Transform.value.copy(w.matrix))}function r(d,p){d.diffuse.value.copy(p.color),d.opacity.value=p.opacity}function s(d,p){d.dashSize.value=p.dashSize,d.totalSize.value=p.dashSize+p.gapSize,d.scale.value=p.scale}function a(d,p,_,x){d.diffuse.value.copy(p.color),d.opacity.value=p.opacity,d.size.value=p.size*_,d.scale.value=x*.5,p.map&&(d.map.value=p.map),p.alphaMap&&(d.alphaMap.value=p.alphaMap),p.alphaTest>0&&(d.alphaTest.value=p.alphaTest);let w;p.map?w=p.map:p.alphaMap&&(w=p.alphaMap),w!==void 0&&(w.matrixAutoUpdate===!0&&w.updateMatrix(),d.uvTransform.value.copy(w.matrix))}function l(d,p){d.diffuse.value.copy(p.color),d.opacity.value=p.opacity,d.rotation.value=p.rotation,p.map&&(d.map.value=p.map),p.alphaMap&&(d.alphaMap.value=p.alphaMap),p.alphaTest>0&&(d.alphaTest.value=p.alphaTest);let _;p.map?_=p.map:p.alphaMap&&(_=p.alphaMap),_!==void 0&&(_.matrixAutoUpdate===!0&&_.updateMatrix(),d.uvTransform.value.copy(_.matrix))}function c(d,p){d.specular.value.copy(p.specular),d.shininess.value=Math.max(p.shininess,1e-4)}function u(d,p){p.gradientMap&&(d.gradientMap.value=p.gradientMap)}function h(d,p){d.roughness.value=p.roughness,d.metalness.value=p.metalness,p.roughnessMap&&(d.roughnessMap.value=p.roughnessMap),p.metalnessMap&&(d.metalnessMap.value=p.metalnessMap),t.get(p).envMap&&(d.envMapIntensity.value=p.envMapIntensity)}function f(d,p,_){d.ior.value=p.ior,p.sheen>0&&(d.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),d.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(d.sheenColorMap.value=p.sheenColorMap),p.sheenRoughnessMap&&(d.sheenRoughnessMap.value=p.sheenRoughnessMap)),p.clearcoat>0&&(d.clearcoat.value=p.clearcoat,d.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(d.clearcoatMap.value=p.clearcoatMap),p.clearcoatRoughnessMap&&(d.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap),p.clearcoatNormalMap&&(d.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),d.clearcoatNormalMap.value=p.clearcoatNormalMap,p.side===De&&d.clearcoatNormalScale.value.negate())),p.iridescence>0&&(d.iridescence.value=p.iridescence,d.iridescenceIOR.value=p.iridescenceIOR,d.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],d.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(d.iridescenceMap.value=p.iridescenceMap),p.iridescenceThicknessMap&&(d.iridescenceThicknessMap.value=p.iridescenceThicknessMap)),p.transmission>0&&(d.transmission.value=p.transmission,d.transmissionSamplerMap.value=_.texture,d.transmissionSamplerSize.value.set(_.width,_.height),p.transmissionMap&&(d.transmissionMap.value=p.transmissionMap),d.thickness.value=p.thickness,p.thicknessMap&&(d.thicknessMap.value=p.thicknessMap),d.attenuationDistance.value=p.attenuationDistance,d.attenuationColor.value.copy(p.attenuationColor)),d.specularIntensity.value=p.specularIntensity,d.specularColor.value.copy(p.specularColor),p.specularIntensityMap&&(d.specularIntensityMap.value=p.specularIntensityMap),p.specularColorMap&&(d.specularColorMap.value=p.specularColorMap)}function m(d,p){p.matcap&&(d.matcap.value=p.matcap)}function g(d,p){d.referencePosition.value.copy(p.referencePosition),d.nearDistance.value=p.nearDistance,d.farDistance.value=p.farDistance}return{refreshFogUniforms:e,refreshMaterialUniforms:n}}function Ug(o,t,e,n){let i={},r={},s=[];const a=e.isWebGL2?o.getParameter(35375):0;function l(x,w){const A=w.program;n.uniformBlockBinding(x,A)}function c(x,w){let A=i[x.id];A===void 0&&(g(x),A=u(x),i[x.id]=A,x.addEventListener("dispose",p));const y=w.program;n.updateUBOMapping(x,y);const T=t.render.frame;r[x.id]!==T&&(f(x),r[x.id]=T)}function u(x){const w=h();x.__bindingPointIndex=w;const A=o.createBuffer(),y=x.__size,T=x.usage;return o.bindBuffer(35345,A),o.bufferData(35345,y,T),o.bindBuffer(35345,null),o.bindBufferBase(35345,w,A),A}function h(){for(let x=0;x<a;x++)if(s.indexOf(x)===-1)return s.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(x){const w=i[x.id],A=x.uniforms,y=x.__cache;o.bindBuffer(35345,w);for(let T=0,P=A.length;T<P;T++){const v=A[T];if(m(v,T,y)===!0){const M=v.value,D=v.__offset;typeof M=="number"?(v.__data[0]=M,o.bufferSubData(35345,D,v.__data)):(v.value.isMatrix3?(v.__data[0]=v.value.elements[0],v.__data[1]=v.value.elements[1],v.__data[2]=v.value.elements[2],v.__data[3]=v.value.elements[0],v.__data[4]=v.value.elements[3],v.__data[5]=v.value.elements[4],v.__data[6]=v.value.elements[5],v.__data[7]=v.value.elements[0],v.__data[8]=v.value.elements[6],v.__data[9]=v.value.elements[7],v.__data[10]=v.value.elements[8],v.__data[11]=v.value.elements[0]):M.toArray(v.__data),o.bufferSubData(35345,D,v.__data))}}o.bindBuffer(35345,null)}function m(x,w,A){const y=x.value;if(A[w]===void 0)return typeof y=="number"?A[w]=y:A[w]=y.clone(),!0;if(typeof y=="number"){if(A[w]!==y)return A[w]=y,!0}else{const T=A[w];if(T.equals(y)===!1)return T.copy(y),!0}return!1}function g(x){const w=x.uniforms;let A=0;const y=16;let T=0;for(let P=0,v=w.length;P<v;P++){const M=w[P],D=d(M);if(M.__data=new Float32Array(D.storage/Float32Array.BYTES_PER_ELEMENT),M.__offset=A,P>0){T=A%y;const G=y-T;T!==0&&G-D.boundary<0&&(A+=y-T,M.__offset=A)}A+=D.storage}return T=A%y,T>0&&(A+=y-T),x.__size=A,x.__cache={},this}function d(x){const w=x.value,A={boundary:0,storage:0};return typeof w=="number"?(A.boundary=4,A.storage=4):w.isVector2?(A.boundary=8,A.storage=8):w.isVector3||w.isColor?(A.boundary=16,A.storage=12):w.isVector4?(A.boundary=16,A.storage=16):w.isMatrix3?(A.boundary=48,A.storage=48):w.isMatrix4?(A.boundary=64,A.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),A}function p(x){const w=x.target;w.removeEventListener("dispose",p);const A=s.indexOf(w.__bindingPointIndex);s.splice(A,1),o.deleteBuffer(i[w.id]),delete i[w.id],delete r[w.id]}function _(){for(const x in i)o.deleteBuffer(i[x]);s=[],i={},r={}}return{bind:l,update:c,dispose:_}}function zg(){const o=Tr("canvas");return o.style.display="block",o}function kg(o={}){this.isWebGLRenderer=!0;const t=o.canvas!==void 0?o.canvas:zg(),e=o.context!==void 0?o.context:null,n=o.depth!==void 0?o.depth:!0,i=o.stencil!==void 0?o.stencil:!0,r=o.antialias!==void 0?o.antialias:!1,s=o.premultipliedAlpha!==void 0?o.premultipliedAlpha:!0,a=o.preserveDrawingBuffer!==void 0?o.preserveDrawingBuffer:!1,l=o.powerPreference!==void 0?o.powerPreference:"default",c=o.failIfMajorPerformanceCaveat!==void 0?o.failIfMajorPerformanceCaveat:!1;let u;e!==null?u=e.getContextAttributes().alpha:u=o.alpha!==void 0?o.alpha:!1;let h=null,f=null;const m=[],g=[];this.domElement=t,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=gi,this.physicallyCorrectLights=!1,this.toneMapping=En,this.toneMappingExposure=1,Object.defineProperties(this,{gammaFactor:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaFactor has been removed."),2},set:function(){console.warn("THREE.WebGLRenderer: .gammaFactor has been removed.")}}});const d=this;let p=!1,_=0,x=0,w=null,A=-1,y=null;const T=new se,P=new se;let v=null,M=t.width,D=t.height,G=1,J=null,N=null;const R=new se(0,0,M,D),z=new se(0,0,M,D);let j=!1;const Y=new Sc;let k=!1,O=!1,U=null;const $=new $t,K=new Nt,Q=new F,rt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function pt(){return w===null?G:1}let Z=e;function Rt(S,B){for(let W=0;W<S.length;W++){const I=S[W],q=t.getContext(I,B);if(q!==null)return q}return null}try{const S={alpha:!0,depth:n,stencil:i,antialias:r,premultipliedAlpha:s,preserveDrawingBuffer:a,powerPreference:l,failIfMajorPerformanceCaveat:c};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${ro}`),t.addEventListener("webglcontextlost",At,!1),t.addEventListener("webglcontextrestored",Pt,!1),t.addEventListener("webglcontextcreationerror",Xt,!1),Z===null){const B=["webgl2","webgl","experimental-webgl"];if(d.isWebGL1Renderer===!0&&B.shift(),Z=Rt(B,S),Z===null)throw Rt(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}Z.getShaderPrecisionFormat===void 0&&(Z.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let gt,vt,ct,Ft,bt,mt,ie,we,fe,rn,re,It,mn,an,E,b,X,tt,et,at,xt,V,ft,lt;function ht(){gt=new Kp(Z),vt=new Hp(Z,gt,o),gt.init(vt),V=new Rg(Z,gt,vt),ct=new Dg(Z,gt,vt),Ft=new $p,bt=new gg,mt=new Lg(Z,gt,ct,bt,vt,V,Ft),ie=new Xp(d),we=new Zp(d),fe=new cf(Z,vt),ft=new Vp(Z,gt,fe,vt),rn=new Qp(Z,fe,Ft,ft),re=new im(Z,rn,fe,Ft),et=new nm(Z,vt,mt),b=new Wp(bt),It=new mg(d,ie,we,gt,vt,ft,b),mn=new Ng(d,bt),an=new vg,E=new Mg(gt,vt),tt=new kp(d,ie,ct,re,u,s),X=new Pg(d,re,vt),lt=new Ug(Z,Ft,vt,ct),at=new Gp(Z,gt,Ft,vt),xt=new Jp(Z,gt,Ft,vt),Ft.programs=It.programs,d.capabilities=vt,d.extensions=gt,d.properties=bt,d.renderLists=an,d.shadowMap=X,d.state=ct,d.info=Ft}ht();const ut=new Fg(d,Z);this.xr=ut,this.getContext=function(){return Z},this.getContextAttributes=function(){return Z.getContextAttributes()},this.forceContextLoss=function(){const S=gt.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=gt.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(S){S!==void 0&&(G=S,this.setSize(M,D,!1))},this.getSize=function(S){return S.set(M,D)},this.setSize=function(S,B,W){if(ut.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}M=S,D=B,t.width=Math.floor(S*G),t.height=Math.floor(B*G),W!==!1&&(t.style.width=S+"px",t.style.height=B+"px"),this.setViewport(0,0,S,B)},this.getDrawingBufferSize=function(S){return S.set(M*G,D*G).floor()},this.setDrawingBufferSize=function(S,B,W){M=S,D=B,G=W,t.width=Math.floor(S*W),t.height=Math.floor(B*W),this.setViewport(0,0,S,B)},this.getCurrentViewport=function(S){return S.copy(T)},this.getViewport=function(S){return S.copy(R)},this.setViewport=function(S,B,W,I){S.isVector4?R.set(S.x,S.y,S.z,S.w):R.set(S,B,W,I),ct.viewport(T.copy(R).multiplyScalar(G).floor())},this.getScissor=function(S){return S.copy(z)},this.setScissor=function(S,B,W,I){S.isVector4?z.set(S.x,S.y,S.z,S.w):z.set(S,B,W,I),ct.scissor(P.copy(z).multiplyScalar(G).floor())},this.getScissorTest=function(){return j},this.setScissorTest=function(S){ct.setScissorTest(j=S)},this.setOpaqueSort=function(S){J=S},this.setTransparentSort=function(S){N=S},this.getClearColor=function(S){return S.copy(tt.getClearColor())},this.setClearColor=function(){tt.setClearColor.apply(tt,arguments)},this.getClearAlpha=function(){return tt.getClearAlpha()},this.setClearAlpha=function(){tt.setClearAlpha.apply(tt,arguments)},this.clear=function(S=!0,B=!0,W=!0){let I=0;S&&(I|=16384),B&&(I|=256),W&&(I|=1024),Z.clear(I)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",At,!1),t.removeEventListener("webglcontextrestored",Pt,!1),t.removeEventListener("webglcontextcreationerror",Xt,!1),an.dispose(),E.dispose(),bt.dispose(),ie.dispose(),we.dispose(),re.dispose(),ft.dispose(),lt.dispose(),It.dispose(),ut.dispose(),ut.removeEventListener("sessionstart",Ct),ut.removeEventListener("sessionend",te),U&&(U.dispose(),U=null),qt.stop()};function At(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),p=!0}function Pt(){console.log("THREE.WebGLRenderer: Context Restored."),p=!1;const S=Ft.autoReset,B=X.enabled,W=X.autoUpdate,I=X.needsUpdate,q=X.type;ht(),Ft.autoReset=S,X.enabled=B,X.autoUpdate=W,X.needsUpdate=I,X.type=q}function Xt(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function L(S){const B=S.target;B.removeEventListener("dispose",L),ot(B)}function ot(S){H(S),bt.remove(S)}function H(S){const B=bt.get(S).programs;B!==void 0&&(B.forEach(function(W){It.releaseProgram(W)}),S.isShaderMaterial&&It.releaseShaderCache(S))}this.renderBufferDirect=function(S,B,W,I,q,dt){B===null&&(B=rt);const _t=q.isMesh&&q.matrixWorld.determinant()<0,wt=Vu(S,B,W,I,q);ct.setMaterial(I,_t);let yt=W.index;const Lt=W.attributes.position;if(yt===null){if(Lt===void 0||Lt.count===0)return}else if(yt.count===0)return;let Tt=1;I.wireframe===!0&&(yt=rn.getWireframeAttribute(W),Tt=2),ft.setup(q,I,wt,W,yt);let Et,Gt=at;yt!==null&&(Et=fe.get(yt),Gt=xt,Gt.setIndex(Et));const Zn=yt!==null?yt.count:Lt.count,yi=W.drawRange.start*Tt,Ai=W.drawRange.count*Tt,sn=dt!==null?dt.start*Tt:0,Dt=dt!==null?dt.count*Tt:1/0,wi=Math.max(yi,sn),Yt=Math.min(Zn,yi+Ai,sn+Dt)-1,Be=Math.max(0,Yt-wi+1);if(Be!==0){if(q.isMesh)I.wireframe===!0?(ct.setLineWidth(I.wireframeLinewidth*pt()),Gt.setMode(1)):Gt.setMode(4);else if(q.isLine){let Ln=I.linewidth;Ln===void 0&&(Ln=1),ct.setLineWidth(Ln*pt()),q.isLineSegments?Gt.setMode(1):q.isLineLoop?Gt.setMode(2):Gt.setMode(3)}else q.isPoints?Gt.setMode(0):q.isSprite&&Gt.setMode(4);if(q.isInstancedMesh)Gt.renderInstances(wi,Be,q.count);else if(W.isInstancedBufferGeometry){const Ln=Math.min(W.instanceCount,W._maxInstanceCount);Gt.renderInstances(wi,Be,Ln)}else Gt.render(wi,Be)}},this.compile=function(S,B){function W(I,q,dt){I.transparent===!0&&I.side===zn?(I.side=De,I.needsUpdate=!0,Gr(I,q,dt),I.side=Yi,I.needsUpdate=!0,Gr(I,q,dt),I.side=zn):Gr(I,q,dt)}f=E.get(S),f.init(),g.push(f),S.traverseVisible(function(I){I.isLight&&I.layers.test(B.layers)&&(f.pushLight(I),I.castShadow&&f.pushShadow(I))}),f.setupLights(d.physicallyCorrectLights),S.traverse(function(I){const q=I.material;if(q)if(Array.isArray(q))for(let dt=0;dt<q.length;dt++){const _t=q[dt];W(_t,S,I)}else W(q,S,I)}),g.pop(),f=null};let st=null;function it(S){st&&st(S)}function Ct(){qt.stop()}function te(){qt.start()}const qt=new Tc;qt.setAnimationLoop(it),typeof self<"u"&&qt.setContext(self),this.setAnimationLoop=function(S){st=S,ut.setAnimationLoop(S),S===null?qt.stop():qt.start()},ut.addEventListener("sessionstart",Ct),ut.addEventListener("sessionend",te),this.render=function(S,B){if(B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(p===!0)return;S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),ut.enabled===!0&&ut.isPresenting===!0&&(ut.cameraAutoUpdate===!0&&ut.updateCamera(B),B=ut.getCamera()),S.isScene===!0&&S.onBeforeRender(d,S,B,w),f=E.get(S,g.length),f.init(),g.push(f),$.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),Y.setFromProjectionMatrix($),O=this.localClippingEnabled,k=b.init(this.clippingPlanes,O,B),h=an.get(S,m.length),h.init(),m.push(h),Dn(S,B,0,d.sortObjects),h.finish(),d.sortObjects===!0&&h.sort(J,N),k===!0&&b.beginShadows();const W=f.state.shadowsArray;if(X.render(W,S,B),k===!0&&b.endShadows(),this.info.autoReset===!0&&this.info.reset(),tt.render(h,S),f.setupLights(d.physicallyCorrectLights),B.isArrayCamera){const I=B.cameras;for(let q=0,dt=I.length;q<dt;q++){const _t=I[q];Vt(h,S,_t,_t.viewport)}}else Vt(h,S,B);w!==null&&(mt.updateMultisampleRenderTarget(w),mt.updateRenderTargetMipmap(w)),S.isScene===!0&&S.onAfterRender(d,S,B),ft.resetDefaultState(),A=-1,y=null,g.pop(),g.length>0?f=g[g.length-1]:f=null,m.pop(),m.length>0?h=m[m.length-1]:h=null};function Dn(S,B,W,I){if(S.visible===!1)return;if(S.layers.test(B.layers)){if(S.isGroup)W=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(B);else if(S.isLight)f.pushLight(S),S.castShadow&&f.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||Y.intersectsSprite(S)){I&&Q.setFromMatrixPosition(S.matrixWorld).applyMatrix4($);const _t=re.update(S),wt=S.material;wt.visible&&h.push(S,_t,wt,W,Q.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(S.isSkinnedMesh&&S.skeleton.frame!==Ft.render.frame&&(S.skeleton.update(),S.skeleton.frame=Ft.render.frame),!S.frustumCulled||Y.intersectsObject(S))){I&&Q.setFromMatrixPosition(S.matrixWorld).applyMatrix4($);const _t=re.update(S),wt=S.material;if(Array.isArray(wt)){const yt=_t.groups;for(let Lt=0,Tt=yt.length;Lt<Tt;Lt++){const Et=yt[Lt],Gt=wt[Et.materialIndex];Gt&&Gt.visible&&h.push(S,_t,Gt,W,Q.z,Et)}}else wt.visible&&h.push(S,_t,wt,W,Q.z,null)}}const dt=S.children;for(let _t=0,wt=dt.length;_t<wt;_t++)Dn(dt[_t],B,W,I)}function Vt(S,B,W,I){const q=S.opaque,dt=S.transmissive,_t=S.transparent;f.setupLightsView(W),dt.length>0&&gn(q,B,W),I&&ct.viewport(T.copy(I)),q.length>0&&Oe(q,B,W),dt.length>0&&Oe(dt,B,W),_t.length>0&&Oe(_t,B,W),ct.buffers.depth.setTest(!0),ct.buffers.depth.setMask(!0),ct.buffers.color.setMask(!0),ct.setPolygonOffset(!1)}function gn(S,B,W){const I=vt.isWebGL2;U===null&&(U=new _i(1,1,{generateMipmaps:!0,type:gt.has("EXT_color_buffer_half_float")?Sr:mi,minFilter:La,samples:I&&r===!0?4:0})),d.getDrawingBufferSize(K),I?U.setSize(K.x,K.y):U.setSize(Fs(K.x),Fs(K.y));const q=d.getRenderTarget();d.setRenderTarget(U),d.clear();const dt=d.toneMapping;d.toneMapping=En,Oe(S,B,W),d.toneMapping=dt,mt.updateMultisampleRenderTarget(U),mt.updateRenderTargetMipmap(U),d.setRenderTarget(q)}function Oe(S,B,W){const I=B.isScene===!0?B.overrideMaterial:null;for(let q=0,dt=S.length;q<dt;q++){const _t=S[q],wt=_t.object,yt=_t.geometry,Lt=I===null?_t.material:I,Tt=_t.group;wt.layers.test(W.layers)&&ku(wt,B,W,yt,Lt,Tt)}}function ku(S,B,W,I,q,dt){S.onBeforeRender(d,B,W,I,q,dt),S.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),q.onBeforeRender(d,B,W,I,S,dt),q.transparent===!0&&q.side===zn?(q.side=De,q.needsUpdate=!0,d.renderBufferDirect(W,B,I,q,S,dt),q.side=Yi,q.needsUpdate=!0,d.renderBufferDirect(W,B,I,q,S,dt),q.side=zn):d.renderBufferDirect(W,B,I,q,S,dt),S.onAfterRender(d,B,W,I,q,dt)}function Gr(S,B,W){B.isScene!==!0&&(B=rt);const I=bt.get(S),q=f.state.lights,dt=f.state.shadowsArray,_t=q.state.version,wt=It.getParameters(S,q.state,dt,B,W),yt=It.getProgramCacheKey(wt);let Lt=I.programs;I.environment=S.isMeshStandardMaterial?B.environment:null,I.fog=B.fog,I.envMap=(S.isMeshStandardMaterial?we:ie).get(S.envMap||I.environment),Lt===void 0&&(S.addEventListener("dispose",L),Lt=new Map,I.programs=Lt);let Tt=Lt.get(yt);if(Tt!==void 0){if(I.currentProgram===Tt&&I.lightsStateVersion===_t)return Co(S,wt),Tt}else wt.uniforms=It.getUniforms(S),S.onBuild(W,wt,d),S.onBeforeCompile(wt,d),Tt=It.acquireProgram(wt,yt),Lt.set(yt,Tt),I.uniforms=wt.uniforms;const Et=I.uniforms;(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Et.clippingPlanes=b.uniform),Co(S,wt),I.needsLights=Hu(S),I.lightsStateVersion=_t,I.needsLights&&(Et.ambientLightColor.value=q.state.ambient,Et.lightProbe.value=q.state.probe,Et.directionalLights.value=q.state.directional,Et.directionalLightShadows.value=q.state.directionalShadow,Et.spotLights.value=q.state.spot,Et.spotLightShadows.value=q.state.spotShadow,Et.rectAreaLights.value=q.state.rectArea,Et.ltc_1.value=q.state.rectAreaLTC1,Et.ltc_2.value=q.state.rectAreaLTC2,Et.pointLights.value=q.state.point,Et.pointLightShadows.value=q.state.pointShadow,Et.hemisphereLights.value=q.state.hemi,Et.directionalShadowMap.value=q.state.directionalShadowMap,Et.directionalShadowMatrix.value=q.state.directionalShadowMatrix,Et.spotShadowMap.value=q.state.spotShadowMap,Et.spotLightMatrix.value=q.state.spotLightMatrix,Et.spotLightMap.value=q.state.spotLightMap,Et.pointShadowMap.value=q.state.pointShadowMap,Et.pointShadowMatrix.value=q.state.pointShadowMatrix);const Gt=Tt.getUniforms(),Zn=ma.seqWithValue(Gt.seq,Et);return I.currentProgram=Tt,I.uniformsList=Zn,Tt}function Co(S,B){const W=bt.get(S);W.outputEncoding=B.outputEncoding,W.instancing=B.instancing,W.skinning=B.skinning,W.morphTargets=B.morphTargets,W.morphNormals=B.morphNormals,W.morphColors=B.morphColors,W.morphTargetsCount=B.morphTargetsCount,W.numClippingPlanes=B.numClippingPlanes,W.numIntersection=B.numClipIntersection,W.vertexAlphas=B.vertexAlphas,W.vertexTangents=B.vertexTangents,W.toneMapping=B.toneMapping}function Vu(S,B,W,I,q){B.isScene!==!0&&(B=rt),mt.resetTextureUnits();const dt=B.fog,_t=I.isMeshStandardMaterial?B.environment:null,wt=w===null?d.outputEncoding:w.isXRRenderTarget===!0?w.texture.encoding:gi,yt=(I.isMeshStandardMaterial?we:ie).get(I.envMap||_t),Lt=I.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Tt=!!I.normalMap&&!!W.attributes.tangent,Et=!!W.morphAttributes.position,Gt=!!W.morphAttributes.normal,Zn=!!W.morphAttributes.color,yi=I.toneMapped?d.toneMapping:En,Ai=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,sn=Ai!==void 0?Ai.length:0,Dt=bt.get(I),wi=f.state.lights;if(k===!0&&(O===!0||S!==y)){const be=S===y&&I.id===A;b.setState(I,S,be)}let Yt=!1;I.version===Dt.__version?(Dt.needsLights&&Dt.lightsStateVersion!==wi.state.version||Dt.outputEncoding!==wt||q.isInstancedMesh&&Dt.instancing===!1||!q.isInstancedMesh&&Dt.instancing===!0||q.isSkinnedMesh&&Dt.skinning===!1||!q.isSkinnedMesh&&Dt.skinning===!0||Dt.envMap!==yt||I.fog===!0&&Dt.fog!==dt||Dt.numClippingPlanes!==void 0&&(Dt.numClippingPlanes!==b.numPlanes||Dt.numIntersection!==b.numIntersection)||Dt.vertexAlphas!==Lt||Dt.vertexTangents!==Tt||Dt.morphTargets!==Et||Dt.morphNormals!==Gt||Dt.morphColors!==Zn||Dt.toneMapping!==yi||vt.isWebGL2===!0&&Dt.morphTargetsCount!==sn)&&(Yt=!0):(Yt=!0,Dt.__version=I.version);let Be=Dt.currentProgram;Yt===!0&&(Be=Gr(I,B,q));let Ln=!1,ur=!1,Na=!1;const de=Be.getUniforms(),Kn=Dt.uniforms;if(ct.useProgram(Be.program)&&(Ln=!0,ur=!0,Na=!0),I.id!==A&&(A=I.id,ur=!0),Ln||y!==S){if(de.setValue(Z,"projectionMatrix",S.projectionMatrix),vt.logarithmicDepthBuffer&&de.setValue(Z,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),y!==S&&(y=S,ur=!0,Na=!0),I.isShaderMaterial||I.isMeshPhongMaterial||I.isMeshToonMaterial||I.isMeshStandardMaterial||I.envMap){const be=de.map.cameraPosition;be!==void 0&&be.setValue(Z,Q.setFromMatrixPosition(S.matrixWorld))}(I.isMeshPhongMaterial||I.isMeshToonMaterial||I.isMeshLambertMaterial||I.isMeshBasicMaterial||I.isMeshStandardMaterial||I.isShaderMaterial)&&de.setValue(Z,"isOrthographic",S.isOrthographicCamera===!0),(I.isMeshPhongMaterial||I.isMeshToonMaterial||I.isMeshLambertMaterial||I.isMeshBasicMaterial||I.isMeshStandardMaterial||I.isShaderMaterial||I.isShadowMaterial||q.isSkinnedMesh)&&de.setValue(Z,"viewMatrix",S.matrixWorldInverse)}if(q.isSkinnedMesh){de.setOptional(Z,q,"bindMatrix"),de.setOptional(Z,q,"bindMatrixInverse");const be=q.skeleton;be&&(vt.floatVertexTextures?(be.boneTexture===null&&be.computeBoneTexture(),de.setValue(Z,"boneTexture",be.boneTexture,mt),de.setValue(Z,"boneTextureSize",be.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Ua=W.morphAttributes;if((Ua.position!==void 0||Ua.normal!==void 0||Ua.color!==void 0&&vt.isWebGL2===!0)&&et.update(q,W,I,Be),(ur||Dt.receiveShadow!==q.receiveShadow)&&(Dt.receiveShadow=q.receiveShadow,de.setValue(Z,"receiveShadow",q.receiveShadow)),I.isMeshGouraudMaterial&&I.envMap!==null&&(Kn.envMap.value=yt,Kn.flipEnvMap.value=yt.isCubeTexture&&yt.isRenderTargetTexture===!1?-1:1),ur&&(de.setValue(Z,"toneMappingExposure",d.toneMappingExposure),Dt.needsLights&&Gu(Kn,Na),dt&&I.fog===!0&&mn.refreshFogUniforms(Kn,dt),mn.refreshMaterialUniforms(Kn,I,G,D,U),ma.upload(Z,Dt.uniformsList,Kn,mt)),I.isShaderMaterial&&I.uniformsNeedUpdate===!0&&(ma.upload(Z,Dt.uniformsList,Kn,mt),I.uniformsNeedUpdate=!1),I.isSpriteMaterial&&de.setValue(Z,"center",q.center),de.setValue(Z,"modelViewMatrix",q.modelViewMatrix),de.setValue(Z,"normalMatrix",q.normalMatrix),de.setValue(Z,"modelMatrix",q.matrixWorld),I.isShaderMaterial||I.isRawShaderMaterial){const be=I.uniformsGroups;for(let za=0,Wu=be.length;za<Wu;za++)if(vt.isWebGL2){const Po=be[za];lt.update(Po,Be),lt.bind(Po,Be)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Be}function Gu(S,B){S.ambientLightColor.needsUpdate=B,S.lightProbe.needsUpdate=B,S.directionalLights.needsUpdate=B,S.directionalLightShadows.needsUpdate=B,S.pointLights.needsUpdate=B,S.pointLightShadows.needsUpdate=B,S.spotLights.needsUpdate=B,S.spotLightShadows.needsUpdate=B,S.rectAreaLights.needsUpdate=B,S.hemisphereLights.needsUpdate=B}function Hu(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return _},this.getActiveMipmapLevel=function(){return x},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(S,B,W){bt.get(S.texture).__webglTexture=B,bt.get(S.depthTexture).__webglTexture=W;const I=bt.get(S);I.__hasExternalTextures=!0,I.__hasExternalTextures&&(I.__autoAllocateDepthBuffer=W===void 0,I.__autoAllocateDepthBuffer||gt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),I.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(S,B){const W=bt.get(S);W.__webglFramebuffer=B,W.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(S,B=0,W=0){w=S,_=B,x=W;let I=!0;if(S){const yt=bt.get(S);yt.__useDefaultFramebuffer!==void 0?(ct.bindFramebuffer(36160,null),I=!1):yt.__webglFramebuffer===void 0?mt.setupRenderTarget(S):yt.__hasExternalTextures&&mt.rebindTextures(S,bt.get(S.texture).__webglTexture,bt.get(S.depthTexture).__webglTexture)}let q=null,dt=!1,_t=!1;if(S){const yt=S.texture;(yt.isData3DTexture||yt.isDataArrayTexture)&&(_t=!0);const Lt=bt.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(q=Lt[B],dt=!0):vt.isWebGL2&&S.samples>0&&mt.useMultisampledRTT(S)===!1?q=bt.get(S).__webglMultisampledFramebuffer:q=Lt,T.copy(S.viewport),P.copy(S.scissor),v=S.scissorTest}else T.copy(R).multiplyScalar(G).floor(),P.copy(z).multiplyScalar(G).floor(),v=j;if(ct.bindFramebuffer(36160,q)&&vt.drawBuffers&&I&&ct.drawBuffers(S,q),ct.viewport(T),ct.scissor(P),ct.setScissorTest(v),dt){const yt=bt.get(S.texture);Z.framebufferTexture2D(36160,36064,34069+B,yt.__webglTexture,W)}else if(_t){const yt=bt.get(S.texture),Lt=B||0;Z.framebufferTextureLayer(36160,36064,yt.__webglTexture,W||0,Lt)}A=-1},this.readRenderTargetPixels=function(S,B,W,I,q,dt,_t){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let wt=bt.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&_t!==void 0&&(wt=wt[_t]),wt){ct.bindFramebuffer(36160,wt);try{const yt=S.texture,Lt=yt.format,Tt=yt.type;if(Lt!==cn&&V.convert(Lt)!==Z.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Et=Tt===Sr&&(gt.has("EXT_color_buffer_half_float")||vt.isWebGL2&&gt.has("EXT_color_buffer_float"));if(Tt!==mi&&V.convert(Tt)!==Z.getParameter(35738)&&!(Tt===oi&&(vt.isWebGL2||gt.has("OES_texture_float")||gt.has("WEBGL_color_buffer_float")))&&!Et){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=S.width-I&&W>=0&&W<=S.height-q&&Z.readPixels(B,W,I,q,V.convert(Lt),V.convert(Tt),dt)}finally{const yt=w!==null?bt.get(w).__webglFramebuffer:null;ct.bindFramebuffer(36160,yt)}}},this.copyFramebufferToTexture=function(S,B,W=0){const I=Math.pow(2,-W),q=Math.floor(B.image.width*I),dt=Math.floor(B.image.height*I);mt.setTexture2D(B,0),Z.copyTexSubImage2D(3553,W,0,0,S.x,S.y,q,dt),ct.unbindTexture()},this.copyTextureToTexture=function(S,B,W,I=0){const q=B.image.width,dt=B.image.height,_t=V.convert(W.format),wt=V.convert(W.type);mt.setTexture2D(W,0),Z.pixelStorei(37440,W.flipY),Z.pixelStorei(37441,W.premultiplyAlpha),Z.pixelStorei(3317,W.unpackAlignment),B.isDataTexture?Z.texSubImage2D(3553,I,S.x,S.y,q,dt,_t,wt,B.image.data):B.isCompressedTexture?Z.compressedTexSubImage2D(3553,I,S.x,S.y,B.mipmaps[0].width,B.mipmaps[0].height,_t,B.mipmaps[0].data):Z.texSubImage2D(3553,I,S.x,S.y,_t,wt,B.image),I===0&&W.generateMipmaps&&Z.generateMipmap(3553),ct.unbindTexture()},this.copyTextureToTexture3D=function(S,B,W,I,q=0){if(d.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const dt=S.max.x-S.min.x+1,_t=S.max.y-S.min.y+1,wt=S.max.z-S.min.z+1,yt=V.convert(I.format),Lt=V.convert(I.type);let Tt;if(I.isData3DTexture)mt.setTexture3D(I,0),Tt=32879;else if(I.isDataArrayTexture)mt.setTexture2DArray(I,0),Tt=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}Z.pixelStorei(37440,I.flipY),Z.pixelStorei(37441,I.premultiplyAlpha),Z.pixelStorei(3317,I.unpackAlignment);const Et=Z.getParameter(3314),Gt=Z.getParameter(32878),Zn=Z.getParameter(3316),yi=Z.getParameter(3315),Ai=Z.getParameter(32877),sn=W.isCompressedTexture?W.mipmaps[0]:W.image;Z.pixelStorei(3314,sn.width),Z.pixelStorei(32878,sn.height),Z.pixelStorei(3316,S.min.x),Z.pixelStorei(3315,S.min.y),Z.pixelStorei(32877,S.min.z),W.isDataTexture||W.isData3DTexture?Z.texSubImage3D(Tt,q,B.x,B.y,B.z,dt,_t,wt,yt,Lt,sn.data):W.isCompressedTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),Z.compressedTexSubImage3D(Tt,q,B.x,B.y,B.z,dt,_t,wt,yt,sn.data)):Z.texSubImage3D(Tt,q,B.x,B.y,B.z,dt,_t,wt,yt,Lt,sn),Z.pixelStorei(3314,Et),Z.pixelStorei(32878,Gt),Z.pixelStorei(3316,Zn),Z.pixelStorei(3315,yi),Z.pixelStorei(32877,Ai),q===0&&I.generateMipmaps&&Z.generateMipmap(Tt),ct.unbindTexture()},this.initTexture=function(S){S.isCubeTexture?mt.setTextureCube(S,0):S.isData3DTexture?mt.setTexture3D(S,0):S.isDataArrayTexture?mt.setTexture2DArray(S,0):mt.setTexture2D(S,0),ct.unbindTexture()},this.resetState=function(){_=0,x=0,w=null,ct.reset(),ft.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class Lc extends kg{}Lc.prototype.isWebGL1Renderer=!0;class Vg extends ve{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(t){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=t}}class Rc extends zr{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ut(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Vl=new $t,Us=new ao,ua=new Ra,ha=new F;class Gg extends ve{constructor(t=new pn,e=new Rc){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,r=t.params.Points.threshold,s=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ua.copy(n.boundingSphere),ua.applyMatrix4(i),ua.radius+=r,t.ray.intersectsSphere(ua)===!1)return;Vl.copy(i).invert(),Us.copy(t.ray).applyMatrix4(Vl);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,h=n.attributes.position;if(c!==null){const f=Math.max(0,s.start),m=Math.min(c.count,s.start+s.count);for(let g=f,d=m;g<d;g++){const p=c.getX(g);ha.fromBufferAttribute(h,p),Gl(ha,p,l,i,t,e,this)}}else{const f=Math.max(0,s.start),m=Math.min(h.count,s.start+s.count);for(let g=f,d=m;g<d;g++)ha.fromBufferAttribute(h,g),Gl(ha,g,l,i,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=i.length;r<s;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Gl(o,t,e,n,i,r,s){const a=Us.distanceSqToPoint(o);if(a<e){const l=new F;Us.closestPointToPoint(o,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,object:s})}}class kr extends pn{constructor(t=1,e=32,n=16,i=0,r=Math.PI*2,s=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:r,thetaStart:s,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(s+a,Math.PI);let c=0;const u=[],h=new F,f=new F,m=[],g=[],d=[],p=[];for(let _=0;_<=n;_++){const x=[],w=_/n;let A=0;_==0&&s==0?A=.5/e:_==n&&l==Math.PI&&(A=-.5/e);for(let y=0;y<=e;y++){const T=y/e;h.x=-t*Math.cos(i+T*r)*Math.sin(s+w*a),h.y=t*Math.cos(s+w*a),h.z=t*Math.sin(i+T*r)*Math.sin(s+w*a),g.push(h.x,h.y,h.z),f.copy(h).normalize(),d.push(f.x,f.y,f.z),p.push(T+A,1-w),x.push(c++)}u.push(x)}for(let _=0;_<n;_++)for(let x=0;x<e;x++){const w=u[_][x+1],A=u[_][x],y=u[_+1][x],T=u[_+1][x+1];(_!==0||s>0)&&m.push(w,A,T),(_!==n-1||l<Math.PI)&&m.push(A,y,T)}this.setIndex(m),this.setAttribute("position",new en(g,3)),this.setAttribute("normal",new en(d,3)),this.setAttribute("uv",new en(p,2))}static fromJSON(t){return new kr(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}const Hl={enabled:!1,files:{},add:function(o,t){this.enabled!==!1&&(this.files[o]=t)},get:function(o){if(this.enabled!==!1)return this.files[o]},remove:function(o){delete this.files[o]},clear:function(){this.files={}}};class Hg{constructor(t,e,n){const i=this;let r=!1,s=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(u){a++,r===!1&&i.onStart!==void 0&&i.onStart(u,s,a),r=!0},this.itemEnd=function(u){s++,i.onProgress!==void 0&&i.onProgress(u,s,a),s===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=c.length;h<f;h+=2){const m=c[h],g=c[h+1];if(m.global&&(m.lastIndex=0),m.test(u))return g}return null}}}const Wg=new Hg;class Ic{constructor(t){this.manager=t!==void 0?t:Wg,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(i,r){n.load(t,i,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}class Xg extends Ic{constructor(t){super(t)}load(t,e,n,i){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,s=Hl.get(t);if(s!==void 0)return r.manager.itemStart(t),setTimeout(function(){e&&e(s),r.manager.itemEnd(t)},0),s;const a=Tr("img");function l(){u(),Hl.add(t,this),e&&e(this),r.manager.itemEnd(t)}function c(h){u(),i&&i(h),r.manager.itemError(t),r.manager.itemEnd(t)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(t),a.src=t,a}}class Oc extends Ic{constructor(t){super(t)}load(t,e,n,i){const r=new Ye,s=new Xg(this.manager);return s.setCrossOrigin(this.crossOrigin),s.setPath(this.path),s.load(t,function(a){r.image=a,r.needsUpdate=!0,e!==void 0&&e(r)},n,i),r}}class qg{constructor(t,e,n=0,i=1/0){this.ray=new ao(t,e),this.near=n,this.far=i,this.camera=null,this.layers=new so,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}intersectObject(t,e=!0,n=[]){return zs(t,this,n,e),n.sort(Wl),n}intersectObjects(t,e=!0,n=[]){for(let i=0,r=t.length;i<r;i++)zs(t[i],this,n,e);return n.sort(Wl),n}}function Wl(o,t){return o.distance-t.distance}function zs(o,t,e,n){if(o.layers.test(t.layers)&&o.raycast(t,e),n===!0){const i=o.children;for(let r=0,s=i.length;r<s;r++)zs(i[r],t,e,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ro}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ro);function bn(o){if(o===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return o}function Bc(o,t){o.prototype=Object.create(t.prototype),o.prototype.constructor=o,o.__proto__=t}/*!
 * GSAP 3.11.4
 * https://greensock.com
 *
 * @license Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Le={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},$i={duration:.5,overwrite:!1,delay:0},uo,ue,Kt,Xe=1e8,Bt=1/Xe,ks=Math.PI*2,jg=ks/4,Yg=0,Fc=Math.sqrt,Zg=Math.cos,Kg=Math.sin,ne=function(t){return typeof t=="string"},Wt=function(t){return typeof t=="function"},Cn=function(t){return typeof t=="number"},ho=function(t){return typeof t>"u"},dn=function(t){return typeof t=="object"},xe=function(t){return t!==!1},Nc=function(){return typeof window<"u"},fa=function(t){return Wt(t)||ne(t)},Uc=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},he=Array.isArray,Vs=/(?:-?\.?\d|\.)+/gi,zc=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Vi=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,vs=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,kc=/[+-]=-?[.\d]+/,Vc=/[^,'"\[\]\s]+/gi,Qg=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,zt,Ue,Gs,fo,Re={},ya={},Gc,Hc=function(t){return(ya=vi(t,Re))&&Ie},po=function(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")},Aa=function(t,e){return!e&&console.warn(t)},Wc=function(t,e){return t&&(Re[t]=e)&&ya&&(ya[t]=e)||Re},Er=function(){return 0},Jg={suppressEvents:!0,isStart:!0,kill:!1},ga={suppressEvents:!0,kill:!1},$g={suppressEvents:!0},mo={},Wn=[],Hs={},Xc,Ee={},xs={},Xl=30,_a=[],go="",_o=function(t){var e=t[0],n,i;if(dn(e)||Wt(e)||(t=[t]),!(n=(e._gsap||{}).harness)){for(i=_a.length;i--&&!_a[i].targetTest(e););n=_a[i]}for(i=t.length;i--;)t[i]&&(t[i]._gsap||(t[i]._gsap=new du(t[i],n)))||t.splice(i,1);return t},fi=function(t){return t._gsap||_o(qe(t))[0]._gsap},qc=function(t,e,n){return(n=t[e])&&Wt(n)?t[e]():ho(n)&&t.getAttribute&&t.getAttribute(e)||n},ye=function(t,e){return(t=t.split(",")).forEach(e)||t},jt=function(t){return Math.round(t*1e5)/1e5||0},ae=function(t){return Math.round(t*1e7)/1e7||0},Xi=function(t,e){var n=e.charAt(0),i=parseFloat(e.substr(2));return t=parseFloat(t),n==="+"?t+i:n==="-"?t-i:n==="*"?t*i:t/i},t0=function(t,e){for(var n=e.length,i=0;t.indexOf(e[i])<0&&++i<n;);return i<n},wa=function(){var t=Wn.length,e=Wn.slice(0),n,i;for(Hs={},Wn.length=0,n=0;n<t;n++)i=e[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},jc=function(t,e,n,i){Wn.length&&!ue&&wa(),t.render(e,n,i||ue&&e<0&&(t._initted||t._startAt)),Wn.length&&!ue&&wa()},Yc=function(t){var e=parseFloat(t);return(e||e===0)&&(t+"").match(Vc).length<2?e:ne(t)?t.trim():t},Zc=function(t){return t},Ze=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},e0=function(t){return function(e,n){for(var i in n)i in e||i==="duration"&&t||i==="ease"||(e[i]=n[i])}},vi=function(t,e){for(var n in e)t[n]=e[n];return t},ql=function o(t,e){for(var n in e)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(t[n]=dn(e[n])?o(t[n]||(t[n]={}),e[n]):e[n]);return t},ba=function(t,e){var n={},i;for(i in t)i in e||(n[i]=t[i]);return n},wr=function(t){var e=t.parent||zt,n=t.keyframes?e0(he(t.keyframes)):Ze;if(xe(t.inherit))for(;e;)n(t,e.vars.defaults),e=e.parent||e._dp;return t},n0=function(t,e){for(var n=t.length,i=n===e.length;i&&n--&&t[n]===e[n];);return n<0},Kc=function(t,e,n,i,r){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=t[i],a;if(r)for(a=e[r];s&&s[r]>a;)s=s._prev;return s?(e._next=s._next,s._next=e):(e._next=t[n],t[n]=e),e._next?e._next._prev=e:t[i]=e,e._prev=s,e.parent=e._dp=t,e},Oa=function(t,e,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var r=e._prev,s=e._next;r?r._next=s:t[n]===e&&(t[n]=s),s?s._prev=r:t[i]===e&&(t[i]=r),e._next=e._prev=e.parent=null},qn=function(t,e){t.parent&&(!e||t.parent.autoRemoveChildren)&&t.parent.remove(t),t._act=0},di=function(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(var n=t;n;)n._dirty=1,n=n.parent;return t},i0=function(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t},Ws=function(t,e,n,i){return t._startAt&&(ue?t._startAt.revert(ga):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(e,!0,i))},r0=function o(t){return!t||t._ts&&o(t.parent)},jl=function(t){return t._repeat?tr(t._tTime,t=t.duration()+t._rDelay)*t:0},tr=function(t,e){var n=Math.floor(t/=e);return t&&n===t?n-1:n},Ma=function(t,e){return(t-e._start)*e._ts+(e._ts>=0?0:e._dirty?e.totalDuration():e._tDur)},Ba=function(t){return t._end=ae(t._start+(t._tDur/Math.abs(t._ts||t._rts||Bt)||0))},Fa=function(t,e){var n=t._dp;return n&&n.smoothChildTiming&&t._ts&&(t._start=ae(n._time-(t._ts>0?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),Ba(t),n._dirty||di(n,t)),t},Qc=function(t,e){var n;if((e._time||e._initted&&!e._dur)&&(n=Ma(t.rawTime(),e),(!e._dur||Vr(0,e.totalDuration(),n)-e._tTime>Bt)&&e.render(n,!0)),di(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(n=t;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;t._zTime=-Bt}},ln=function(t,e,n,i){return e.parent&&qn(e),e._start=ae((Cn(n)?n:n||t!==zt?Ne(t,n,e):t._time)+e._delay),e._end=ae(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),Kc(t,e,"_first","_last",t._sort?"_start":0),Xs(e)||(t._recent=e),i||Qc(t,e),t._ts<0&&Fa(t,t._tTime),t},Jc=function(t,e){return(Re.ScrollTrigger||po("scrollTrigger",e))&&Re.ScrollTrigger.create(e,t)},$c=function(t,e,n,i,r){if(xo(t,e,r),!t._initted)return 1;if(!n&&t._pt&&!ue&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&Xc!==Pe.frame)return Wn.push(t),t._lazy=[r,i],1},a0=function o(t){var e=t.parent;return e&&e._ts&&e._initted&&!e._lock&&(e.rawTime()<0||o(e))},Xs=function(t){var e=t.data;return e==="isFromStart"||e==="isStart"},s0=function(t,e,n,i){var r=t.ratio,s=e<0||!e&&(!t._start&&a0(t)&&!(!t._initted&&Xs(t))||(t._ts<0||t._dp._ts<0)&&!Xs(t))?0:1,a=t._rDelay,l=0,c,u,h;if(a&&t._repeat&&(l=Vr(0,t._tDur,e),u=tr(l,a),t._yoyo&&u&1&&(s=1-s),u!==tr(t._tTime,a)&&(r=1-s,t.vars.repeatRefresh&&t._initted&&t.invalidate())),s!==r||ue||i||t._zTime===Bt||!e&&t._zTime){if(!t._initted&&$c(t,e,i,n,l))return;for(h=t._zTime,t._zTime=e||(n?Bt:0),n||(n=e&&!h),t.ratio=s,t._from&&(s=1-s),t._time=0,t._tTime=l,c=t._pt;c;)c.r(s,c.d),c=c._next;e<0&&Ws(t,e,n,!0),t._onUpdate&&!n&&je(t,"onUpdate"),l&&t._repeat&&!n&&t.parent&&je(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===s&&(s&&qn(t,1),!n&&!ue&&(je(t,s?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)},o0=function(t,e,n){var i;if(n>e)for(i=t._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>e)return i;i=i._next}else for(i=t._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<e)return i;i=i._prev}},er=function(t,e,n,i){var r=t._repeat,s=ae(e)||0,a=t._tTime/t._tDur;return a&&!i&&(t._time*=s/t._dur),t._dur=s,t._tDur=r?r<0?1e10:ae(s*(r+1)+t._rDelay*r):s,a>0&&!i&&Fa(t,t._tTime=t._tDur*a),t.parent&&Ba(t),n||di(t.parent,t),t},Yl=function(t){return t instanceof _e?di(t):er(t,t._dur)},l0={_start:0,endTime:Er,totalDuration:Er},Ne=function o(t,e,n){var i=t.labels,r=t._recent||l0,s=t.duration()>=Xe?r.endTime(!1):t._dur,a,l,c;return ne(e)&&(isNaN(e)||e in i)?(l=e.charAt(0),c=e.substr(-1)==="%",a=e.indexOf("="),l==="<"||l===">"?(a>=0&&(e=e.replace(/=/,"")),(l==="<"?r._start:r.endTime(r._repeat>=0))+(parseFloat(e.substr(1))||0)*(c?(a<0?r:n).totalDuration()/100:1)):a<0?(e in i||(i[e]=s),i[e]):(l=parseFloat(e.charAt(a-1)+e.substr(a+1)),c&&n&&(l=l/100*(he(n)?n[0]:n).totalDuration()),a>1?o(t,e.substr(0,a-1),n)+l:s+l)):e==null?s:+e},br=function(t,e,n){var i=Cn(e[1]),r=(i?2:1)+(t<2?0:1),s=e[r],a,l;if(i&&(s.duration=e[1]),s.parent=n,t){for(a=s,l=n;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=xe(l.vars.inherit)&&l.parent;s.immediateRender=xe(a.immediateRender),t<2?s.runBackwards=1:s.startAt=e[r-1]}return new Jt(e[0],s,e[r+1])},Yn=function(t,e){return t||t===0?e(t):e},Vr=function(t,e,n){return n<t?t:n>e?e:n},ce=function(t,e){return!ne(t)||!(e=Qg.exec(t))?"":e[1]},c0=function(t,e,n){return Yn(n,function(i){return Vr(t,e,i)})},qs=[].slice,tu=function(t,e){return t&&dn(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&dn(t[0]))&&!t.nodeType&&t!==Ue},u0=function(t,e,n){return n===void 0&&(n=[]),t.forEach(function(i){var r;return ne(i)&&!e||tu(i,1)?(r=n).push.apply(r,qe(i)):n.push(i)})||n},qe=function(t,e,n){return Kt&&!e&&Kt.selector?Kt.selector(t):ne(t)&&!n&&(Gs||!nr())?qs.call((e||fo).querySelectorAll(t),0):he(t)?u0(t,n):tu(t)?qs.call(t,0):t?[t]:[]},js=function(t){return t=qe(t)[0]||Aa("Invalid scope")||{},function(e){var n=t.current||t.nativeElement||t;return qe(e,n.querySelectorAll?n:n===t?Aa("Invalid scope")||fo.createElement("div"):t)}},eu=function(t){return t.sort(function(){return .5-Math.random()})},nu=function(t){if(Wt(t))return t;var e=dn(t)?t:{each:t},n=pi(e.ease),i=e.from||0,r=parseFloat(e.base)||0,s={},a=i>0&&i<1,l=isNaN(i)||a,c=e.axis,u=i,h=i;return ne(i)?u=h={center:.5,edges:.5,end:1}[i]||0:!a&&l&&(u=i[0],h=i[1]),function(f,m,g){var d=(g||e).length,p=s[d],_,x,w,A,y,T,P,v,M;if(!p){if(M=e.grid==="auto"?0:(e.grid||[1,Xe])[1],!M){for(P=-Xe;P<(P=g[M++].getBoundingClientRect().left)&&M<d;);M--}for(p=s[d]=[],_=l?Math.min(M,d)*u-.5:i%M,x=M===Xe?0:l?d*h/M-.5:i/M|0,P=0,v=Xe,T=0;T<d;T++)w=T%M-_,A=x-(T/M|0),p[T]=y=c?Math.abs(c==="y"?A:w):Fc(w*w+A*A),y>P&&(P=y),y<v&&(v=y);i==="random"&&eu(p),p.max=P-v,p.min=v,p.v=d=(parseFloat(e.amount)||parseFloat(e.each)*(M>d?d-1:c?c==="y"?d/M:M:Math.max(M,d/M))||0)*(i==="edges"?-1:1),p.b=d<0?r-d:r,p.u=ce(e.amount||e.each)||0,n=n&&d<0?uu(n):n}return d=(p[f]-p.min)/p.max||0,ae(p.b+(n?n(d):d)*p.v)+p.u}},Ys=function(t){var e=Math.pow(10,((t+"").split(".")[1]||"").length);return function(n){var i=ae(Math.round(parseFloat(n)/t)*t*e);return(i-i%1)/e+(Cn(n)?0:ce(n))}},iu=function(t,e){var n=he(t),i,r;return!n&&dn(t)&&(i=n=t.radius||Xe,t.values?(t=qe(t.values),(r=!Cn(t[0]))&&(i*=i)):t=Ys(t.increment)),Yn(e,n?Wt(t)?function(s){return r=t(s),Math.abs(r-s)<=i?r:s}:function(s){for(var a=parseFloat(r?s.x:s),l=parseFloat(r?s.y:0),c=Xe,u=0,h=t.length,f,m;h--;)r?(f=t[h].x-a,m=t[h].y-l,f=f*f+m*m):f=Math.abs(t[h]-a),f<c&&(c=f,u=h);return u=!i||c<=i?t[u]:s,r||u===s||Cn(s)?u:u+ce(s)}:Ys(t))},ru=function(t,e,n,i){return Yn(he(t)?!e:n===!0?!!(n=0):!i,function(){return he(t)?t[~~(Math.random()*t.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((t-n/2+Math.random()*(e-t+n*.99))/n)*n*i)/i})},h0=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(i){return e.reduce(function(r,s){return s(r)},i)}},f0=function(t,e){return function(n){return t(parseFloat(n))+(e||ce(n))}},d0=function(t,e,n){return su(t,e,0,1,n)},au=function(t,e,n){return Yn(n,function(i){return t[~~e(i)]})},p0=function o(t,e,n){var i=e-t;return he(t)?au(t,o(0,t.length),e):Yn(n,function(r){return(i+(r-t)%i)%i+t})},m0=function o(t,e,n){var i=e-t,r=i*2;return he(t)?au(t,o(0,t.length-1),e):Yn(n,function(s){return s=(r+(s-t)%r)%r||0,t+(s>i?r-s:s)})},Cr=function(t){for(var e=0,n="",i,r,s,a;~(i=t.indexOf("random(",e));)s=t.indexOf(")",i),a=t.charAt(i+7)==="[",r=t.substr(i+7,s-i-7).match(a?Vc:Vs),n+=t.substr(e,i-e)+ru(a?r:+r[0],a?0:+r[1],+r[2]||1e-5),e=s+1;return n+t.substr(e,t.length-e)},su=function(t,e,n,i,r){var s=e-t,a=i-n;return Yn(r,function(l){return n+((l-t)/s*a||0)})},g0=function o(t,e,n,i){var r=isNaN(t+e)?0:function(m){return(1-m)*t+m*e};if(!r){var s=ne(t),a={},l,c,u,h,f;if(n===!0&&(i=1)&&(n=null),s)t={p:t},e={p:e};else if(he(t)&&!he(e)){for(u=[],h=t.length,f=h-2,c=1;c<h;c++)u.push(o(t[c-1],t[c]));h--,r=function(g){g*=h;var d=Math.min(f,~~g);return u[d](g-d)},n=e}else i||(t=vi(he(t)?[]:{},t));if(!u){for(l in e)vo.call(a,t,l,"get",e[l]);r=function(g){return wo(g,a)||(s?t.p:t)}}}return Yn(n,r)},Zl=function(t,e,n){var i=t.labels,r=Xe,s,a,l;for(s in i)a=i[s]-e,a<0==!!n&&a&&r>(a=Math.abs(a))&&(l=s,r=a);return l},je=function(t,e,n){var i=t.vars,r=i[e],s=Kt,a=t._ctx,l,c,u;if(!!r)return l=i[e+"Params"],c=i.callbackScope||t,n&&Wn.length&&wa(),a&&(Kt=a),u=l?r.apply(c,l):r.call(c),Kt=s,u},vr=function(t){return qn(t),t.scrollTrigger&&t.scrollTrigger.kill(!!ue),t.progress()<1&&je(t,"onInterrupt"),t},Gi,_0=function(t){t=!t.name&&t.default||t;var e=t.name,n=Wt(t),i=e&&!n&&t.init?function(){this._props=[]}:t,r={init:Er,render:wo,add:vo,kill:I0,modifier:R0,rawVars:0},s={targetTest:0,get:0,getSetter:Ao,aliases:{},register:0};if(nr(),t!==i){if(Ee[e])return;Ze(i,Ze(ba(t,r),s)),vi(i.prototype,vi(r,ba(t,s))),Ee[i.prop=e]=i,t.targetTest&&(_a.push(i),mo[e]=1),e=(e==="css"?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}Wc(e,i),t.register&&t.register(Ie,i,Ae)},Ot=255,xr={aqua:[0,Ot,Ot],lime:[0,Ot,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Ot],navy:[0,0,128],white:[Ot,Ot,Ot],olive:[128,128,0],yellow:[Ot,Ot,0],orange:[Ot,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Ot,0,0],pink:[Ot,192,203],cyan:[0,Ot,Ot],transparent:[Ot,Ot,Ot,0]},ys=function(t,e,n){return t+=t<0?1:t>1?-1:0,(t*6<1?e+(n-e)*t*6:t<.5?n:t*3<2?e+(n-e)*(2/3-t)*6:e)*Ot+.5|0},ou=function(t,e,n){var i=t?Cn(t)?[t>>16,t>>8&Ot,t&Ot]:0:xr.black,r,s,a,l,c,u,h,f,m,g;if(!i){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),xr[t])i=xr[t];else if(t.charAt(0)==="#"){if(t.length<6&&(r=t.charAt(1),s=t.charAt(2),a=t.charAt(3),t="#"+r+r+s+s+a+a+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return i=parseInt(t.substr(1,6),16),[i>>16,i>>8&Ot,i&Ot,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),i=[t>>16,t>>8&Ot,t&Ot]}else if(t.substr(0,3)==="hsl"){if(i=g=t.match(Vs),!e)l=+i[0]%360/360,c=+i[1]/100,u=+i[2]/100,s=u<=.5?u*(c+1):u+c-u*c,r=u*2-s,i.length>3&&(i[3]*=1),i[0]=ys(l+1/3,r,s),i[1]=ys(l,r,s),i[2]=ys(l-1/3,r,s);else if(~t.indexOf("="))return i=t.match(zc),n&&i.length<4&&(i[3]=1),i}else i=t.match(Vs)||xr.transparent;i=i.map(Number)}return e&&!g&&(r=i[0]/Ot,s=i[1]/Ot,a=i[2]/Ot,h=Math.max(r,s,a),f=Math.min(r,s,a),u=(h+f)/2,h===f?l=c=0:(m=h-f,c=u>.5?m/(2-h-f):m/(h+f),l=h===r?(s-a)/m+(s<a?6:0):h===s?(a-r)/m+2:(r-s)/m+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(u*100+.5)),n&&i.length<4&&(i[3]=1),i},lu=function(t){var e=[],n=[],i=-1;return t.split(Xn).forEach(function(r){var s=r.match(Vi)||[];e.push.apply(e,s),n.push(i+=s.length+1)}),e.c=n,e},Kl=function(t,e,n){var i="",r=(t+i).match(Xn),s=e?"hsla(":"rgba(",a=0,l,c,u,h;if(!r)return t;if(r=r.map(function(f){return(f=ou(f,e,1))&&s+(e?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),n&&(u=lu(t),l=n.c,l.join(i)!==u.c.join(i)))for(c=t.replace(Xn,"1").split(Vi),h=c.length-1;a<h;a++)i+=c[a]+(~l.indexOf(a)?r.shift()||s+"0,0,0,0)":(u.length?u:r.length?r:n).shift());if(!c)for(c=t.split(Xn),h=c.length-1;a<h;a++)i+=c[a]+r[a];return i+c[h]},Xn=function(){var o="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in xr)o+="|"+t+"\\b";return new RegExp(o+")","gi")}(),v0=/hsl[a]?\(/,cu=function(t){var e=t.join(" "),n;if(Xn.lastIndex=0,Xn.test(e))return n=v0.test(e),t[1]=Kl(t[1],n),t[0]=Kl(t[0],n,lu(t[1])),!0},Pr,Pe=function(){var o=Date.now,t=500,e=33,n=o(),i=n,r=1e3/240,s=r,a=[],l,c,u,h,f,m,g=function d(p){var _=o()-i,x=p===!0,w,A,y,T;if(_>t&&(n+=_-e),i+=_,y=i-n,w=y-s,(w>0||x)&&(T=++h.frame,f=y-h.time*1e3,h.time=y=y/1e3,s+=w+(w>=r?4:r-w),A=1),x||(l=c(d)),A)for(m=0;m<a.length;m++)a[m](y,f,T,p)};return h={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(p){return f/(1e3/(p||60))},wake:function(){Gc&&(!Gs&&Nc()&&(Ue=Gs=window,fo=Ue.document||{},Re.gsap=Ie,(Ue.gsapVersions||(Ue.gsapVersions=[])).push(Ie.version),Hc(ya||Ue.GreenSockGlobals||!Ue.gsap&&Ue||{}),u=Ue.requestAnimationFrame),l&&h.sleep(),c=u||function(p){return setTimeout(p,s-h.time*1e3+1|0)},Pr=1,g(2))},sleep:function(){(u?Ue.cancelAnimationFrame:clearTimeout)(l),Pr=0,c=Er},lagSmoothing:function(p,_){t=p||1/0,e=Math.min(_||33,t)},fps:function(p){r=1e3/(p||240),s=h.time*1e3+r},add:function(p,_,x){var w=_?function(A,y,T,P){p(A,y,T,P),h.remove(w)}:p;return h.remove(p),a[x?"unshift":"push"](w),nr(),w},remove:function(p,_){~(_=a.indexOf(p))&&a.splice(_,1)&&m>=_&&m--},_listeners:a},h}(),nr=function(){return!Pr&&Pe.wake()},St={},x0=/^[\d.\-M][\d.\-,\s]/,y0=/["']/g,A0=function(t){for(var e={},n=t.substr(1,t.length-3).split(":"),i=n[0],r=1,s=n.length,a,l,c;r<s;r++)l=n[r],a=r!==s-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),e[i]=isNaN(c)?c.replace(y0,"").trim():+c,i=l.substr(a+1).trim();return e},w0=function(t){var e=t.indexOf("(")+1,n=t.indexOf(")"),i=t.indexOf("(",e);return t.substring(e,~i&&i<n?t.indexOf(")",n+1):n)},b0=function(t){var e=(t+"").split("("),n=St[e[0]];return n&&e.length>1&&n.config?n.config.apply(null,~t.indexOf("{")?[A0(e[1])]:w0(t).split(",").map(Yc)):St._CE&&x0.test(t)?St._CE("",t):n},uu=function(t){return function(e){return 1-t(1-e)}},hu=function o(t,e){for(var n=t._first,i;n;)n instanceof _e?o(n,e):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==e&&(n.timeline?o(n.timeline,e):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=e)),n=n._next},pi=function(t,e){return t&&(Wt(t)?t:St[t]||b0(t))||e},xi=function(t,e,n,i){n===void 0&&(n=function(l){return 1-e(1-l)}),i===void 0&&(i=function(l){return l<.5?e(l*2)/2:1-e((1-l)*2)/2});var r={easeIn:e,easeOut:n,easeInOut:i},s;return ye(t,function(a){St[a]=Re[a]=r,St[s=a.toLowerCase()]=n;for(var l in r)St[s+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=St[a+"."+l]=r[l]}),r},fu=function(t){return function(e){return e<.5?(1-t(1-e*2))/2:.5+t((e-.5)*2)/2}},As=function o(t,e,n){var i=e>=1?e:1,r=(n||(t?.3:.45))/(e<1?e:1),s=r/ks*(Math.asin(1/i)||0),a=function(u){return u===1?1:i*Math.pow(2,-10*u)*Kg((u-s)*r)+1},l=t==="out"?a:t==="in"?function(c){return 1-a(1-c)}:fu(a);return r=ks/r,l.config=function(c,u){return o(t,c,u)},l},ws=function o(t,e){e===void 0&&(e=1.70158);var n=function(s){return s?--s*s*((e+1)*s+e)+1:0},i=t==="out"?n:t==="in"?function(r){return 1-n(1-r)}:fu(n);return i.config=function(r){return o(t,r)},i};ye("Linear,Quad,Cubic,Quart,Quint,Strong",function(o,t){var e=t<5?t+1:t;xi(o+",Power"+(e-1),t?function(n){return Math.pow(n,e)}:function(n){return n},function(n){return 1-Math.pow(1-n,e)},function(n){return n<.5?Math.pow(n*2,e)/2:1-Math.pow((1-n)*2,e)/2})});St.Linear.easeNone=St.none=St.Linear.easeIn;xi("Elastic",As("in"),As("out"),As());(function(o,t){var e=1/t,n=2*e,i=2.5*e,r=function(a){return a<e?o*a*a:a<n?o*Math.pow(a-1.5/t,2)+.75:a<i?o*(a-=2.25/t)*a+.9375:o*Math.pow(a-2.625/t,2)+.984375};xi("Bounce",function(s){return 1-r(1-s)},r)})(7.5625,2.75);xi("Expo",function(o){return o?Math.pow(2,10*(o-1)):0});xi("Circ",function(o){return-(Fc(1-o*o)-1)});xi("Sine",function(o){return o===1?1:-Zg(o*jg)+1});xi("Back",ws("in"),ws("out"),ws());St.SteppedEase=St.steps=Re.SteppedEase={config:function(t,e){t===void 0&&(t=1);var n=1/t,i=t+(e?0:1),r=e?1:0,s=1-Bt;return function(a){return((i*Vr(0,s,a)|0)+r)*n}}};$i.ease=St["quad.out"];ye("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(o){return go+=o+","+o+"Params,"});var du=function(t,e){this.id=Yg++,t._gsap=this,this.target=t,this.harness=e,this.get=e?e.get:qc,this.set=e?e.getSetter:Ao},ir=function(){function o(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,er(this,+e.duration,1,1),this.data=e.data,Kt&&(this._ctx=Kt,Kt.data.push(this)),Pr||Pe.wake()}var t=o.prototype;return t.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},t.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},t.totalDuration=function(n){return arguments.length?(this._dirty=0,er(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(n,i){if(nr(),!arguments.length)return this._tTime;var r=this._dp;if(r&&r.smoothChildTiming&&this._ts){for(Fa(this,n),!r._dp||r.parent||Qc(r,this);r&&r.parent;)r.parent._time!==r._start+(r._ts>=0?r._tTime/r._ts:(r.totalDuration()-r._tTime)/-r._ts)&&r.totalTime(r._tTime,!0),r=r.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&ln(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===Bt||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),jc(this,n,i)),this},t.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+jl(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},t.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.ratio},t.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+jl(this),i):this.duration()?Math.min(1,this._time/this._dur):this.ratio},t.iteration=function(n,i){var r=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*r,i):this._repeat?tr(this._tTime,r)+1:1},t.timeScale=function(n){if(!arguments.length)return this._rts===-Bt?0:this._rts;if(this._rts===n)return this;var i=this.parent&&this._ts?Ma(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-Bt?0:this._rts,this.totalTime(Vr(-this._delay,this._tDur,i),!0),Ba(this),i0(this)},t.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(nr(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Bt&&(this._tTime-=Bt)))),this):this._ps},t.startTime=function(n){if(arguments.length){this._start=n;var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&ln(i,this,n-this._delay),this}return this._start},t.endTime=function(n){return this._start+(xe(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Ma(i.rawTime(n),this):this._tTime:this._tTime},t.revert=function(n){n===void 0&&(n=$g);var i=ue;return ue=n,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),ue=i,this},t.globalTime=function(n){for(var i=this,r=arguments.length?n:i.rawTime();i;)r=i._start+r/(i._ts||1),i=i._dp;return!this.parent&&this._sat?this._sat.vars.immediateRender?-1:this._sat.globalTime(n):r},t.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Yl(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,Yl(this),i?this.time(i):this}return this._rDelay},t.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},t.seek=function(n,i){return this.totalTime(Ne(this,n),xe(i))},t.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,xe(i))},t.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},t.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},t.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-Bt:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-Bt,this},t.isActive=function(){var n=this.parent||this._dp,i=this._start,r;return!!(!n||this._ts&&this._initted&&n.isActive()&&(r=n.rawTime(!0))>=i&&r<this.endTime(!0)-Bt)},t.eventCallback=function(n,i,r){var s=this.vars;return arguments.length>1?(i?(s[n]=i,r&&(s[n+"Params"]=r),n==="onUpdate"&&(this._onUpdate=i)):delete s[n],this):s[n]},t.then=function(n){var i=this;return new Promise(function(r){var s=Wt(n)?n:Zc,a=function(){var c=i.then;i.then=null,Wt(s)&&(s=s(i))&&(s.then||s===i)&&(i.then=c),r(s),i.then=c};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?a():i._prom=a})},t.kill=function(){vr(this)},o}();Ze(ir.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Bt,_prom:0,_ps:!1,_rts:1});var _e=function(o){Bc(t,o);function t(n,i){var r;return n===void 0&&(n={}),r=o.call(this,n)||this,r.labels={},r.smoothChildTiming=!!n.smoothChildTiming,r.autoRemoveChildren=!!n.autoRemoveChildren,r._sort=xe(n.sortChildren),zt&&ln(n.parent||zt,bn(r),i),n.reversed&&r.reverse(),n.paused&&r.paused(!0),n.scrollTrigger&&Jc(bn(r),n.scrollTrigger),r}var e=t.prototype;return e.to=function(i,r,s){return br(0,arguments,this),this},e.from=function(i,r,s){return br(1,arguments,this),this},e.fromTo=function(i,r,s,a){return br(2,arguments,this),this},e.set=function(i,r,s){return r.duration=0,r.parent=this,wr(r).repeatDelay||(r.repeat=0),r.immediateRender=!!r.immediateRender,new Jt(i,r,Ne(this,s),1),this},e.call=function(i,r,s){return ln(this,Jt.delayedCall(0,i,r),s)},e.staggerTo=function(i,r,s,a,l,c,u){return s.duration=r,s.stagger=s.stagger||a,s.onComplete=c,s.onCompleteParams=u,s.parent=this,new Jt(i,s,Ne(this,l)),this},e.staggerFrom=function(i,r,s,a,l,c,u){return s.runBackwards=1,wr(s).immediateRender=xe(s.immediateRender),this.staggerTo(i,r,s,a,l,c,u)},e.staggerFromTo=function(i,r,s,a,l,c,u,h){return a.startAt=s,wr(a).immediateRender=xe(a.immediateRender),this.staggerTo(i,r,a,l,c,u,h)},e.render=function(i,r,s){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=i<=0?0:ae(i),h=this._zTime<0!=i<0&&(this._initted||!c),f,m,g,d,p,_,x,w,A,y,T,P;if(this!==zt&&u>l&&i>=0&&(u=l),u!==this._tTime||s||h){if(a!==this._time&&c&&(u+=this._time-a,i+=this._time-a),f=u,A=this._start,w=this._ts,_=!w,h&&(c||(a=this._zTime),(i||!r)&&(this._zTime=i)),this._repeat){if(T=this._yoyo,p=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(p*100+i,r,s);if(f=ae(u%p),u===l?(d=this._repeat,f=c):(d=~~(u/p),d&&d===u/p&&(f=c,d--),f>c&&(f=c)),y=tr(this._tTime,p),!a&&this._tTime&&y!==d&&(y=d),T&&d&1&&(f=c-f,P=1),d!==y&&!this._lock){var v=T&&y&1,M=v===(T&&d&1);if(d<y&&(v=!v),a=v?0:c,this._lock=1,this.render(a||(P?0:ae(d*p)),r,!c)._lock=0,this._tTime=u,!r&&this.parent&&je(this,"onRepeat"),this.vars.repeatRefresh&&!P&&(this.invalidate()._lock=1),a&&a!==this._time||_!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,M&&(this._lock=2,a=v?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!P&&this.invalidate()),this._lock=0,!this._ts&&!_)return this;hu(this,P)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(x=o0(this,ae(a),ae(f)),x&&(u-=f-(f=x._start))),this._tTime=u,this._time=f,this._act=!w,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,a=0),!a&&f&&!r&&(je(this,"onStart"),this._tTime!==u))return this;if(f>=a&&i>=0)for(m=this._first;m;){if(g=m._next,(m._act||f>=m._start)&&m._ts&&x!==m){if(m.parent!==this)return this.render(i,r,s);if(m.render(m._ts>0?(f-m._start)*m._ts:(m._dirty?m.totalDuration():m._tDur)+(f-m._start)*m._ts,r,s),f!==this._time||!this._ts&&!_){x=0,g&&(u+=this._zTime=-Bt);break}}m=g}else{m=this._last;for(var D=i<0?i:f;m;){if(g=m._prev,(m._act||D<=m._end)&&m._ts&&x!==m){if(m.parent!==this)return this.render(i,r,s);if(m.render(m._ts>0?(D-m._start)*m._ts:(m._dirty?m.totalDuration():m._tDur)+(D-m._start)*m._ts,r,s||ue&&(m._initted||m._startAt)),f!==this._time||!this._ts&&!_){x=0,g&&(u+=this._zTime=D?-Bt:Bt);break}}m=g}}if(x&&!r&&(this.pause(),x.render(f>=a?0:-Bt)._zTime=f>=a?1:-1,this._ts))return this._start=A,Ba(this),this.render(i,r,s);this._onUpdate&&!r&&je(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&a)&&(A===this._start||Math.abs(w)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&qn(this,1),!r&&!(i<0&&!a)&&(u||a||!l)&&(je(this,u===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},e.add=function(i,r){var s=this;if(Cn(r)||(r=Ne(this,r,i)),!(i instanceof ir)){if(he(i))return i.forEach(function(a){return s.add(a,r)}),this;if(ne(i))return this.addLabel(i,r);if(Wt(i))i=Jt.delayedCall(0,i);else return this}return this!==i?ln(this,i,r):this},e.getChildren=function(i,r,s,a){i===void 0&&(i=!0),r===void 0&&(r=!0),s===void 0&&(s=!0),a===void 0&&(a=-Xe);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof Jt?r&&l.push(c):(s&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,r,s)))),c=c._next;return l},e.getById=function(i){for(var r=this.getChildren(1,1,1),s=r.length;s--;)if(r[s].vars.id===i)return r[s]},e.remove=function(i){return ne(i)?this.removeLabel(i):Wt(i)?this.killTweensOf(i):(Oa(this,i),i===this._recent&&(this._recent=this._last),di(this))},e.totalTime=function(i,r){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=ae(Pe.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),o.prototype.totalTime.call(this,i,r),this._forcing=0,this):this._tTime},e.addLabel=function(i,r){return this.labels[i]=Ne(this,r),this},e.removeLabel=function(i){return delete this.labels[i],this},e.addPause=function(i,r,s){var a=Jt.delayedCall(0,r||Er,s);return a.data="isPause",this._hasPause=1,ln(this,a,Ne(this,i))},e.removePause=function(i){var r=this._first;for(i=Ne(this,i);r;)r._start===i&&r.data==="isPause"&&qn(r),r=r._next},e.killTweensOf=function(i,r,s){for(var a=this.getTweensOf(i,s),l=a.length;l--;)kn!==a[l]&&a[l].kill(i,r);return this},e.getTweensOf=function(i,r){for(var s=[],a=qe(i),l=this._first,c=Cn(r),u;l;)l instanceof Jt?t0(l._targets,a)&&(c?(!kn||l._initted&&l._ts)&&l.globalTime(0)<=r&&l.globalTime(l.totalDuration())>r:!r||l.isActive())&&s.push(l):(u=l.getTweensOf(a,r)).length&&s.push.apply(s,u),l=l._next;return s},e.tweenTo=function(i,r){r=r||{};var s=this,a=Ne(s,i),l=r,c=l.startAt,u=l.onStart,h=l.onStartParams,f=l.immediateRender,m,g=Jt.to(s,Ze({ease:r.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:r.duration||Math.abs((a-(c&&"time"in c?c.time:s._time))/s.timeScale())||Bt,onStart:function(){if(s.pause(),!m){var p=r.duration||Math.abs((a-(c&&"time"in c?c.time:s._time))/s.timeScale());g._dur!==p&&er(g,p,0,1).render(g._time,!0,!0),m=1}u&&u.apply(g,h||[])}},r));return f?g.render(0):g},e.tweenFromTo=function(i,r,s){return this.tweenTo(r,Ze({startAt:{time:Ne(this,i)}},s))},e.recent=function(){return this._recent},e.nextLabel=function(i){return i===void 0&&(i=this._time),Zl(this,Ne(this,i))},e.previousLabel=function(i){return i===void 0&&(i=this._time),Zl(this,Ne(this,i),1)},e.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+Bt)},e.shiftChildren=function(i,r,s){s===void 0&&(s=0);for(var a=this._first,l=this.labels,c;a;)a._start>=s&&(a._start+=i,a._end+=i),a=a._next;if(r)for(c in l)l[c]>=s&&(l[c]+=i);return di(this)},e.invalidate=function(i){var r=this._first;for(this._lock=0;r;)r.invalidate(i),r=r._next;return o.prototype.invalidate.call(this,i)},e.clear=function(i){i===void 0&&(i=!0);for(var r=this._first,s;r;)s=r._next,this.remove(r),r=s;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),di(this)},e.totalDuration=function(i){var r=0,s=this,a=s._last,l=Xe,c,u,h;if(arguments.length)return s.timeScale((s._repeat<0?s.duration():s.totalDuration())/(s.reversed()?-i:i));if(s._dirty){for(h=s.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),u=a._start,u>l&&s._sort&&a._ts&&!s._lock?(s._lock=1,ln(s,a,u-a._delay,1)._lock=0):l=u,u<0&&a._ts&&(r-=u,(!h&&!s._dp||h&&h.smoothChildTiming)&&(s._start+=u/s._ts,s._time-=u,s._tTime-=u),s.shiftChildren(-u,!1,-1/0),l=0),a._end>r&&a._ts&&(r=a._end),a=c;er(s,s===zt&&s._time>r?s._time:r,1,1),s._dirty=0}return s._tDur},t.updateRoot=function(i){if(zt._ts&&(jc(zt,Ma(i,zt)),Xc=Pe.frame),Pe.frame>=Xl){Xl+=Le.autoSleep||120;var r=zt._first;if((!r||!r._ts)&&Le.autoSleep&&Pe._listeners.length<2){for(;r&&!r._ts;)r=r._next;r||Pe.sleep()}}},t}(ir);Ze(_e.prototype,{_lock:0,_hasPause:0,_forcing:0});var M0=function(t,e,n,i,r,s,a){var l=new Ae(this._pt,t,e,0,1,xu,null,r),c=0,u=0,h,f,m,g,d,p,_,x;for(l.b=n,l.e=i,n+="",i+="",(_=~i.indexOf("random("))&&(i=Cr(i)),s&&(x=[n,i],s(x,t,e),n=x[0],i=x[1]),f=n.match(vs)||[];h=vs.exec(i);)g=h[0],d=i.substring(c,h.index),m?m=(m+1)%5:d.substr(-5)==="rgba("&&(m=1),g!==f[u++]&&(p=parseFloat(f[u-1])||0,l._pt={_next:l._pt,p:d||u===1?d:",",s:p,c:g.charAt(1)==="="?Xi(p,g)-p:parseFloat(g)-p,m:m&&m<4?Math.round:0},c=vs.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=a,(kc.test(i)||_)&&(l.e=0),this._pt=l,l},vo=function(t,e,n,i,r,s,a,l,c,u){Wt(i)&&(i=i(r||0,t,s));var h=t[e],f=n!=="get"?n:Wt(h)?c?t[e.indexOf("set")||!Wt(t["get"+e.substr(3)])?e:"get"+e.substr(3)](c):t[e]():h,m=Wt(h)?c?P0:_u:yo,g;if(ne(i)&&(~i.indexOf("random(")&&(i=Cr(i)),i.charAt(1)==="="&&(g=Xi(f,i)+(ce(f)||0),(g||g===0)&&(i=g))),!u||f!==i||Zs)return!isNaN(f*i)&&i!==""?(g=new Ae(this._pt,t,e,+f||0,i-(f||0),typeof h=="boolean"?L0:vu,0,m),c&&(g.fp=c),a&&g.modifier(a,this,t),this._pt=g):(!h&&!(e in t)&&po(e,i),M0.call(this,t,e,f,i,m,l||Le.stringFilter,c))},S0=function(t,e,n,i,r){if(Wt(t)&&(t=Mr(t,r,e,n,i)),!dn(t)||t.style&&t.nodeType||he(t)||Uc(t))return ne(t)?Mr(t,r,e,n,i):t;var s={},a;for(a in t)s[a]=Mr(t[a],r,e,n,i);return s},pu=function(t,e,n,i,r,s){var a,l,c,u;if(Ee[t]&&(a=new Ee[t]).init(r,a.rawVars?e[t]:S0(e[t],i,r,s,n),n,i,s)!==!1&&(n._pt=l=new Ae(n._pt,r,t,0,1,a.render,a,0,a.priority),n!==Gi))for(c=n._ptLookup[n._targets.indexOf(r)],u=a._props.length;u--;)c[a._props[u]]=l;return a},kn,Zs,xo=function o(t,e,n){var i=t.vars,r=i.ease,s=i.startAt,a=i.immediateRender,l=i.lazy,c=i.onUpdate,u=i.onUpdateParams,h=i.callbackScope,f=i.runBackwards,m=i.yoyoEase,g=i.keyframes,d=i.autoRevert,p=t._dur,_=t._startAt,x=t._targets,w=t.parent,A=w&&w.data==="nested"?w.vars.targets:x,y=t._overwrite==="auto"&&!uo,T=t.timeline,P,v,M,D,G,J,N,R,z,j,Y,k,O;if(T&&(!g||!r)&&(r="none"),t._ease=pi(r,$i.ease),t._yEase=m?uu(pi(m===!0?r:m,$i.ease)):0,m&&t._yoyo&&!t._repeat&&(m=t._yEase,t._yEase=t._ease,t._ease=m),t._from=!T&&!!i.runBackwards,!T||g&&!i.stagger){if(R=x[0]?fi(x[0]).harness:0,k=R&&i[R.prop],P=ba(i,mo),_&&(_._zTime<0&&_.progress(1),e<0&&f&&a&&!d?_.render(-1,!0):_.revert(f&&p?ga:Jg),_._lazy=0),s){if(qn(t._startAt=Jt.set(x,Ze({data:"isStart",overwrite:!1,parent:w,immediateRender:!0,lazy:!_&&xe(l),startAt:null,delay:0,onUpdate:c,onUpdateParams:u,callbackScope:h,stagger:0},s))),t._startAt._dp=0,t._startAt._sat=t,e<0&&(ue||!a&&!d)&&t._startAt.revert(ga),a&&p&&e<=0&&n<=0){e&&(t._zTime=e);return}}else if(f&&p&&!_){if(e&&(a=!1),M=Ze({overwrite:!1,data:"isFromStart",lazy:a&&!_&&xe(l),immediateRender:a,stagger:0,parent:w},P),k&&(M[R.prop]=k),qn(t._startAt=Jt.set(x,M)),t._startAt._dp=0,t._startAt._sat=t,e<0&&(ue?t._startAt.revert(ga):t._startAt.render(-1,!0)),t._zTime=e,!a)o(t._startAt,Bt,Bt);else if(!e)return}for(t._pt=t._ptCache=0,l=p&&xe(l)||l&&!p,v=0;v<x.length;v++){if(G=x[v],N=G._gsap||_o(x)[v]._gsap,t._ptLookup[v]=j={},Hs[N.id]&&Wn.length&&wa(),Y=A===x?v:A.indexOf(G),R&&(z=new R).init(G,k||P,t,Y,A)!==!1&&(t._pt=D=new Ae(t._pt,G,z.name,0,1,z.render,z,0,z.priority),z._props.forEach(function(U){j[U]=D}),z.priority&&(J=1)),!R||k)for(M in P)Ee[M]&&(z=pu(M,P,t,Y,G,A))?z.priority&&(J=1):j[M]=D=vo.call(t,G,M,"get",P[M],Y,A,0,i.stringFilter);t._op&&t._op[v]&&t.kill(G,t._op[v]),y&&t._pt&&(kn=t,zt.killTweensOf(G,j,t.globalTime(e)),O=!t.parent,kn=0),t._pt&&l&&(Hs[N.id]=1)}J&&yu(t),t._onInit&&t._onInit(t)}t._onUpdate=c,t._initted=(!t._op||t._pt)&&!O,g&&e<=0&&T.render(Xe,!0,!0)},T0=function(t,e,n,i,r,s,a){var l=(t._pt&&t._ptCache||(t._ptCache={}))[e],c,u,h,f;if(!l)for(l=t._ptCache[e]=[],h=t._ptLookup,f=t._targets.length;f--;){if(c=h[f][e],c&&c.d&&c.d._pt)for(c=c.d._pt;c&&c.p!==e&&c.fp!==e;)c=c._next;if(!c)return Zs=1,t.vars[e]="+=0",xo(t,a),Zs=0,1;l.push(c)}for(f=l.length;f--;)u=l[f],c=u._pt||u,c.s=(i||i===0)&&!r?i:c.s+(i||0)+s*c.c,c.c=n-c.s,u.e&&(u.e=jt(n)+ce(u.e)),u.b&&(u.b=c.s+ce(u.b))},E0=function(t,e){var n=t[0]?fi(t[0]).harness:0,i=n&&n.aliases,r,s,a,l;if(!i)return e;r=vi({},e);for(s in i)if(s in r)for(l=i[s].split(","),a=l.length;a--;)r[l[a]]=r[s];return r},C0=function(t,e,n,i){var r=e.ease||i||"power1.inOut",s,a;if(he(e))a=n[t]||(n[t]=[]),e.forEach(function(l,c){return a.push({t:c/(e.length-1)*100,v:l,e:r})});else for(s in e)a=n[s]||(n[s]=[]),s==="ease"||a.push({t:parseFloat(t),v:e[s],e:r})},Mr=function(t,e,n,i,r){return Wt(t)?t.call(e,n,i,r):ne(t)&&~t.indexOf("random(")?Cr(t):t},mu=go+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",gu={};ye(mu+",id,stagger,delay,duration,paused,scrollTrigger",function(o){return gu[o]=1});var Jt=function(o){Bc(t,o);function t(n,i,r,s){var a;typeof i=="number"&&(r.duration=i,i=r,r=null),a=o.call(this,s?i:wr(i))||this;var l=a.vars,c=l.duration,u=l.delay,h=l.immediateRender,f=l.stagger,m=l.overwrite,g=l.keyframes,d=l.defaults,p=l.scrollTrigger,_=l.yoyoEase,x=i.parent||zt,w=(he(n)||Uc(n)?Cn(n[0]):"length"in i)?[n]:qe(n),A,y,T,P,v,M,D,G;if(a._targets=w.length?_o(w):Aa("GSAP target "+n+" not found. https://greensock.com",!Le.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=m,g||f||fa(c)||fa(u)){if(i=a.vars,A=a.timeline=new _e({data:"nested",defaults:d||{},targets:x&&x.data==="nested"?x.vars.targets:w}),A.kill(),A.parent=A._dp=bn(a),A._start=0,f||fa(c)||fa(u)){if(P=w.length,D=f&&nu(f),dn(f))for(v in f)~mu.indexOf(v)&&(G||(G={}),G[v]=f[v]);for(y=0;y<P;y++)T=ba(i,gu),T.stagger=0,_&&(T.yoyoEase=_),G&&vi(T,G),M=w[y],T.duration=+Mr(c,bn(a),y,M,w),T.delay=(+Mr(u,bn(a),y,M,w)||0)-a._delay,!f&&P===1&&T.delay&&(a._delay=u=T.delay,a._start+=u,T.delay=0),A.to(M,T,D?D(y,M,w):0),A._ease=St.none;A.duration()?c=u=0:a.timeline=0}else if(g){wr(Ze(A.vars.defaults,{ease:"none"})),A._ease=pi(g.ease||i.ease||"none");var J=0,N,R,z;if(he(g))g.forEach(function(j){return A.to(w,j,">")}),A.duration();else{T={};for(v in g)v==="ease"||v==="easeEach"||C0(v,g[v],T,g.easeEach);for(v in T)for(N=T[v].sort(function(j,Y){return j.t-Y.t}),J=0,y=0;y<N.length;y++)R=N[y],z={ease:R.e,duration:(R.t-(y?N[y-1].t:0))/100*c},z[v]=R.v,A.to(w,z,J),J+=z.duration;A.duration()<c&&A.to({},{duration:c-A.duration()})}}c||a.duration(c=A.duration())}else a.timeline=0;return m===!0&&!uo&&(kn=bn(a),zt.killTweensOf(w),kn=0),ln(x,bn(a),r),i.reversed&&a.reverse(),i.paused&&a.paused(!0),(h||!c&&!g&&a._start===ae(x._time)&&xe(h)&&r0(bn(a))&&x.data!=="nested")&&(a._tTime=-Bt,a.render(Math.max(0,-u)||0)),p&&Jc(bn(a),p),a}var e=t.prototype;return e.render=function(i,r,s){var a=this._time,l=this._tDur,c=this._dur,u=i<0,h=i>l-Bt&&!u?l:i<Bt?0:i,f,m,g,d,p,_,x,w,A;if(!c)s0(this,i,r,s);else if(h!==this._tTime||!i||s||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u){if(f=h,w=this.timeline,this._repeat){if(d=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(d*100+i,r,s);if(f=ae(h%d),h===l?(g=this._repeat,f=c):(g=~~(h/d),g&&g===h/d&&(f=c,g--),f>c&&(f=c)),_=this._yoyo&&g&1,_&&(A=this._yEase,f=c-f),p=tr(this._tTime,d),f===a&&!s&&this._initted)return this._tTime=h,this;g!==p&&(w&&this._yEase&&hu(w,_),this.vars.repeatRefresh&&!_&&!this._lock&&(this._lock=s=1,this.render(ae(d*g),!0).invalidate()._lock=0))}if(!this._initted){if($c(this,u?i:f,s,r,h))return this._tTime=0,this;if(a!==this._time)return this;if(c!==this._dur)return this.render(i,r,s)}if(this._tTime=h,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=x=(A||this._ease)(f/c),this._from&&(this.ratio=x=1-x),f&&!a&&!r&&(je(this,"onStart"),this._tTime!==h))return this;for(m=this._pt;m;)m.r(x,m.d),m=m._next;w&&w.render(i<0?i:!f&&_?-Bt:w._dur*w._ease(f/this._dur),r,s)||this._startAt&&(this._zTime=i),this._onUpdate&&!r&&(u&&Ws(this,i,r,s),je(this,"onUpdate")),this._repeat&&g!==p&&this.vars.onRepeat&&!r&&this.parent&&je(this,"onRepeat"),(h===this._tDur||!h)&&this._tTime===h&&(u&&!this._onUpdate&&Ws(this,i,!0,!0),(i||!c)&&(h===this._tDur&&this._ts>0||!h&&this._ts<0)&&qn(this,1),!r&&!(u&&!a)&&(h||a||_)&&(je(this,h===l?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom()))}return this},e.targets=function(){return this._targets},e.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),o.prototype.invalidate.call(this,i)},e.resetTo=function(i,r,s,a){Pr||Pe.wake(),this._ts||this.play();var l=Math.min(this._dur,(this._dp._time-this._start)*this._ts),c;return this._initted||xo(this,l),c=this._ease(l/this._dur),T0(this,i,r,s,a,c,l)?this.resetTo(i,r,s,a):(Fa(this,0),this.parent||Kc(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},e.kill=function(i,r){if(r===void 0&&(r="all"),!i&&(!r||r==="all"))return this._lazy=this._pt=0,this.parent?vr(this):this;if(this.timeline){var s=this.timeline.totalDuration();return this.timeline.killTweensOf(i,r,kn&&kn.vars.overwrite!==!0)._first||vr(this),this.parent&&s!==this.timeline.totalDuration()&&er(this,this._dur*this.timeline._tDur/s,0,1),this}var a=this._targets,l=i?qe(i):a,c=this._ptLookup,u=this._pt,h,f,m,g,d,p,_;if((!r||r==="all")&&n0(a,l))return r==="all"&&(this._pt=0),vr(this);for(h=this._op=this._op||[],r!=="all"&&(ne(r)&&(d={},ye(r,function(x){return d[x]=1}),r=d),r=E0(a,r)),_=a.length;_--;)if(~l.indexOf(a[_])){f=c[_],r==="all"?(h[_]=r,g=f,m={}):(m=h[_]=h[_]||{},g=r);for(d in g)p=f&&f[d],p&&((!("kill"in p.d)||p.d.kill(d)===!0)&&Oa(this,p,"_pt"),delete f[d]),m!=="all"&&(m[d]=1)}return this._initted&&!this._pt&&u&&vr(this),this},t.to=function(i,r){return new t(i,r,arguments[2])},t.from=function(i,r){return br(1,arguments)},t.delayedCall=function(i,r,s,a){return new t(r,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:r,onReverseComplete:r,onCompleteParams:s,onReverseCompleteParams:s,callbackScope:a})},t.fromTo=function(i,r,s){return br(2,arguments)},t.set=function(i,r){return r.duration=0,r.repeatDelay||(r.repeat=0),new t(i,r)},t.killTweensOf=function(i,r,s){return zt.killTweensOf(i,r,s)},t}(ir);Ze(Jt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});ye("staggerTo,staggerFrom,staggerFromTo",function(o){Jt[o]=function(){var t=new _e,e=qs.call(arguments,0);return e.splice(o==="staggerFromTo"?5:4,0,0),t[o].apply(t,e)}});var yo=function(t,e,n){return t[e]=n},_u=function(t,e,n){return t[e](n)},P0=function(t,e,n,i){return t[e](i.fp,n)},D0=function(t,e,n){return t.setAttribute(e,n)},Ao=function(t,e){return Wt(t[e])?_u:ho(t[e])&&t.setAttribute?D0:yo},vu=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e6)/1e6,e)},L0=function(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},xu=function(t,e){var n=e._pt,i="";if(!t&&e.b)i=e.b;else if(t===1&&e.e)i=e.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*t):Math.round((n.s+n.c*t)*1e4)/1e4)+i,n=n._next;i+=e.c}e.set(e.t,e.p,i,e)},wo=function(t,e){for(var n=e._pt;n;)n.r(t,n.d),n=n._next},R0=function(t,e,n,i){for(var r=this._pt,s;r;)s=r._next,r.p===i&&r.modifier(t,e,n),r=s},I0=function(t){for(var e=this._pt,n,i;e;)i=e._next,e.p===t&&!e.op||e.op===t?Oa(this,e,"_pt"):e.dep||(n=1),e=i;return!n},O0=function(t,e,n,i){i.mSet(t,e,i.m.call(i.tween,n,i.mt),i)},yu=function(t){for(var e=t._pt,n,i,r,s;e;){for(n=e._next,i=r;i&&i.pr>e.pr;)i=i._next;(e._prev=i?i._prev:s)?e._prev._next=e:r=e,(e._next=i)?i._prev=e:s=e,e=n}t._pt=r},Ae=function(){function o(e,n,i,r,s,a,l,c,u){this.t=n,this.s=r,this.c=s,this.p=i,this.r=a||vu,this.d=l||this,this.set=c||yo,this.pr=u||0,this._next=e,e&&(e._prev=this)}var t=o.prototype;return t.modifier=function(n,i,r){this.mSet=this.mSet||this.set,this.set=O0,this.m=n,this.mt=r,this.tween=i},o}();ye(go+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(o){return mo[o]=1});Re.TweenMax=Re.TweenLite=Jt;Re.TimelineLite=Re.TimelineMax=_e;zt=new _e({sortChildren:!1,defaults:$i,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Le.stringFilter=cu;var rr=[],va={},B0=[],Ql=0,bs=function(t){return(va[t]||B0).map(function(e){return e()})},Ks=function(){var t=Date.now(),e=[];t-Ql>2&&(bs("matchMediaInit"),rr.forEach(function(n){var i=n.queries,r=n.conditions,s,a,l,c;for(a in i)s=Ue.matchMedia(i[a]).matches,s&&(l=1),s!==r[a]&&(r[a]=s,c=1);c&&(n.revert(),l&&e.push(n))}),bs("matchMediaRevert"),e.forEach(function(n){return n.onMatch(n)}),Ql=t,bs("matchMedia"))},Au=function(){function o(e,n){this.selector=n&&js(n),this.data=[],this._r=[],this.isReverted=!1,e&&this.add(e)}var t=o.prototype;return t.add=function(n,i,r){Wt(n)&&(r=i,i=n,n=Wt);var s=this,a=function(){var c=Kt,u=s.selector,h;return c&&c!==s&&c.data.push(s),r&&(s.selector=js(r)),Kt=s,h=i.apply(s,arguments),Wt(h)&&s._r.push(h),Kt=c,s.selector=u,s.isReverted=!1,h};return s.last=a,n===Wt?a(s):n?s[n]=a:a},t.ignore=function(n){var i=Kt;Kt=null,n(this),Kt=i},t.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof o?n.push.apply(n,i.getTweens()):i instanceof Jt&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(n,i){var r=this;if(n){var s=this.getTweens();this.data.forEach(function(l){l.data==="isFlip"&&(l.revert(),l.getChildren(!0,!0,!1).forEach(function(c){return s.splice(s.indexOf(c),1)}))}),s.map(function(l){return{g:l.globalTime(0),t:l}}).sort(function(l,c){return c.g-l.g||-1}).forEach(function(l){return l.t.revert(n)}),this.data.forEach(function(l){return!(l instanceof ir)&&l.revert&&l.revert(n)}),this._r.forEach(function(l){return l(n,r)}),this.isReverted=!0}else this.data.forEach(function(l){return l.kill&&l.kill()});if(this.clear(),i){var a=rr.indexOf(this);~a&&rr.splice(a,1)}},t.revert=function(n){this.kill(n||{})},o}(),F0=function(){function o(e){this.contexts=[],this.scope=e}var t=o.prototype;return t.add=function(n,i,r){dn(n)||(n={matches:n});var s=new Au(0,r||this.scope),a=s.conditions={},l,c,u;this.contexts.push(s),i=s.add("onMatch",i),s.queries=n;for(c in n)c==="all"?u=1:(l=Ue.matchMedia(n[c]),l&&(rr.indexOf(s)<0&&rr.push(s),(a[c]=l.matches)&&(u=1),l.addListener?l.addListener(Ks):l.addEventListener("change",Ks)));return u&&i(s),this},t.revert=function(n){this.kill(n||{})},t.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},o}(),Sa={registerPlugin:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];e.forEach(function(i){return _0(i)})},timeline:function(t){return new _e(t)},getTweensOf:function(t,e){return zt.getTweensOf(t,e)},getProperty:function(t,e,n,i){ne(t)&&(t=qe(t)[0]);var r=fi(t||{}).get,s=n?Zc:Yc;return n==="native"&&(n=""),t&&(e?s((Ee[e]&&Ee[e].get||r)(t,e,n,i)):function(a,l,c){return s((Ee[a]&&Ee[a].get||r)(t,a,l,c))})},quickSetter:function(t,e,n){if(t=qe(t),t.length>1){var i=t.map(function(u){return Ie.quickSetter(u,e,n)}),r=i.length;return function(u){for(var h=r;h--;)i[h](u)}}t=t[0]||{};var s=Ee[e],a=fi(t),l=a.harness&&(a.harness.aliases||{})[e]||e,c=s?function(u){var h=new s;Gi._pt=0,h.init(t,n?u+n:u,Gi,0,[t]),h.render(1,h),Gi._pt&&wo(1,Gi)}:a.set(t,l);return s?c:function(u){return c(t,l,n?u+n:u,a,1)}},quickTo:function(t,e,n){var i,r=Ie.to(t,vi((i={},i[e]="+=0.1",i.paused=!0,i),n||{})),s=function(l,c,u){return r.resetTo(e,l,c,u)};return s.tween=r,s},isTweening:function(t){return zt.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=pi(t.ease,$i.ease)),ql($i,t||{})},config:function(t){return ql(Le,t||{})},registerEffect:function(t){var e=t.name,n=t.effect,i=t.plugins,r=t.defaults,s=t.extendTimeline;(i||"").split(",").forEach(function(a){return a&&!Ee[a]&&!Re[a]&&Aa(e+" effect requires "+a+" plugin.")}),xs[e]=function(a,l,c){return n(qe(a),Ze(l||{},r),c)},s&&(_e.prototype[e]=function(a,l,c){return this.add(xs[e](a,dn(l)?l:(c=l)&&{},this),c)})},registerEase:function(t,e){St[t]=pi(e)},parseEase:function(t,e){return arguments.length?pi(t,e):St},getById:function(t){return zt.getById(t)},exportRoot:function(t,e){t===void 0&&(t={});var n=new _e(t),i,r;for(n.smoothChildTiming=xe(t.smoothChildTiming),zt.remove(n),n._dp=0,n._time=n._tTime=zt._time,i=zt._first;i;)r=i._next,(e||!(!i._dur&&i instanceof Jt&&i.vars.onComplete===i._targets[0]))&&ln(n,i,i._start-i._delay),i=r;return ln(zt,n,0),n},context:function(t,e){return t?new Au(t,e):Kt},matchMedia:function(t){return new F0(t)},matchMediaRefresh:function(){return rr.forEach(function(t){var e=t.conditions,n,i;for(i in e)e[i]&&(e[i]=!1,n=1);n&&t.revert()})||Ks()},addEventListener:function(t,e){var n=va[t]||(va[t]=[]);~n.indexOf(e)||n.push(e)},removeEventListener:function(t,e){var n=va[t],i=n&&n.indexOf(e);i>=0&&n.splice(i,1)},utils:{wrap:p0,wrapYoyo:m0,distribute:nu,random:ru,snap:iu,normalize:d0,getUnit:ce,clamp:c0,splitColor:ou,toArray:qe,selector:js,mapRange:su,pipe:h0,unitize:f0,interpolate:g0,shuffle:eu},install:Hc,effects:xs,ticker:Pe,updateRoot:_e.updateRoot,plugins:Ee,globalTimeline:zt,core:{PropTween:Ae,globals:Wc,Tween:Jt,Timeline:_e,Animation:ir,getCache:fi,_removeLinkedListItem:Oa,reverting:function(){return ue},context:function(t){return t&&Kt&&(Kt.data.push(t),t._ctx=Kt),Kt},suppressOverwrites:function(t){return uo=t}}};ye("to,from,fromTo,delayedCall,set,killTweensOf",function(o){return Sa[o]=Jt[o]});Pe.add(_e.updateRoot);Gi=Sa.to({},{duration:0});var N0=function(t,e){for(var n=t._pt;n&&n.p!==e&&n.op!==e&&n.fp!==e;)n=n._next;return n},U0=function(t,e){var n=t._targets,i,r,s;for(i in e)for(r=n.length;r--;)s=t._ptLookup[r][i],s&&(s=s.d)&&(s._pt&&(s=N0(s,i)),s&&s.modifier&&s.modifier(e[i],t,n[r],i))},Ms=function(t,e){return{name:t,rawVars:1,init:function(i,r,s){s._onInit=function(a){var l,c;if(ne(r)&&(l={},ye(r,function(u){return l[u]=1}),r=l),e){l={};for(c in r)l[c]=e(r[c]);r=l}U0(a,r)}}}},Ie=Sa.registerPlugin({name:"attr",init:function(t,e,n,i,r){var s,a,l;this.tween=n;for(s in e)l=t.getAttribute(s)||"",a=this.add(t,"setAttribute",(l||0)+"",e[s],i,r,0,0,s),a.op=s,a.b=l,this._props.push(s)},render:function(t,e){for(var n=e._pt;n;)ue?n.set(n.t,n.p,n.b,n):n.r(t,n.d),n=n._next}},{name:"endArray",init:function(t,e){for(var n=e.length;n--;)this.add(t,n,t[n]||0,e[n],0,0,0,0,0,1)}},Ms("roundProps",Ys),Ms("modifiers"),Ms("snap",iu))||Sa;Jt.version=_e.version=Ie.version="3.11.4";Gc=1;Nc()&&nr();St.Power0;St.Power1;St.Power2;St.Power3;St.Power4;St.Linear;St.Quad;St.Cubic;St.Quart;St.Quint;St.Strong;St.Elastic;St.Back;St.SteppedEase;St.Bounce;St.Sine;St.Expo;St.Circ;/*!
 * CSSPlugin 3.11.4
 * https://greensock.com
 *
 * Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Jl,Vn,qi,bo,ci,$l,Mo,z0=function(){return typeof window<"u"},Pn={},ri=180/Math.PI,ji=Math.PI/180,Ni=Math.atan2,tc=1e8,So=/([A-Z])/g,k0=/(left|right|width|margin|padding|x)/i,V0=/[\s,\(]\S/,Tn={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Qs=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},G0=function(t,e){return e.set(e.t,e.p,t===1?e.e:Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},H0=function(t,e){return e.set(e.t,e.p,t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},W0=function(t,e){var n=e.s+e.c*t;e.set(e.t,e.p,~~(n+(n<0?-.5:.5))+e.u,e)},wu=function(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)},bu=function(t,e){return e.set(e.t,e.p,t!==1?e.b:e.e,e)},X0=function(t,e,n){return t.style[e]=n},q0=function(t,e,n){return t.style.setProperty(e,n)},j0=function(t,e,n){return t._gsap[e]=n},Y0=function(t,e,n){return t._gsap.scaleX=t._gsap.scaleY=n},Z0=function(t,e,n,i,r){var s=t._gsap;s.scaleX=s.scaleY=n,s.renderTransform(r,s)},K0=function(t,e,n,i,r){var s=t._gsap;s[e]=n,s.renderTransform(r,s)},kt="transform",nn=kt+"Origin",Q0=function(t,e){var n=this,i=this.target,r=i.style;if(t in Pn){if(this.tfm=this.tfm||{},t!=="transform"&&(t=Tn[t]||t,~t.indexOf(",")?t.split(",").forEach(function(s){return n.tfm[s]=Mn(i,s)}):this.tfm[t]=i._gsap.x?i._gsap[t]:Mn(i,t)),this.props.indexOf(kt)>=0)return;i._gsap.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(nn,e,"")),t=kt}(r||e)&&this.props.push(t,e,r[t])},Mu=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},J0=function(){var t=this.props,e=this.target,n=e.style,i=e._gsap,r,s;for(r=0;r<t.length;r+=3)t[r+1]?e[t[r]]=t[r+2]:t[r+2]?n[t[r]]=t[r+2]:n.removeProperty(t[r].replace(So,"-$1").toLowerCase());if(this.tfm){for(s in this.tfm)i[s]=this.tfm[s];i.svg&&(i.renderTransform(),e.setAttribute("data-svg-origin",this.svgo||"")),r=Mo(),r&&!r.isStart&&!n[kt]&&(Mu(n),i.uncache=1)}},Su=function(t,e){var n={target:t,props:[],revert:J0,save:Q0};return e&&e.split(",").forEach(function(i){return n.save(i)}),n},Tu,Js=function(t,e){var n=Vn.createElementNS?Vn.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):Vn.createElement(t);return n.style?n:Vn.createElement(t)},hn=function o(t,e,n){var i=getComputedStyle(t);return i[e]||i.getPropertyValue(e.replace(So,"-$1").toLowerCase())||i.getPropertyValue(e)||!n&&o(t,ar(e)||e,1)||""},ec="O,Moz,ms,Ms,Webkit".split(","),ar=function(t,e,n){var i=e||ci,r=i.style,s=5;if(t in r&&!n)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);s--&&!(ec[s]+t in r););return s<0?null:(s===3?"ms":s>=0?ec[s]:"")+t},$s=function(){z0()&&window.document&&(Jl=window,Vn=Jl.document,qi=Vn.documentElement,ci=Js("div")||{style:{}},Js("div"),kt=ar(kt),nn=kt+"Origin",ci.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Tu=!!ar("perspective"),Mo=Ie.core.reverting,bo=1)},Ss=function o(t){var e=Js("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),n=this.parentNode,i=this.nextSibling,r=this.style.cssText,s;if(qi.appendChild(e),e.appendChild(this),this.style.display="block",t)try{s=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=o}catch{}else this._gsapBBox&&(s=this._gsapBBox());return n&&(i?n.insertBefore(this,i):n.appendChild(this)),qi.removeChild(e),this.style.cssText=r,s},nc=function(t,e){for(var n=e.length;n--;)if(t.hasAttribute(e[n]))return t.getAttribute(e[n])},Eu=function(t){var e;try{e=t.getBBox()}catch{e=Ss.call(t,!0)}return e&&(e.width||e.height)||t.getBBox===Ss||(e=Ss.call(t,!0)),e&&!e.width&&!e.x&&!e.y?{x:+nc(t,["x","cx","x1"])||0,y:+nc(t,["y","cy","y1"])||0,width:0,height:0}:e},Cu=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&Eu(t))},Dr=function(t,e){if(e){var n=t.style;e in Pn&&e!==nn&&(e=kt),n.removeProperty?((e.substr(0,2)==="ms"||e.substr(0,6)==="webkit")&&(e="-"+e),n.removeProperty(e.replace(So,"-$1").toLowerCase())):n.removeAttribute(e)}},Gn=function(t,e,n,i,r,s){var a=new Ae(t._pt,e,n,0,1,s?bu:wu);return t._pt=a,a.b=i,a.e=r,t._props.push(n),a},ic={deg:1,rad:1,turn:1},$0={grid:1,flex:1},jn=function o(t,e,n,i){var r=parseFloat(n)||0,s=(n+"").trim().substr((r+"").length)||"px",a=ci.style,l=k0.test(e),c=t.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),h=100,f=i==="px",m=i==="%",g,d,p,_;return i===s||!r||ic[i]||ic[s]?r:(s!=="px"&&!f&&(r=o(t,e,n,"px")),_=t.getCTM&&Cu(t),(m||s==="%")&&(Pn[e]||~e.indexOf("adius"))?(g=_?t.getBBox()[l?"width":"height"]:t[u],jt(m?r/g*h:r/100*g)):(a[l?"width":"height"]=h+(f?s:i),d=~e.indexOf("adius")||i==="em"&&t.appendChild&&!c?t:t.parentNode,_&&(d=(t.ownerSVGElement||{}).parentNode),(!d||d===Vn||!d.appendChild)&&(d=Vn.body),p=d._gsap,p&&m&&p.width&&l&&p.time===Pe.time&&!p.uncache?jt(r/p.width*h):((m||s==="%")&&!$0[hn(d,"display")]&&(a.position=hn(t,"position")),d===t&&(a.position="static"),d.appendChild(ci),g=ci[u],d.removeChild(ci),a.position="absolute",l&&m&&(p=fi(d),p.time=Pe.time,p.width=d[u]),jt(f?g*r/h:g&&r?h/g*r:0))))},Mn=function(t,e,n,i){var r;return bo||$s(),e in Tn&&e!=="transform"&&(e=Tn[e],~e.indexOf(",")&&(e=e.split(",")[0])),Pn[e]&&e!=="transform"?(r=Rr(t,i),r=e!=="transformOrigin"?r[e]:r.svg?r.origin:Ea(hn(t,nn))+" "+r.zOrigin+"px"):(r=t.style[e],(!r||r==="auto"||i||~(r+"").indexOf("calc("))&&(r=Ta[e]&&Ta[e](t,e,n)||hn(t,e)||qc(t,e)||(e==="opacity"?1:0))),n&&!~(r+"").trim().indexOf(" ")?jn(t,e,r,n)+n:r},t_=function(t,e,n,i){if(!n||n==="none"){var r=ar(e,t,1),s=r&&hn(t,r,1);s&&s!==n?(e=r,n=s):e==="borderColor"&&(n=hn(t,"borderTopColor"))}var a=new Ae(this._pt,t.style,e,0,1,xu),l=0,c=0,u,h,f,m,g,d,p,_,x,w,A,y;if(a.b=n,a.e=i,n+="",i+="",i==="auto"&&(t.style[e]=i,i=hn(t,e)||i,t.style[e]=n),u=[n,i],cu(u),n=u[0],i=u[1],f=n.match(Vi)||[],y=i.match(Vi)||[],y.length){for(;h=Vi.exec(i);)p=h[0],x=i.substring(l,h.index),g?g=(g+1)%5:(x.substr(-5)==="rgba("||x.substr(-5)==="hsla(")&&(g=1),p!==(d=f[c++]||"")&&(m=parseFloat(d)||0,A=d.substr((m+"").length),p.charAt(1)==="="&&(p=Xi(m,p)+A),_=parseFloat(p),w=p.substr((_+"").length),l=Vi.lastIndex-w.length,w||(w=w||Le.units[e]||A,l===i.length&&(i+=w,a.e+=w)),A!==w&&(m=jn(t,e,d,w)||0),a._pt={_next:a._pt,p:x||c===1?x:",",s:m,c:_-m,m:g&&g<4||e==="zIndex"?Math.round:0});a.c=l<i.length?i.substring(l,i.length):""}else a.r=e==="display"&&i==="none"?bu:wu;return kc.test(i)&&(a.e=0),this._pt=a,a},rc={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},e_=function(t){var e=t.split(" "),n=e[0],i=e[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(t=n,n=i,i=t),e[0]=rc[n]||n,e[1]=rc[i]||i,e.join(" ")},n_=function(t,e){if(e.tween&&e.tween._time===e.tween._dur){var n=e.t,i=n.style,r=e.u,s=n._gsap,a,l,c;if(r==="all"||r===!0)i.cssText="",l=1;else for(r=r.split(","),c=r.length;--c>-1;)a=r[c],Pn[a]&&(l=1,a=a==="transformOrigin"?nn:kt),Dr(n,a);l&&(Dr(n,kt),s&&(s.svg&&n.removeAttribute("transform"),Rr(n,1),s.uncache=1,Mu(i)))}},Ta={clearProps:function(t,e,n,i,r){if(r.data!=="isFromStart"){var s=t._pt=new Ae(t._pt,e,n,0,0,n_);return s.u=i,s.pr=-10,s.tween=r,t._props.push(n),1}}},Lr=[1,0,0,1,0,0],Pu={},Du=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},ac=function(t){var e=hn(t,kt);return Du(e)?Lr:e.substr(7).match(zc).map(jt)},To=function(t,e){var n=t._gsap||fi(t),i=t.style,r=ac(t),s,a,l,c;return n.svg&&t.getAttribute("transform")?(l=t.transform.baseVal.consolidate().matrix,r=[l.a,l.b,l.c,l.d,l.e,l.f],r.join(",")==="1,0,0,1,0,0"?Lr:r):(r===Lr&&!t.offsetParent&&t!==qi&&!n.svg&&(l=i.display,i.display="block",s=t.parentNode,(!s||!t.offsetParent)&&(c=1,a=t.nextElementSibling,qi.appendChild(t)),r=ac(t),l?i.display=l:Dr(t,"display"),c&&(a?s.insertBefore(t,a):s?s.appendChild(t):qi.removeChild(t))),e&&r.length>6?[r[0],r[1],r[4],r[5],r[12],r[13]]:r)},to=function(t,e,n,i,r,s){var a=t._gsap,l=r||To(t,!0),c=a.xOrigin||0,u=a.yOrigin||0,h=a.xOffset||0,f=a.yOffset||0,m=l[0],g=l[1],d=l[2],p=l[3],_=l[4],x=l[5],w=e.split(" "),A=parseFloat(w[0])||0,y=parseFloat(w[1])||0,T,P,v,M;n?l!==Lr&&(P=m*p-g*d)&&(v=A*(p/P)+y*(-d/P)+(d*x-p*_)/P,M=A*(-g/P)+y*(m/P)-(m*x-g*_)/P,A=v,y=M):(T=Eu(t),A=T.x+(~w[0].indexOf("%")?A/100*T.width:A),y=T.y+(~(w[1]||w[0]).indexOf("%")?y/100*T.height:y)),i||i!==!1&&a.smooth?(_=A-c,x=y-u,a.xOffset=h+(_*m+x*d)-_,a.yOffset=f+(_*g+x*p)-x):a.xOffset=a.yOffset=0,a.xOrigin=A,a.yOrigin=y,a.smooth=!!i,a.origin=e,a.originIsAbsolute=!!n,t.style[nn]="0px 0px",s&&(Gn(s,a,"xOrigin",c,A),Gn(s,a,"yOrigin",u,y),Gn(s,a,"xOffset",h,a.xOffset),Gn(s,a,"yOffset",f,a.yOffset)),t.setAttribute("data-svg-origin",A+" "+y)},Rr=function(t,e){var n=t._gsap||new du(t);if("x"in n&&!e&&!n.uncache)return n;var i=t.style,r=n.scaleX<0,s="px",a="deg",l=getComputedStyle(t),c=hn(t,nn)||"0",u,h,f,m,g,d,p,_,x,w,A,y,T,P,v,M,D,G,J,N,R,z,j,Y,k,O,U,$,K,Q,rt,pt;return u=h=f=d=p=_=x=w=A=0,m=g=1,n.svg=!!(t.getCTM&&Cu(t)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[kt]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[kt]!=="none"?l[kt]:"")),i.scale=i.rotate=i.translate="none"),P=To(t,n.svg),n.svg&&(n.uncache?(k=t.getBBox(),c=n.xOrigin-k.x+"px "+(n.yOrigin-k.y)+"px",Y=""):Y=!e&&t.getAttribute("data-svg-origin"),to(t,Y||c,!!Y||n.originIsAbsolute,n.smooth!==!1,P)),y=n.xOrigin||0,T=n.yOrigin||0,P!==Lr&&(G=P[0],J=P[1],N=P[2],R=P[3],u=z=P[4],h=j=P[5],P.length===6?(m=Math.sqrt(G*G+J*J),g=Math.sqrt(R*R+N*N),d=G||J?Ni(J,G)*ri:0,x=N||R?Ni(N,R)*ri+d:0,x&&(g*=Math.abs(Math.cos(x*ji))),n.svg&&(u-=y-(y*G+T*N),h-=T-(y*J+T*R))):(pt=P[6],Q=P[7],U=P[8],$=P[9],K=P[10],rt=P[11],u=P[12],h=P[13],f=P[14],v=Ni(pt,K),p=v*ri,v&&(M=Math.cos(-v),D=Math.sin(-v),Y=z*M+U*D,k=j*M+$*D,O=pt*M+K*D,U=z*-D+U*M,$=j*-D+$*M,K=pt*-D+K*M,rt=Q*-D+rt*M,z=Y,j=k,pt=O),v=Ni(-N,K),_=v*ri,v&&(M=Math.cos(-v),D=Math.sin(-v),Y=G*M-U*D,k=J*M-$*D,O=N*M-K*D,rt=R*D+rt*M,G=Y,J=k,N=O),v=Ni(J,G),d=v*ri,v&&(M=Math.cos(v),D=Math.sin(v),Y=G*M+J*D,k=z*M+j*D,J=J*M-G*D,j=j*M-z*D,G=Y,z=k),p&&Math.abs(p)+Math.abs(d)>359.9&&(p=d=0,_=180-_),m=jt(Math.sqrt(G*G+J*J+N*N)),g=jt(Math.sqrt(j*j+pt*pt)),v=Ni(z,j),x=Math.abs(v)>2e-4?v*ri:0,A=rt?1/(rt<0?-rt:rt):0),n.svg&&(Y=t.getAttribute("transform"),n.forceCSS=t.setAttribute("transform","")||!Du(hn(t,kt)),Y&&t.setAttribute("transform",Y))),Math.abs(x)>90&&Math.abs(x)<270&&(r?(m*=-1,x+=d<=0?180:-180,d+=d<=0?180:-180):(g*=-1,x+=x<=0?180:-180)),e=e||n.uncache,n.x=u-((n.xPercent=u&&(!e&&n.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-u)?-50:0)))?t.offsetWidth*n.xPercent/100:0)+s,n.y=h-((n.yPercent=h&&(!e&&n.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-h)?-50:0)))?t.offsetHeight*n.yPercent/100:0)+s,n.z=f+s,n.scaleX=jt(m),n.scaleY=jt(g),n.rotation=jt(d)+a,n.rotationX=jt(p)+a,n.rotationY=jt(_)+a,n.skewX=x+a,n.skewY=w+a,n.transformPerspective=A+s,(n.zOrigin=parseFloat(c.split(" ")[2])||0)&&(i[nn]=Ea(c)),n.xOffset=n.yOffset=0,n.force3D=Le.force3D,n.renderTransform=n.svg?r_:Tu?Lu:i_,n.uncache=0,n},Ea=function(t){return(t=t.split(" "))[0]+" "+t[1]},Ts=function(t,e,n){var i=ce(e);return jt(parseFloat(e)+parseFloat(jn(t,"x",n+"px",i)))+i},i_=function(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,Lu(t,e)},ti="0deg",pr="0px",ei=") ",Lu=function(t,e){var n=e||this,i=n.xPercent,r=n.yPercent,s=n.x,a=n.y,l=n.z,c=n.rotation,u=n.rotationY,h=n.rotationX,f=n.skewX,m=n.skewY,g=n.scaleX,d=n.scaleY,p=n.transformPerspective,_=n.force3D,x=n.target,w=n.zOrigin,A="",y=_==="auto"&&t&&t!==1||_===!0;if(w&&(h!==ti||u!==ti)){var T=parseFloat(u)*ji,P=Math.sin(T),v=Math.cos(T),M;T=parseFloat(h)*ji,M=Math.cos(T),s=Ts(x,s,P*M*-w),a=Ts(x,a,-Math.sin(T)*-w),l=Ts(x,l,v*M*-w+w)}p!==pr&&(A+="perspective("+p+ei),(i||r)&&(A+="translate("+i+"%, "+r+"%) "),(y||s!==pr||a!==pr||l!==pr)&&(A+=l!==pr||y?"translate3d("+s+", "+a+", "+l+") ":"translate("+s+", "+a+ei),c!==ti&&(A+="rotate("+c+ei),u!==ti&&(A+="rotateY("+u+ei),h!==ti&&(A+="rotateX("+h+ei),(f!==ti||m!==ti)&&(A+="skew("+f+", "+m+ei),(g!==1||d!==1)&&(A+="scale("+g+", "+d+ei),x.style[kt]=A||"translate(0, 0)"},r_=function(t,e){var n=e||this,i=n.xPercent,r=n.yPercent,s=n.x,a=n.y,l=n.rotation,c=n.skewX,u=n.skewY,h=n.scaleX,f=n.scaleY,m=n.target,g=n.xOrigin,d=n.yOrigin,p=n.xOffset,_=n.yOffset,x=n.forceCSS,w=parseFloat(s),A=parseFloat(a),y,T,P,v,M;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=ji,c*=ji,y=Math.cos(l)*h,T=Math.sin(l)*h,P=Math.sin(l-c)*-f,v=Math.cos(l-c)*f,c&&(u*=ji,M=Math.tan(c-u),M=Math.sqrt(1+M*M),P*=M,v*=M,u&&(M=Math.tan(u),M=Math.sqrt(1+M*M),y*=M,T*=M)),y=jt(y),T=jt(T),P=jt(P),v=jt(v)):(y=h,v=f,T=P=0),(w&&!~(s+"").indexOf("px")||A&&!~(a+"").indexOf("px"))&&(w=jn(m,"x",s,"px"),A=jn(m,"y",a,"px")),(g||d||p||_)&&(w=jt(w+g-(g*y+d*P)+p),A=jt(A+d-(g*T+d*v)+_)),(i||r)&&(M=m.getBBox(),w=jt(w+i/100*M.width),A=jt(A+r/100*M.height)),M="matrix("+y+","+T+","+P+","+v+","+w+","+A+")",m.setAttribute("transform",M),x&&(m.style[kt]=M)},a_=function(t,e,n,i,r){var s=360,a=ne(r),l=parseFloat(r)*(a&&~r.indexOf("rad")?ri:1),c=l-i,u=i+c+"deg",h,f;return a&&(h=r.split("_")[1],h==="short"&&(c%=s,c!==c%(s/2)&&(c+=c<0?s:-s)),h==="cw"&&c<0?c=(c+s*tc)%s-~~(c/s)*s:h==="ccw"&&c>0&&(c=(c-s*tc)%s-~~(c/s)*s)),t._pt=f=new Ae(t._pt,e,n,i,c,G0),f.e=u,f.u="deg",t._props.push(n),f},sc=function(t,e){for(var n in e)t[n]=e[n];return t},s_=function(t,e,n){var i=sc({},n._gsap),r="perspective,force3D,transformOrigin,svgOrigin",s=n.style,a,l,c,u,h,f,m,g;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),s[kt]=e,a=Rr(n,1),Dr(n,kt),n.setAttribute("transform",c)):(c=getComputedStyle(n)[kt],s[kt]=e,a=Rr(n,1),s[kt]=c);for(l in Pn)c=i[l],u=a[l],c!==u&&r.indexOf(l)<0&&(m=ce(c),g=ce(u),h=m!==g?jn(n,l,c,g):parseFloat(c),f=parseFloat(u),t._pt=new Ae(t._pt,a,l,h,f-h,Qs),t._pt.u=g||0,t._props.push(l));sc(a,i)};ye("padding,margin,Width,Radius",function(o,t){var e="Top",n="Right",i="Bottom",r="Left",s=(t<3?[e,n,i,r]:[e+r,e+n,i+n,i+r]).map(function(a){return t<2?o+a:"border"+a+o});Ta[t>1?"border"+o:o]=function(a,l,c,u,h){var f,m;if(arguments.length<4)return f=s.map(function(g){return Mn(a,g,c)}),m=f.join(" "),m.split(f[0]).length===5?f[0]:m;f=(u+"").split(" "),m={},s.forEach(function(g,d){return m[g]=f[d]=f[d]||f[(d-1)/2|0]}),a.init(l,m,h)}});var Ru={name:"css",register:$s,targetTest:function(t){return t.style&&t.nodeType},init:function(t,e,n,i,r){var s=this._props,a=t.style,l=n.vars.startAt,c,u,h,f,m,g,d,p,_,x,w,A,y,T,P,v;bo||$s(),this.styles=this.styles||Su(t),v=this.styles.props,this.tween=n;for(d in e)if(d!=="autoRound"&&(u=e[d],!(Ee[d]&&pu(d,e,n,i,t,r)))){if(m=typeof u,g=Ta[d],m==="function"&&(u=u.call(n,i,t,r),m=typeof u),m==="string"&&~u.indexOf("random(")&&(u=Cr(u)),g)g(this,t,d,u,n)&&(P=1);else if(d.substr(0,2)==="--")c=(getComputedStyle(t).getPropertyValue(d)+"").trim(),u+="",Xn.lastIndex=0,Xn.test(c)||(p=ce(c),_=ce(u)),_?p!==_&&(c=jn(t,d,c,_)+_):p&&(u+=p),this.add(a,"setProperty",c,u,i,r,0,0,d),s.push(d),v.push(d,0,a[d]);else if(m!=="undefined"){if(l&&d in l?(c=typeof l[d]=="function"?l[d].call(n,i,t,r):l[d],ne(c)&&~c.indexOf("random(")&&(c=Cr(c)),ce(c+"")||(c+=Le.units[d]||ce(Mn(t,d))||""),(c+"").charAt(1)==="="&&(c=Mn(t,d))):c=Mn(t,d),f=parseFloat(c),x=m==="string"&&u.charAt(1)==="="&&u.substr(0,2),x&&(u=u.substr(2)),h=parseFloat(u),d in Tn&&(d==="autoAlpha"&&(f===1&&Mn(t,"visibility")==="hidden"&&h&&(f=0),v.push("visibility",0,a.visibility),Gn(this,a,"visibility",f?"inherit":"hidden",h?"inherit":"hidden",!h)),d!=="scale"&&d!=="transform"&&(d=Tn[d],~d.indexOf(",")&&(d=d.split(",")[0]))),w=d in Pn,w){if(this.styles.save(d),A||(y=t._gsap,y.renderTransform&&!e.parseTransform||Rr(t,e.parseTransform),T=e.smoothOrigin!==!1&&y.smooth,A=this._pt=new Ae(this._pt,a,kt,0,1,y.renderTransform,y,0,-1),A.dep=1),d==="scale")this._pt=new Ae(this._pt,y,"scaleY",y.scaleY,(x?Xi(y.scaleY,x+h):h)-y.scaleY||0,Qs),this._pt.u=0,s.push("scaleY",d),d+="X";else if(d==="transformOrigin"){v.push(nn,0,a[nn]),u=e_(u),y.svg?to(t,u,0,T,0,this):(_=parseFloat(u.split(" ")[2])||0,_!==y.zOrigin&&Gn(this,y,"zOrigin",y.zOrigin,_),Gn(this,a,d,Ea(c),Ea(u)));continue}else if(d==="svgOrigin"){to(t,u,1,T,0,this);continue}else if(d in Pu){a_(this,y,d,f,x?Xi(f,x+u):u);continue}else if(d==="smoothOrigin"){Gn(this,y,"smooth",y.smooth,u);continue}else if(d==="force3D"){y[d]=u;continue}else if(d==="transform"){s_(this,u,t);continue}}else d in a||(d=ar(d)||d);if(w||(h||h===0)&&(f||f===0)&&!V0.test(u)&&d in a)p=(c+"").substr((f+"").length),h||(h=0),_=ce(u)||(d in Le.units?Le.units[d]:p),p!==_&&(f=jn(t,d,c,_)),this._pt=new Ae(this._pt,w?y:a,d,f,(x?Xi(f,x+h):h)-f,!w&&(_==="px"||d==="zIndex")&&e.autoRound!==!1?W0:Qs),this._pt.u=_||0,p!==_&&_!=="%"&&(this._pt.b=c,this._pt.r=H0);else if(d in a)t_.call(this,t,d,c,x?x+u:u);else if(d in t)this.add(t,d,c||t[d],x?x+u:u,i,r);else if(d!=="parseTransform"){po(d,u);continue}w||(d in a?v.push(d,0,a[d]):v.push(d,1,c||t[d])),s.push(d)}}P&&yu(this)},render:function(t,e){if(e.tween._time||!Mo())for(var n=e._pt;n;)n.r(t,n.d),n=n._next;else e.styles.revert()},get:Mn,aliases:Tn,getSetter:function(t,e,n){var i=Tn[e];return i&&i.indexOf(",")<0&&(e=i),e in Pn&&e!==nn&&(t._gsap.x||Mn(t,"x"))?n&&$l===n?e==="scale"?Y0:j0:($l=n||{})&&(e==="scale"?Z0:K0):t.style&&!ho(t.style[e])?X0:~e.indexOf("-")?q0:Ao(t,e)},core:{_removeProperty:Dr,_getMatrix:To}};Ie.utils.checkPrefix=ar;Ie.core.getStyleSaver=Su;(function(o,t,e,n){var i=ye(o+","+t+","+e,function(r){Pn[r]=1});ye(t,function(r){Le.units[r]="deg",Pu[r]=1}),Tn[i[13]]=o+","+t,ye(n,function(r){var s=r.split(":");Tn[s[1]]=i[s[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");ye("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(o){Le.units[o]="px"});Ie.registerPlugin(Ru);var sr=Ie.registerPlugin(Ru)||Ie;sr.core.Tween;const Iu="varying vec2 vectorUV;varying vec3 vertexNormal;void main(){vectorUV=uv;vertexNormal=normalize(normalMatrix*normal);gl_Position=projectionMatrix*viewMatrix*modelMatrix*vec4(position,1.0);}",Ou="uniform sampler2D globeTexture;varying vec2 vectorUV;varying vec3 vertexNormal;void main(){float intensity=0.5-dot(vertexNormal,vec3(1,0.1,0.7));vec3 atmosphere=vec3(0.1,0.6,0.6)*pow(intensity,1.1);gl_FragColor=vec4(atmosphere+texture2D(globeTexture,vectorUV).xyz,1.0);}",o_="varying vec3 vertexNormal;void main(){vertexNormal=normalize(normal);gl_Position=projectionMatrix*viewMatrix*modelMatrix*vec4(position,1);}",l_="varying vec3 vertexNormal;void main(){float intensity=pow(0.9-dot(vertexNormal,vec3(0,0,1)),2.2);gl_FragColor=vec4(0.4,0.5,0.5,1)*intensity;}",Es=document.getElementById("time-left"),oc=document.getElementById("leave"),c_=new Date("05/07/2023"),u_=new Date("05/16/2023"),Ca=1e3,yr=Ca*60,Ar=yr*60,Ui=Ar*24;let eo;function h_(){const o=new Date,t=u_-o,e=c_-o;if(t<=0){Es.innerHTML="Ready?",clearInterval(eo);return}if(t<=Ui){Es.innerHTML="Sending?",clearInterval(eo);return}if(e<=Ui){oc.innerHTML="Waiting for Profile.?",clearInterval(t);return}const n=Math.floor(t/Ui),i=Math.floor(t%Ui/Ar),r=Math.floor(t%Ar/yr),s=Math.floor(t%yr/Ca),a=Math.floor(e/Ui),l=Math.floor(e%Ui/Ar),c=Math.floor(e%Ar/yr),u=Math.floor(e%yr/Ca);Es.innerHTML=`${n}: Day  H: ${i} M:${r} S:${s}`,oc.innerHTML=`${a}D: H: ${l} M:${c} S:${u}: Leaving soon World V1`}eo=setInterval(h_,Ca);const da=document.getElementById("audio"),no=document.getElementById("play");let Cs=0;const f_=()=>{Cs===0?(Cs=1,da.loop=!0,da.play(),no.innerHTML="\xA9 Mim Soundtrack ON"):(Cs=0,da.loop=!1,da.pause(),no.innerHTML="\xA9 Mim Soundtrack OFF")};no.addEventListener("click",f_);const Ir=new Vg,Or=document.getElementById("container"),io=document.querySelector("#popup"),d_=document.querySelector("#population"),p_=document.querySelector("#populationValue"),m_=document.querySelector("#loc"),g_=document.querySelector("#info"),__=document.querySelector("#flag"),lc=document.createElement("img"),v_=document.getElementById("capital"),xa=new Ve(75,Or.offsetWidth/Or.offsetHeight,.1,1e3),Pa=new Lc({antialias:!0,canvas:document.querySelector("canvas")});Pa.setSize(Or.offsetWidth,Or.offsetHeight);Pa.setPixelRatio(window.devicePixelRatio);const Bu=new We(new kr(5,50,50),new fn({vertexShader:Iu,fragmentShader:Ou,uniforms:{globeTexture:{value:new Oc().load("./img/testa1.png")}}})),x_=new Oc().load("./img/moon.jpeg"),Eo=new We(new kr(1,50,50),new fn({vertexShader:Iu,fragmentShader:Ou,uniforms:{globeTexture:{value:x_}}})),Fu=new We(new kr(5,50,50),new fn({vertexShader:o_,fragmentShader:l_,blending:Ps,side:De}));Fu.scale.set(1.1,1.1,1.1);Ir.add(Fu);const Ge=new _r;Ge.add(Bu);Ge.add(Eo);Ir.add(Ge);const Nu=new pn,y_=new Rc({color:16777215}),Uu=[];for(let o=0;o<1e4;o++){const t=(Math.random()-.5)*2e3,e=(Math.random()-.5)*2e3,n=-Math.random()*2e3;Uu.push(t,e,n)}Nu.setAttribute("position",new en(Uu,3));const A_=new Gg(Nu,y_);Ir.add(A_);Eo.position.x=29;function C({lat:o,lng:t,countries:e,populations:n,flags:i,where:r,infos:s,capital:a}){const l=new We(new lr(.05,.05,1),new oo({color:"#FF0000",opacity:.5,transparent:!0})),c=o/180*Math.PI,u=t/180*Math.PI,h=5,f=h*Math.cos(c)*Math.sin(u),m=h*Math.sin(c),g=h*Math.cos(c)*Math.cos(u);l.position.x=f,l.position.y=m,l.position.z=g,l.lookAt(0,0,0),l.geometry.applyMatrix4(new $t().makeTranslation(0,0,-.4)),Ge.add(l),sr.to(l.scale,{z:.2,duration:3.5,yoyo:!0,repeat:-1,ease:"linear",delay:Math.random()}),l.countries=e,l.populations=n,l.flags=i,l.where=r,l.infos=s,l.capital=a}C({lat:23.6345,lng:-102.5528,countries:"Mexico",populations:"127.6 million",where:"North America",flags:"https://cdn.countryflags.com/thumbs/mexico/flag-800.png",infos:"Mexico, officially the United Mexican States, is a country in the southern portion of North America.",capital:"Mexico City"});C({lat:-14.235,lng:-51.9253,countries:"Brazil",populations:"211 million",where:"South America",flags:"https://cdn.countryflags.com/thumbs/brazil/flag-800.png",infos:"Brazil, officially the Federative Republic of Brazil.",capital:"Bras\xEDlia"});C({lat:20.5937,lng:78.9629,countries:"India",populations:"1.366 billion",where:"South Asia",flags:"https://www.countryflags.com/wp-content/uploads/india-flag-png-large.png",infos:"India, officially the Republic of India, is a country in South Asia.",capital:"New Delhi"});C({lat:35.8617,lng:104.1954,countries:"China",populations:"1.398 billion",where:"East Asia",flags:"https://cdn.countryflags.com/thumbs/china/flag-800.png",infos:"China, officially the People's Republic of China, is a country in East Asia.",capital:"Beijing"});C({lat:36.0902,lng:-95.7129,countries:"USA",populations:" 328.2 million",where:"North America",flags:"https://www.countryflags.com/wp-content/uploads/united-states-of-america-flag-png-large.png",infos:"The U.S. is a country of 50 states covering a vast swath of North America, with Alaska in the northwest and Hawaii.",capital:"Washington, D.C."});C({lat:42.546245,lng:1.601554,countries:"Andorra",populations:"79,034",where:"Europe",flags:"https://cdn.countryflags.com/thumbs/andorra/flag-800.png",infos:"Andorra is a tiny, independent principality situated between France and Spain in the Pyrenees mountains.",capital:"Andorra la Vella"});C({lat:23.424076,lng:53.847818,countries:"United Arab Emirates",populations:"9.365 million",where:"Middle East",flags:"https://www.countryflags.com/wp-content/uploads/united-arab-emirates-flag-png-large.png",infos:"The United Arab Emirates, or simply the Emirates, is a country in Western Asia.",capital:"Abu Dhabi"});C({lat:33.93911,lng:67.709953,countries:"Afghanistan",populations:"40.1 million ",where:"Asia",flags:"https://cdn.countryflags.com/thumbs/afghanistan/flag-800.png",infos:"Afghanistan, officially the Islamic Emirate of Afghanistan is a landlocked.",capital:"Kabul"});C({lat:17.060816,lng:-61.796428,countries:"Antigua and Barbuda",populations:" 93,219",where:"The Caribbean",flags:"https://cdn.countryflags.com/thumbs/antigua-and-barbuda/flag-800.png",infos:"Antigua and Barbuda is an independent Commonwealth country comprising its 2 namesake islands and several smaller ones.",capital:"Saint John's"});C({lat:51.165691,lng:10.451526,countries:"Germany",populations:" 83.2 million",where:"Europe",flags:"https://cdn.countryflags.com/thumbs/germany/flag-800.png",infos:"Germany is a Western European country with a landscape of forests, rivers, mountain ranges and North Sea beaches.",capital:"Berlin"});C({lat:18.220554,lng:-63.068615,countries:"Anguilla",populations:" 15,094",where:"British Overseas Territories",flags:"https://upload.wikimedia.org/wikipedia/commons/b/b4/Flag_of_Anguilla.svg",infos:"Anguilla, a British Overseas Territory in the Eastern Caribbean.",capital:"The Valley"});C({lat:41.153332,lng:20.168331,countries:"Albania",populations:" 2.812 million",where:"updating",flags:"https://cdn.countryflags.com/thumbs/albania/flag-800.png",infos:"Albania, on Southeastern Europe\u2019s Balkan Peninsula.",capital:"Tirana"});C({lat:40.069099,lng:45.038189,countries:"Armenia",populations:"2.791 million",where:"Asia",flags:"https://cdn.countryflags.com/thumbs/armenia/flag-800.png",infos:"Armenia is a nation, and former Soviet republic.",capital:"Yerevan"});C({lat:12.226079,lng:-69.060087,countries:"Netherlands Antilles",populations:" 26,845",where:"",flags:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALkAAAB7CAMAAAAfU9HRAAAAkFBMVEX///8BKofcFx0AKocAKIYABX///f7ZAADiFQUAKosAI4UAJoYAAH4AG4IAGYIAEYAAFYHgAAAAAHkACn8AH4TX3OmutdGwsMvBxtvz9PiMk7wkMooeL4kpQJEfOY48T5iFirZmdKni5O5hZqC/vtTQ0d8zRpOlqchBSZSTmsBFVJlTWp11f7GXosXr7fW2vNVfxCvvAAADtElEQVR4nO2ZiXKbMBCGRbVxW4mrHDZg8IEPakLM+79dhR0nTtMkYG827sx+zDDOgrR/fstihYTAYfT9Wz++j5AyYsHK6WHl9LByelg5PaycHlZODyunh5XTw8rpYeX0sHJ6WDk9rJweVk4PK6eHldPDyulh5fSwcnr+X+Xi149+/ELLeIdD+LMvIVJGAUjIE0o/fz6h9fNnrIRCWj2OATfpYnz39yVnsYyG9/TBISxUpPSy0gH5Mua2Y1vKt9pcCK7nrm3byWgV2KE+hcGzbU+MAnOWN+u5VIv1ZJ2KzWQy2epjDKyqnbRCtJN15SLmQvYc/OQ4YaUr5xRU8/gYi3+rm/XcsrS760SWtf80qqVjHf6dREWoqZDHuQVBalQu7PMLzr2Jje6jYT0Re25FtShbsbHPQtJ8D0ksMh83E7Ln0msTuMtK8/t8CoOOHwI/iYOb9hymja/AblbqLDhrQqmdHWoiC91zUN2TJ9LnYdmNcIiG9UTtuXV8Ukr5UQyBqz0H3eOm1z1p3eOmT/UcZjN9UbPikmbnXOm5dBYP3gWee7vMeafXz/a8K7X9Ng266nxgs2Df+gOb/c0VnkuYTfNpKuaQF3qA51DkuhapaTuDN3r+ZM+lXsSxKafKuKxc6N0MnKqM96YCi+NMXWH6NeMcouxYBo7zIZ7rfHxstlMwJB2e58Y+e9kVWFUwbJ7QQTYyNVhj9/+i/sF1c0vUlYGicfs7dTg5y0MNHw1Nh+d5VwbuMpEEw4arDBKxqMSDe9Vj9SrPQW8aL1zuQxjkOUTlKvSyjYYv8xzy2iyLvfl24DjfzlzT7D7/wnEOh6Wlgv5OHU76UOu8NbN8Ta3Y8a/Ri10oWujrUHOY7+H1JQUX9ETsOVjN6xWn21xUUb4LuufOMg5fXbI3jXvTnkutlL1Oa0edr0OVcup0bSulUUc7pudSbrdFXYpsVsynp4kDpvNithNlXWy33T236blapY/7Ce3TXA1W+xhLl+rd1gPBHef+78NLxNHOe15mam+RPr2yu1XPjevHt3MvChlprzrlQYQ7qSPPLXpqHBfjF+8VpV2ZmCjUoJ6oPQ8rU7xu9tb57K2tfRs2oyrETYXrOUzHta/0eHleekfLB0f5q+RQGiJ6jrVV9rjz5plnP3j5i+055Zs/IzdH3ptD2p38gv1QLOj3oJH4f/f9WTk9rJweVk4PK6eHldPDyulh5fSwcnpYOT2snB5WTg8rp4eV08PK6WHl9LByelg5PaycHlZOD73yP8o2f1rcx/tlAAAAAElFTkSuQmCC",infos:"The Netherlands Antilles was a constituent country of the Kingdom of the Netherlands.",capital:"Willemstad"});C({lat:-11.202692,lng:17.873887,countries:"Angola",populations:" 34.5 million",where:"Central Africa",flags:"https://cdn.countryflags.com/thumbs/angola/flag-800.png",infos:"Angola is a Southern African nation.",capital:"Luanda"});C({lat:-75.250973,lng:-.071389,countries:"Antarctica",populations:" 1,000 to 5,000 (seasonal)",where:"Continent",flags:"https://static.wixstatic.com/media/bd9fe1_fdde93dc1e724cd380d587024cec239a~mv2.png/v1/fill/w_560,h_356,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/1280px-Flag_of_the_Antarctic_Treaty_svg_.png",infos:"Antarctica, the southernmost continent",capital:"There is no capital"});C({lat:-38.416097,lng:-63.616672,countries:"Argentina",populations:" 45.81 million",where:"South America",flags:"https://cdn.countryflags.com/thumbs/argentina/flag-800.png",infos:"Argentina, officially the Argentine Republic.",capital:"Buenos Aires"});C({lat:-14.270972,lng:-170.132217,countries:"American Samoa",populations:"45,035",where:"US Territory",flags:"data:image/png;base64,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",infos:"American Samoa is a U.S. territory covering 7 South Pacific islands and atolls.",capital:"Pago Pago"});C({lat:47.516231,lng:14.550072,countries:"Austria",populations:"8.956 million",where:"Europe",flags:"https://cdn.countryflags.com/thumbs/austria/flag-800.png",infos:"Austria, formally the Republic of Austria, is a country in the southern part of Central Europe, lying in the Eastern Alps.",capital:"Vienna"});C({lat:-25.274398,lng:133.775136,countries:"Australia",populations:"25.69 million",where:"Oceania",flags:"https://www.countryflags.com/wp-content/uploads/flag-jpg-xl-9-2048x1024.jpg",infos:"Australia, officially the Commonwealth of Australia.",capital:"Canberra"});C({lat:12.52111,lng:-69.968338,countries:"Aruba",populations:" 106,537",where:"Mid-south of the Caribbean Sea",flags:"https://cdn.countryflags.com/thumbs/aruba/flag-800.png",infos:"Aruba, officially the Country of Aruba.",capital:"Oranjestad"});C({lat:26.820553,lng:30.802498,countries:"Egypt",populations:" 109.3 million",where:"North Africa - Middle East",flags:"https://cdn.countryflags.com/thumbs/egypt/flag-800.png",infos:"Egypt, a country linking northeast Africa with the Middle East.",capital:"Cairo"});C({lat:31.046051,lng:34.851612,countries:"Israel",populations:"9.364 million ",where:"The Middle East",flags:"https://cdn.countryflags.com/thumbs/israel/flag-800.png",infos:"Israel, a Middle Eastern country on the Mediterranean Sea, is regarded by Jews, Christians and Muslims as the biblical Holy Land.",capital:"Jerusalem"});C({lat:40.143105,lng:47.576927,countries:"Azerbaijan",populations:" 10.14 million",where:"which span Asia and Europe.",flags:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAT4AAACfCAMAAABX0UX9AAAAkFBMVEUAteJQni/vM0D///8AvOv6ISr4JkE9pC7vLjzvKTjvMT7vLDruHC7uIDHuFiruECb+9PX70NL8293zb3f95ebxVmDyZm7ze4L+7/D0g4n2m6DzdXzyanL5xMf70dPtABT1k5nwQ07wSVT5vcH3o6jxXWbtAAj0iY/72NrxUlzvOUX5x8n3qKz4s7b3rbH84eMwX1lWAAADrklEQVR4nO3ba2+iQBSAYVf2wgzDoEJrdVuLtV1t7eX//7v1UhGtYt2z2TmbvM+HpklpQt4MMMDQagEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPxFXyHQ+gaBVlsfGyfGJLG1oXfkNG35rHFp+yIfDPKHp9SZOPT+nKArn/Hjct6J3nW6wztvVI9BTfmMn75Fe4rSpYoD6skX+7KzH281Boc+Cb1vR6nJl971drNddefz+WxZtLhIQ+/dMVry+cFOuue87d2SHw8mUVR6pQewjnw2e6nFm+VZmmx6WZOmZdRV2k9FPuvntZGXZ3vnOmuy5zedV2AV+bKbbb2JMx83sOnjJNbYT0M+97ytV2aHK8XtvsYptIJ85nJb76c7tpW1T+tfVFUMn8+a7XRvcHqGklxqmgWGz+e2F91Xf3rzrKPpJBg8X3xX1Xv7xOwkuY4GB64toQTP5yZVvoemw9Ks/5hOotF6jMYaKobOZ21V76bp0DXDy+V00LrFhk+LQZr4i3sF/ULnM2WV77Hpmho/RL08M6a/nNyYJLscRT8VXENC5/O97ZmvecNRFBX92+5yy1/54r+K7B/tYpPA+VYH4/uEuflYTFazw2Jdevmjr+DYDZ0vyat84xOXXb/7QOtKw+ALnc8MNzk6p3LUSi9NNQy+0PnSatoyO3q7tmbNbf1J/tWtikcwgfO57qbHS9P9mk2cGXTrgy+aTWMXvmDofNUJ7bUhX+zym+ijbj8NPXcJnM8XmxbPx/PFD1cH4q1cB+7H6BMJnW+0aTHh3Hc+rrwizPtEkuuqB3cd57O+6sE97x9ws02+Hk9czsfzPpHa0+Y5T5vPx7sOkdqbtoI3bedzr1W/z7zn9bzn3WHT7SqDPqsMzsYaFxl3X7sXO7bCyuaqur3TkK+dba++R9f3vSSKTnkVFfmsrz2MOrS61LO6tMnu2ube7tpm58rFXE9lPSX5FvORaf1xSuf1er2y3vtx/yaK7pXWU5Ovnd7Noh2dXnc+euO7jk+Ks/7BN0Kd6f65UBE9+RYTwGxQ7McrSq/oHu0DTflWX1QOd76ofOSLyrPEfM8r9T99Tf4dAq0fEGh9gQD5RMgnQj4R8omQT4R8IuQTIZ8I+UTIJ0I+EfKJkE+EfCLkEyGfCPlEyCdCPhHyiZBPhHwi5BMhnwj5RMgnQj4R8omQT4R8IuQTIZ8I+UTIJ0I+EfKJkE+EfCLkEyGfCPlEyCdCPhHyiZBPhHwi5BMhnwj5RMgnQj6R30k1BoaZ0xT8AAAAAElFTkSuQmCC",infos:"Azerbaijan, the nation and former Soviet republic, is bounded by the Caspian Sea and Caucasus Mountains, which span Asia and Europe.",capital:"Baku"});C({lat:43.915886,lng:17.679076,countries:"Bosnia and Herzegovina",populations:" 3.271 million",where:"The Balkans",flags:"https://www.countryflags.com/wp-content/uploads/flag-jpg-xl-22-scaled.jpg",infos:"Bosnia and Herzegovina is a country on the Balkan Peninsula in southeastern Europe. ",capital:"Sarajevo"});C({lat:13.193887,lng:-59.543198,countries:"Barbados",populations:" 281,200 ",where:"The Caribbean",flags:"https://cdn.countryflags.com/thumbs/barbados/flag-800.png",infos:"Barbados is an eastern Caribbean island and an independent British Commonwealth nation.",capital:"Bridgetown"});C({lat:23.684994,lng:90.356331,countries:"Bangladesh",populations:" 169.4 million",where:"The South Asia",flags:"https://www.countryflags.com/wp-content/uploads/flag-jpg-xl-14-scaled.jpg",infos:"Bangladesh, to the east of India on the Bay of Bengal, is a South Asian country marked by lush greenery and many waterways.",capital:"Dhaka"});C({lat:50.503887,lng:4.469936,countries:"Belgium",populations:" 11.59 million",where:"Europe",flags:"https://www.countryflags.com/wp-content/uploads/flag-jpg-xl-18-scaled.jpg",infos:"Belgium, a country in Western Europe, is known for medieval towns, Renaissance architecture and as headquarters of the European Union and NATO.",capital:"Brussels"});C({lat:12.238333,lng:-1.561593,countries:"Burkina Faso",populations:" 22.1 million",where:"West Africa",flags:"https://www.countryflags.com/wp-content/uploads/burkina-faso-flag-png-large.png",infos:"Burkina Faso is a landlocked country in West Africa with an area of 274,200 km\xB2.",capital:"Ouagadougou"});C({lat:42.733883,lng:25.48583,countries:"Bulgaria",populations:"6.878 million",where:"The Balkans",flags:"https://cdn.countryflags.com/thumbs/bulgaria/flag-800.png",infos:"Bulgaria is a Balkan nation with diverse terrain encompassing Black Sea coastline, a mountainous interior and rivers, including the Danube.",capital:"Sofia"});C({lat:25.930414,lng:50.637772,countries:"Bahrain",populations:"1.463 million",where:"Middle East",flags:"https://cdn.countryflags.com/thumbs/bahrain/flag-800.png",infos:"Bahrain, officially the Kingdom of Bahrain, is an island country in Western Asia",capital:"Manama"});C({lat:-3.373056,lng:29.918886,countries:"Burundi",populations:"12.55 million",where:"East Africa",flags:"https://www.countryflags.com/wp-content/uploads/burundi-flag-png-large.png",infos:"Burundi, officially the Republic of Burundi, is a landlocked country in the Great Rift Valley at the junction between the African Great Lakes region and East Africa. ",capital:"Gitega"});C({lat:9.30769,lng:2.315834,countries:"Benin",populations:"13 million",where:"West Africa",flags:"https://cdn.countryflags.com/thumbs/benin/flag-800.png",infos:"Benin, a French-speaking West African nation.",capital:"Porto-Novo"});C({lat:32.321384,lng:-64.75737,countries:"Bermuda",populations:"63,867",where:"British Overseas Territories",flags:"data:image/png;base64,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",infos:"Bermuda is a British island territory in the North Atlantic Ocean.",capital:"Hamilton"});C({lat:4.535277,lng:114.727669,countries:"Brunei",populations:"445,373",where:"Asia",flags:"https://cdn.countryflags.com/thumbs/brunei/flag-800.png",infos:"Brunei is a tiny nation on the island of Borneo, in 2 distinct sections surrounded by Malaysia and the South China Sea.",capital:"Bandar Seri Begawan"});C({lat:-16.290154,lng:-63.588653,countries:"Bolivia",populations:"12.08 million",where:"South America",flags:"data:image/png;base64,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",infos:"Bolivia is a country in central South America, with a varied terrain spanning Andes Mountains, the Atacama Desert and Amazon Basin rainforest.",capital:"La Paz, Sucre"});C({lat:25.03428,lng:-77.39628,countries:"Bahamas",populations:"407,906 ",where:"The Caribbean",flags:"https://www.countryflags.com/wp-content/uploads/flag-jpg-xl-12-scaled.jpg",infos:"The Bahamas, officially the Commonwealth of The Bahamas, is an island country within the Lucayan Archipelago of the West Indies in the North Atlantic.",capital:"Nassau"});C({lat:27.514162,lng:90.433601,countries:"Bhutan",populations:"777,486 ",where:"South Asia",flags:"https://cdn.countryflags.com/thumbs/bhutan/flag-800.png",infos:"Bhutan, a Buddhist kingdom on the Himalayas\u2019 eastern edge, is known for its monasteries, fortresses (or dzongs) and dramatic landscapes that range from subtropical plains to steep mountains and valleys.",capital:"Thimphu"});C({lat:-54.423199,lng:3.413194,countries:"Bouvet Island",populations:"A Nature Reserve",where:"southwest of South Africa",flags:"https://cdn.countryflags.com/thumbs/norway/flag-800.png",infos:"Bouvet Island is an island in the southern part of the Atlantic Ocean",capital:"Oslo"});C({lat:-22.328474,lng:24.684866,countries:"Botswana",populations:"2.588 million",where:"Southern Africa",flags:"https://www.countryflags.com/wp-content/uploads/botswana-flag-png-square-large.png",infos:"Botswana, a landlocked country in Southern Africa, has a landscape defined by the Kalahari Desert and the Okavango Delta, which becomes a lush animal habitat during the seasonal floods.",capital:" Gaborone"});C({lat:53.709807,lng:27.953389,countries:"Belarus",populations:"9.34 million",where:"Europe",flags:"https://www.countryflags.com/wp-content/uploads/belarus-belarusian-flag-png-square-large.png",infos:"Belarus, officially the Republic of Belarus, is a landlocked country in Eastern Europe.",capital:"Minsk"});C({lat:17.189877,lng:-88.49765,countries:"Belize",populations:"400,03",where:"Central America",flags:"https://www.countryflags.com/wp-content/uploads/belize-belizean-flag-png-square-large.png",infos:"Belize is a nation on the eastern coast of Central America, with Caribbean Sea shorelines to the east and dense jungle to the west.",capital:"Belmopan"});C({lat:-12.164165,lng:96.870956,countries:"Cocos [Keeling] Islands",populations:"596(2009) ",where:"Australian external territory",flags:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHoAAAA9CAMAAABV2o0CAAAAllBMVEUAgAD/4AAAfgD/4gAAewD/5QAAeAD/5wD/6QCUrgAAcgAsiABFjwDMyQAhhQB3ogBxngA7jADCxQBqnQBjmQDVzgDy3ADl1gDd0gBXlQCIqgCxvAB+pQC8wgCWTwCktwCWXgCkWQDj2gBNhgCjXgBddwCqbAC3hQCyfgDAjwB1AADOpQDVrgBuAADauQD42QCOQgB9HADgX8k+AAADk0lEQVRYhe1Y25aUOBRNTk4SUtwpCHfRVuei0+PM//+cgVTZWhCbprHxofdLrUWF7HPfCYS84mgAGsABvIKc1TCoHMTLsgPGheSMMS55eH5J17EuOaMXMF6luH0vIKCQrDVeKHklZkxyQ96IzcwJQYkkWcctWvnN4yz0G06pVFv9hloWvJD1KmpU3MbZxJw3JMoKEwKZbOU+tZzy9rTKzGDymQ1xU3LuA5xCNgbe38acZp7ZzcvSFWuxYlOOq1xgNhhLKjmWHMu2pduvY8ppXK+wHHI+5RggHyK/Q4Jt0o3WyI1uY8BiFqxJl8gmp2t99sGkvUaViECPbg/bsg3nXOTnNVWGdKIOC63McvAJAsRtbzqs3FzkK7s6GOMth5MQZoBf30RRMsqijdQrAYmhZkqkJM1VC5Eh7kwohGJUuosU9pi0EJvQ9nXmmbaWA2nJ2xSjoipNBchgkQCE8IPAF89WmZHadNY0R1mQ5PW7OwEYjg8WqZF0obGScxp2ZFUxpK5Osb1lh2ghOv/9By8kYmp1vhBw0ehJZ0Z2T6+Ytig6JRzLogfFKkU7fPzDM79Tq+u5naSQdv70ibEraNRjlRgVXVglxXLVjLV8oQ4Dz/vzL2lIL0GYbaSntbyNbKIfrzbIJWNet+w2Dg8R51S++dtMdEvQ3W5srWT8PLPJ2QuiGd9wJeYh4mbRl0+f+VW4bwmwtwpX32yEmIaudA6VZkyX7fK/37lN+T/3/14s4c3NbjANn4XnfaN0kOWLwcfTQHV2cpUj6m9+e2/uv7BLud8uF+EU7uo2GJCadMreoXNYBP5sq+/epVdPP3/6z7PMela7NjF8JgxYG9NZ65rbKUDqrkYjc3ak0Pv/ba6Z9m+XT7PH/DF73t2ZdFLdb9NYiCp7IJVy7Fsmw7kP2FqFmwUWxFmW2pnOR4HjlLKuM67jhX3Q6vqCiGOr4G4r8fg+xn3JjNNlny8KA4YuahIg+AvhnuXMCbBy7bp1ub12QFTRTpcYZ66XAbFmetiH21XhLojeK1cdxlfA1dcOYH8On3Fz+wGuaeYCwF7Mzhn+EnAp10vgqtfJ5hvwdkT2RMP71aeU3fD0s9mOePKJdEeM53D6pHP4jtjt9rGR/hja3xsbv0c8G2Z2Z3hIRkB1qZd26pBqYCOOIIbxuxDLDmg9qK3GlOu+VO5Mnpp4/+TC8Sup8wqrI3w2CCKI6kOYX/GK3wJfATC5KRaXLhGIAAAAAElFTkSuQmCC",infos:"The Cocos (Keeling) Islands are a remote territory of Australia in the Indian Ocean.",capital:"West Island"});C({lat:56.130366,lng:-106.346771,countries:"Canada",populations:"38.25 million",where:"North America",flags:"https://www.countryflags.com/wp-content/uploads/canada-flag-png-large.png",infos:"Canada is a country in North America. Its ten provinces and three territories extend from the Atlantic Ocean to the Pacific Ocean and northward into the Arctic Ocean, covering over 9.98 million square kilometres, making it the world's second-largest country by total area.",capital:"Ottawa"});C({lat:-4.038333,lng:21.758664,countries:"Congo [DRC]",populations:"95.89 million",where:"Central Africa",flags:"https://www.countryflags.com/wp-content/uploads/congo-democratic-republic-of-the-flag-png-large.png",infos:"The Democratic Republic of the Congo is a country in Central Africa bordered to the west by the South Atlantic Ocean. ",capital:"Kinshasa"});C({lat:6.611111,lng:20.939444,countries:"Central African Republic",populations:"5.457 million ",where:"Central Africa",flags:"https://www.countryflags.com/wp-content/uploads/central-african-republic-flag-png-large.png",infos:"The Central African Republic is a landlocked country in Central Africa",capital:"Bangui"});C({lat:-.228021,lng:15.827659,countries:"Congo [Republic]",populations:"5.836 million",where:"Central Africa",flags:"https://www.countryflags.com/wp-content/uploads/congo-republic-of-the-flag-png-large.png",infos:"The Republic of the Congo, also called Congo-Brazzaville, is a central African nation with rainforest reserves that are habitats for gorillas.",capital:"Brazzaville"});C({lat:46.818188,lng:8.227512,countries:"Switzerland",populations:"8.703 million",where:"Europe",flags:"https://www.countryflags.com/wp-content/uploads/switzerland-flag-png-large.png",infos:"Switzerland is a mountainous Central European country, home to numerous lakes, villages and the high peaks of the Alps. ",capital:"Bern"});C({lat:7.539989,lng:-5.54708,countries:"C\xF4te d'Ivoire",populations:"27.48 million",where:"West Africa",flags:"https://www.countryflags.com/wp-content/uploads/cote-d-ivoire-flag-png-large.png",infos:"C\xF4te d'Ivoire is a West African country with beach resorts, rainforests and a French-colonial legacy.",capital:" Yamoussoukro"});C({lat:-21.236736,lng:-159.777671,countries:"Cook Islands",populations:"17,459 (2016)",where:"Island Country",flags:"data:image/png;base64,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",infos:"The Cook Islands is a nation in the South Pacific, with political links to New Zealand.",capital:"Avarua District"});C({lat:-35.675147,lng:-71.542969,countries:"Chile",populations:"19.49 million ",where:"South America",flags:"https://www.countryflags.com/wp-content/uploads/chile-flag-png-large.png",infos:"Chile is a long, narrow country stretching along South America's western edge, with more than 6,000km of Pacific Ocean coastline.",capital:"Santiago"});C({lat:7.369722,lng:12.354722,countries:"Cameroon",populations:"27.2 million ",where:"Central Africa",flags:"https://www.countryflags.com/wp-content/uploads/cameroon-flag-png-large.png",infos:"Cameroon, on the Gulf of Guinea, is a Central African country of varied terrain and wildlife.",capital:"Yaound\xE9"});C({lat:4.570868,lng:-74.297333,countries:"Colombia",populations:"51.52 million",where:"South America",flags:"https://www.countryflags.com/wp-content/uploads/colombia-flag-png-large.png",infos:"Colombia, officially the Republic of Colombia.",capital:"Bogot\xE1"});C({lat:9.748917,lng:-83.753428,countries:"Costa Rica",populations:"5.154 million",where:"Central America",flags:"https://www.countryflags.com/wp-content/uploads/costa-rica-flag-png-large.png",infos:"Costa Rica is a rugged, rainforested Central American country with coastlines on the Caribbean and Pacific.",capital:"San Jos\xE9"});C({lat:21.521757,lng:-77.781167,countries:"Cuba",populations:"11.26 million",where:"The Caribbean",flags:"https://www.countryflags.com/wp-content/uploads/cuba-flag-png-large.png",infos:"Cuba, officially the Republic of Cuba.",capital:"Havana"});C({lat:16.002082,lng:-24.013197,countries:"Cape Verde",populations:"587,925",where:"Africa",flags:"https://www.countryflags.com/wp-content/uploads/cape-verde-flag-png-large.png",infos:"Cape Verde or Cabo Verde, officially the Republic of Cabo Verd.",capital:"Praia"});C({lat:-10.447525,lng:105.690449,countries:"Christmas Island",populations:"1,402 (2010)",where:"Australian external territory",flags:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHoAAAA9CAMAAABV2o0CAAAAxlBMVEUAIa0cikL/xjn///8cjD8AHa8AhkL/yDkAiEIKPJz/yjgAhUMYelsAH60LP5odjzcAFbIYeF4AEbMAAKgAAKL3xTmJoj/WujvqwTodkTS7sT1alUGyrj3kvzoAFqvEszylqj6SpD68l2zktk5smUD3wj51nEDv8PhaYb5PkkE4jUL/zS4ABrKjhXuvjXSHcIgjKaqRdodCTbkpObPY2u6nq9l4fceBh8wAL6BjVZq8vuKVmdJPWbxsccM6RrbP0eoAbmNRSJ2W/C7nAAAEqklEQVRYhcWZi3LaOBSGZVxbqlR1WRtjLwZjbygXm6Q0IckWArTv/1Ir+YJvkiGAG01mMiMUff7P+c+RHMDXL399Uj5kAK37+YPgAADN+Pzln/bgoatL0YAr/7st5SjAgZgNkqEZX9tSjiw8IA1oBl+2pBz1IbZFukE+2jKcDjvQRo3otsKujxh7VNcNQAV++7AjF3ZEukF1cOU3hhObseteq6FbUI5c3GHsfkW3AH17w+kDzu5U0i1E38ZwBB1l6nHI3bPQNwh76Iz7C6QneN1hLg/KEZeirzYcGmIMGT7Wzp0G/XPQ2i2UEx93IIR4oKBE9bicbAGXUu9Ro/R6w+kBZilm+D5RLF7a5fISkJ/M3qzXXdHrDae7kLNZTbv8EZxTqunTbK0eZho9aTiEkKA1l1cMUuH8Cazyh4KAm8+qqr6YxdR364ZDyA18P3D1Zrq+sOOajsUvTqBjsqq+eiXfVZQjZQgx5CaCQ6UZTqaJ5k61ugQBB0BVZ70VLU+XDKf3s+1iF0luQNljhk6ymCVbR+ExSYKAa0+H1dqk9fmj4cjwGES+Ix4KbyEFuJ2xxxYcuUiKpivTo3VyHnbdx0XwwLH8Zt0KykIOAwtmDVVEoPGPcMSGYwdRHm7H1skYu835RoX0WBO5asGTlJT/50BrlO3Fj2HkY6cx5Gh6VI2dplxXyZXgez8jaOtWshnmlw/kQzxpkq2PkuKGTj/M150Em+azaRYLbfkvi7e/sCzMKitOMmIJHDRkGy0w94Tjl5vAyWBvXtTt85uWTxl3/IZJCJkGExJvhRQIR3LVSBlBbPkhQWcfmvEwX1l7ORRaGwXfUlDWRnUf1ppkYbCWgmEg6Dv5jsKhPa4ZerbLI04B84pfvIEEvNSgBKyHNsbihpfuR/dUSPfm25mqbl+1Avobnkx8PyCJ6tS9YtW6wu4Ldtj0zkV7h32tdSaye7OtSruFGeMOD3iV2E7AbZ26N8l18ShDiIQDbPcXMgMmCT0c1PVs7gnQwNuZ+33xoZjDYVKjzDwMPY7RscMn/tRdhAq7kCFlMR062F4Quf0S9Bv3Uk+cbw9opQ9YXeddNExVp3Xt+ja0+OBHmt2XRLqA9nbxMbmp9g6J9ZZ3eVsM0SIWffcrOVgQIaE7ZcMNyYmTXEmcYzIfz7USgHqvFbkC2RbvZOx39LP4inz69pIHnKH3m3Kq2fG1ftk/CdnL+5QNR4RwdHS/vOAOl4KA1y0bPE7CRlLuy4coO4DtEYTRw5LPvvfqnImsNRXexiTGY+zvOMpsHuHvy3T6fVdnyd4AdJ9Xu52w3PgwVg9WFGEcRdbDysjn3xN2KRp4mqfJP9WM5e8f9/c/fi8NrfLBuWGXb35qUK1rGF1BEZz7rnY5umGcp7wV9HmGawl9juFaQ58Oe4voU4YT/43s5LgALlcuWE49b66JXz8ugUsNJyCDeW/2Rh9vxZYaTrDU3LCLoCo+tC6Fi8IuQu/i++8N0eJ/DtRXeS+z+M5yM6ul8JpywSLPXLN431Z1DK8YTrSmu+lt5eflNfCS4YRLTNprOC+vg+dhb4fQBD8a7o+jk+/VOPwD0Nn3ah+CTnL+P7/pZVu8QWPXAAAAAElFTkSuQmCC",infos:"Christmas Island is an Australian territory in the Indian Ocean, lying south of Java, Indonesia.",capital:"Flying Fish Cove"});C({lat:35.126413,lng:33.429859,countries:"Cyprus",populations:"1.244 million",where:"The Middle East",flags:"https://www.countryflags.com/wp-content/uploads/cyprus-flag-png-large.png",infos:"Cyprus, officially the Republic of Cyprus.",capital:"Nicosia"});C({lat:49.817492,lng:15.472962,countries:"Czech Republic",populations:"10.51 million",where:"Europe",flags:"https://www.countryflags.com/wp-content/uploads/czech-republic-flag-png-large.png",infos:"The Czech Republic, also known as Czechia, is a landlocked country in Central Europe.",capital:"Prague"});C({lat:11.825138,lng:42.590275,countries:"Djibouti",populations:"1.106 million",where:"East Africa",flags:"https://www.countryflags.com/wp-content/uploads/djibouti-flag-png-large.png",infos:"Djibouti, on the Horn of Africa, is a mostly French- and Arabic-speaking country of dry shrublands, volcanic formations and Gulf of Aden beaches.",capital:"Djibouti city"});C({lat:56.26392,lng:9.501785,countries:"Denmark",populations:"5.857 million ",where:"Europe",flags:"https://www.countryflags.com/wp-content/uploads/denmark-flag-png-large.png",infos:"Denmark is a Scandinavian country comprising the Jutland Peninsula and numerous islands.",capital:"Copenhagen"});C({lat:15.414999,lng:-61.370976,countries:"Dominica",populations:"72,412",where:"The Caribbean",flags:"https://www.countryflags.com/wp-content/uploads/dominica-flag-png-large.png",infos:"Dominica is a mountainous Caribbean island nation with natural hot springs and tropical rainforests.",capital:"Roseau"});C({lat:18.735693,lng:-70.162651,countries:"Dominican Republic",populations:"11.12 million",where:"The Caribbean",flags:"https://www.countryflags.com/wp-content/uploads/dominican-republic-flag-png-large.png",infos:"The Dominican Republic is a Caribbean nation that shares the island of Hispaniola with Haiti to the west.",capital:"Santo Domingo"});C({lat:28.033886,lng:1.659626,countries:"Algeria",populations:"44.18 million",where:"North Africa",flags:"https://www.countryflags.com/wp-content/uploads/algeria-algerian-flag-png-square-large.png",infos:"Algeria is a North African country with a Mediterranean coastline and a Saharan desert interior. Many empires have left legacies.",capital:"Algiers [El Djaza\xEFr]"});C({lat:-1.831239,lng:-78.183406,countries:"Ecuador",populations:"17.8 million",where:"South America",flags:"https://www.countryflags.com/wp-content/uploads/ecuador-flag-png-large.png",infos:"Ecuador is a country straddling the equator on South America\u2019s west coast.",capital:"Quito"});C({lat:58.595272,lng:25.013607,countries:"Estonia",populations:"1.331 million",where:"Europe",flags:"https://www.countryflags.com/wp-content/uploads/estonia-flag-png-large.png",infos:"Estonia, a country in Northern Europe, borders the Baltic Sea and Gulf of Finland. ",capital:"Tallinn"});C({lat:24.215527,lng:-12.885834,countries:"Western Sahara",populations:"Estimated at 597,339",where:"North West Africa",flags:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFwAAABcCAMAAADUMSJqAAAAclBMVEUAAAAAej3////EERt6enp6poYAdjXBAAD78/PDAA325eX13+DEDBjntbb46er+/PzXenzrw8Tgnp/KQELTb3DLRUjelpjMTlDVdHbHLzLbjo/ourrYgYLx1tfSaWvEGx/JNzvjrKzuzMzipabQWV25AADdfKjEAAABgUlEQVRoge2W626DMAyFGdnmpE0p0NugTRmXvv8rzhntWmlc7E2RpsnnDwEdPtmOc4kikUgkEolEIpHo3+k5oKI4oP4MXLsmW7Lgmmhc5BsL22zNgu8WFJveK4ADK2wPN2Y170o2YGHPRCNcWXibyzUBo6CPgZTnHa7UXL66QHbZj1NO0T1cGXuc8pxAmaIfrs2kcwiOpUnHLQ4wuew2njCOwPHvnRuznDHww7UaKVTU3n2AK1ONdI2urLp1isZeb34Ax9KUg47MV8W5Mm/btsQkutprRZnYOxwR70NdU3t4Eq/Ay6eIj0tHKs4jHLum/u7IQVlf6GUHU7bfwWN96ul2MME5+GRZvLbGsy15HVEn9HMIVll8adhwQis63L0OnB2MtojszpeiBMjjYwUbHpy0/HVR+AD0+ULdGhkbV3O+vrfDkzMMJ265ydcHeuS8w4KlsMdc0AOac7Uw3KsFw8u/FHHMXIWFvwRU9BpQ0VNACVzgAhe4wAUucIELXOBj+gAe/DaTfkQ+NAAAAABJRU5ErkJggg==",infos:"Western Sahara is a disputed territory on the northwest coast and in the Maghreb region of North and West Africa. About 20% of the territory is controlled by the self-proclaimed Sahrawi Arab Democratic Republic, while the remaining 80% of the territory is occupied and administered by neighboring Morocco.",capital:"Laayoune"});C({lat:15.179384,lng:39.782334,countries:"Eritrea",populations:"3.62 million",where:"East Africa",flags:"https://www.countryflags.com/wp-content/uploads/eritrea-flag-png-xl.png",infos:"Eritrea is a northeast African country on the Red Sea coast.",capital:"Asmara"});C({lat:40.463667,lng:-3.74922,countries:"Spain",populations:"47.42 million",where:"Europe",flags:"https://www.countryflags.com/wp-content/uploads/spain-flag-png-large.png",infos:"Spain, a country on Europe\u2019s Iberian Peninsula, includes 17 autonomous regions with diverse geography and cultures.",capital:"Madrid"});C({lat:9.145,lng:40.489673,countries:"Ethiopia",populations:"120.3 million",where:"East Africa",flags:"https://www.countryflags.com/wp-content/uploads/ethiopia-flag-png-large.png",infos:"Born Here: Ethiopia, in the Horn of Africa, is a rugged, landlocked country split by the Great Rift Valley.",capital:"Addis Ababa"});C({lat:61.92411,lng:25.748151,countries:"Finland",populations:"5.541 million",where:"Europe",flags:"https://www.countryflags.com/wp-content/uploads/finland-flag-png-large.png",infos:"Finland is a Northern European nation bordering Sweden, Norway and Russia.",capital:"Helsinki"});C({lat:-16.578193,lng:179.414413,countries:"Fiji",populations:"924,610",where:"Oceania",flags:"https://www.countryflags.com/wp-content/uploads/fiji-flag-png-large.png",infos:"Fiji, a country in the South Pacific, is an archipelago of more than 300 islands. It's famed for rugged landscapes, palm-lined beaches and coral reefs with clear lagoons.",capital:"Suva"});C({lat:7.425554,lng:150.550812,countries:"Micronesia",populations:"113,131",where:"Oceania",flags:"https://www.countryflags.com/wp-content/uploads/micronesia-flag-png-large.png",infos:"The Federated States of Micronesia is a country spread across the western Pacific Ocean comprising more than 600 islands.",capital:"Palikir"});C({lat:46.227638,lng:2.213749,countries:"France",populations:"67.75 million",where:"Europe",flags:"https://www.countryflags.com/wp-content/uploads/france-flag-png-large.png",infos:"France, in Western Europe, encompasses medieval cities, alpine villages and Mediterranean beaches.",capital:"Paris"});C({lat:-.803689,lng:11.609444,countries:"Gabon",populations:"2.341 million",where:"Central Africa",flags:"https://www.countryflags.com/wp-content/uploads/gabon-flag-png-large.png",infos:"Gabon, a country along the Atlantic coast of Central Africa, has significant areas of protected parkland.",capital:"Libreville"});C({lat:55.378051,lng:-3.435973,countries:"United Kingdom",populations:"67.33 million",where:"Europe",flags:"https://www.countryflags.com/wp-content/uploads/united-kingdom-flag-png-large.png",infos:"The United Kingdom, made up of England, Scotland, Wales and Northern Ireland, is an island nation in northwestern Europe.",capital:"London"});C({lat:12.262776,lng:-61.604171,countries:"Grenada",populations:"124,610",where:"The Caribbean",flags:"https://www.countryflags.com/wp-content/uploads/grenada-flag-png-large.png",infos:"Grenada is a Caribbean country comprising a main island, also called Grenada, and smaller surrounding islands.",capital:""});C({lat:42.315407,lng:43.356892,countries:"Georgia",populations:"3.709 million",where:"Europe and Asia",flags:"https://cdn.countryflags.com/thumbs/georgia/flag-800.png",infos:"Georgia, a country at the intersection of Europe and Asia, is a former Soviet republic that\u2019s home to Caucasus Mountain villages and Black Sea beaches. ",capital:"Tbilisi"});C({lat:7.946527,lng:-1.023194,countries:"Ghana",populations:"32.83 million",where:"West Africa",flags:"https://www.countryflags.com/wp-content/uploads/ghana-flag-png-large.png",infos:"Ghana, officially the Republic of Ghana, is a country in West Africa.",capital:"Accra"});C({lat:36.137741,lng:-5.345374,countries:"Gibraltar",populations:" 32,669 ",where:"British Overseas Territories",flags:"data:image/png;base64,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",infos:"Gibraltar is a British Overseas Territory and headland, on Spain's south coast. It\u2019s dominated by the Rock of Gibraltar, a 426m-high limestone ridge.",capital:"Gibraltar"});C({lat:71.706936,lng:-42.604303,countries:"Greenland",populations:"56,653",where:"Island country",flags:"https://www.countryflags.com/wp-content/uploads/greenland-flag-jpg-xl.jpg",infos:"Greenland is an island country in North America that is part of the Kingdom of Denmark.",capital:"Nuuk"});C({lat:13.443182,lng:-15.310139,countries:"Gambia",populations:"2.64 million",where:"West Africa",flags:"https://www.countryflags.com/wp-content/uploads/gambia-flag-png-large.png",infos:"The Gambia is a small West African country, bounded by Senegal, with a narrow Atlantic coastline. It's known for its diverse ecosystems around the central Gambia River. ",capital:"Banjul"});C({lat:9.945587,lng:-9.696645,countries:"Guinea",populations:"13.53 million",where:"West Africa",flags:"https://www.countryflags.com/wp-content/uploads/guinea-flag-png-xl.png",infos:"Guinea is a country in West Africa, bordered on the west by the Atlantic Ocean. It's known for the Mount Nimba Strict Nature Reserve, in the southeast. ",capital:"Conakry"});C({lat:16.995971,lng:-62.067641,countries:"Guadeloupe",populations:"395,700 (2016)",where:"Departments of France",flags:"https://www.countryflags.com/wp-content/uploads/guadeloupe-flag-jpg-xl.jpg",infos:"Guadeloupe, a French overseas region, is an island group in the southern Caribbean Sea.",capital:"Basse-Terre"});C({lat:1.650801,lng:10.267895,countries:"Equatorial Guinea",populations:"1.634 million",where:"Central Africa",flags:"https://www.countryflags.com/wp-content/uploads/equatorial-guinea-flag-png-large.png",infos:"Equatorial Guinea is a Central African country comprising the Rio Muni mainland and 5 volcanic offshore islands. Capital Malabo, on Bioko Island, has Spanish colonial architecture and is a hub for the country\u2019s prosperous oil industry.",capital:"Malabo"});C({lat:39.074208,lng:21.824312,countries:"Greece",populations:"10.64 million",where:"The Balkans",flags:"https://www.countryflags.com/wp-content/uploads/greece-flag-png-large.png",infos:"Greece is a country in southeastern Europe with thousands of islands throughout the Aegean and Ionian seas. Influential in ancient times, it's often called the cradle of Western civilization. ",capital:"Athens"});C({lat:15.783471,lng:-90.230759,countries:"Guatemala",populations:"17.11 million",where:"Central America",flags:"https://www.countryflags.com/wp-content/uploads/guatemala-flag-png-large.png",infos:"Guatemala, a Central American country south of Mexico, is home to volcanoes, rainforests and ancient Mayan sites.",capital:"Guatemala City"});C({lat:13.444304,lng:144.793731,countries:"Guam",populations:"170,534",where:"Territory",flags:"https://www.countryflags.com/wp-content/uploads/guam-flag-jpg-xl.jpg",infos:"Guam is a U.S. island territory in Micronesia, in the Western Pacific. It's distinguished by tropical beaches, Chamorro villages and ancient latte-stone pillars. ",capital:"Hag\xE5t\xF1a"});C({lat:11.803749,lng:-15.180413,countries:"Guinea-Bissau",populations:"2.061 million",where:"West Africa",flags:"https://www.countryflags.com/wp-content/uploads/guinea-bissau-flag-png-large.png",infos:"Guinea-Bissau is a tropical country on West Africa\u2019s Atlantic coast that\u2019s known for national parks and wildlife.",capital:"Bissau"});C({lat:4.860416,lng:-58.93018,countries:"Guyana",populations:"804,567",where:"South America",flags:"https://www.countryflags.com/wp-content/uploads/guyana-flag-png-large.png",infos:"Guyana, a country on South America\u2019s North Atlantic coast, is defined by its dense rainforest. English-speaking, with cricket and calypso music, it's culturally connected to the Caribbean region.",capital:"Georgetown"});C({lat:31.354676,lng:34.308825,countries:"Gaza Strip",populations:"2.048 million",where:"The Middle East",flags:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAT4AAACfCAMAAABX0UX9AAAA/1BMVEUAAAAAljn////tLjjxJy8AlTYAkywAkSUAjx8AljIsolIAmj8gn0wTnUUAmDkAnDs2pFjzIyv2Ljj2JTf0ISneFhv5KjPsJjL/9vbwAABkdyumVSLXMiD7GDCsCAogAABqAAASAABiAAD+lJT/1NTtDh4cjjRpdSv5aGrjFBtCAAD2PECJAAHBDhE6AACAAAAxAAB1AACzCgwmAAAbAACkBwiKPz9vfn5ra2tdXV1PT09FRUU6OjouLi4fHx8YGBj6T1H6Wlz/o6T/39//trbuABP9d3f/6+v/xcT9h4j+np7/zMz6TU/+kpIxsGesUiJycSm1SyEtijKEaCdBhTFUncRRAAAEV0lEQVR4nO2biVrTQBRGi1N3rbaEVoS6R0DcVwRBUOuuuL3/s5h0gabZZiZzc5vc/zzBvefrYSYlbaxv3GsAazZV+z73DBWmqVTnAfcQ1cVTARsPuceoKkN9ynvEPUdFGelTXQRsxVgfArajPdGnvCfcs1SQY32q+5R7mOoxpU91Nh5zj1M1pvUhYGOi+hCwIc2oPtVZesY9UpWY1YeAjYjrQ8AGJOhDwPok6QsCvsE9V0VI1qe617gHqwYp+hCwHmn6ELAW6foQsAYZ+oKAr3OPN+9k6UPAuWTrQ8A55OjDCZxNnj4EnEm+PgScgYY+BJyOjj4EnIqePgScgqa+IODn3KPOI7r6EHAi+voQcAIG+vAMHMdEXxDwLe555wwzfar7gnvg+cJQHwKOYqoPJ3AEc30IeAoLfUHAN7nHnhds9OEEPsJOHwIeY6kPz8AjbPUh4CH2+hBwo5A+BFxMHwIuqE98wAX1Sb9CF9UnPODi+kQH7ECf5BPYhT6l/Jevtra2Xm9vb+/svHmzu7u7t7f3NoB7O3Lc6FP+1xMScaVPeftXuHdhwJk+1Rt8416mfNzpU2r5Nvc2peNSn/LFBexUn7yA3eoTF7Brfco/kBSwc32q59/hXqo83OsLApZzhabQJyhgEn1yAqbRJyZgKn1CAibTp3qegIDp9AUBv+PejhxKfcpf516PGlJ9qtl+z70gLbT6ah8wtT41qHXA5PpUs/OJe0k66PUFAX/g3pKMMvSpwUfuNakoRZ9qbtY04HL0qd7gM/emJJSkr67fIZSmz9vnXpWCsvQNvnBvSkJJ+mr6p68cffW9OZehr77XvjL01fihg15fs1vn76yo9dX8G1NifTX/uo9WX8+rc7ghlPr8A+7tyCHUV8+n3Chk+mS8p0GlT8h7ukT6JIQbQqJPRrghFPpkvB00hECfpLfDnevrDaSEG+Jan5ATd4JjfZLCDXGqT9yPipzq876LCjfEob7lH9zLlI8zffLCDXGlT+aPyV3p84WduBPc6PPWfl6e4VwCFxK4mMD5OK0EzqZzKovTmZwxwYW+xdW7rZMMLPDjQF9/pcW9BRvF9XlXL3EvwUdRfWG43DswUlBff0XwR2+hqD7R4YYU0Sc83JAC+qSHG2KvT3y4Ibb6EO4QS30Id4SdPoQ7xkYfwj3CQl8QLuyNMdeHcKcw1YdwIxjqw4kbxUwfwp3BRB/CjWGgD+HG0dfnrcFeDF19CDcRTX39Q1yVk9DTh3BT0NEXhAt7yWjow4mbTr4+XJUzyNOHcDPJ0Sf5BQwdsvXhxM0hSx/CzaXRzggX8vJI14dwNUjTh3C1SNEXPONyT1YJkvUhXE2S9CFcbRL09Q9xVdYlrg/hGjCrD+EaMaMP4ZoR1YdwDZnWt7iEcA2Z0tf/jX8HmXKsz/uFj54xE32Lq39gz5yGNw63hXAtGOlDuJaE+jpLCNeSQF8X4VrTaPf/4r5iTWP1H8K15z/VtUPvmfEc6gAAAABJRU5ErkJggg==",infos:"The Gaza Strip, or simply Gaza, is a Palestinian exclave on the eastern coast of the Mediterranean Sea",capital:"Gaza City"});C({lat:22.396428,lng:114.109497,countries:"Hong Kong",populations:"7.413 million",where:"Special administrative region of China",flags:"https://www.countryflags.com/wp-content/uploads/hongkong-flag-jpg-xl.jpg",infos:"Hong Kong, officially the Hong Kong Special Administrative Region of the People's Republic of China, is a city and special administrative region of China on the eastern Pearl River Delta in South China.",capital:"Hong Kong SAR or HKSAR"});C({lat:-53.08181,lng:73.504158,countries:"Heard Island and McDonald Islands",populations:"0",where:"Australian external territory",flags:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFwAAABcCAMAAADUMSJqAAAAwFBMVEUBIWn////kACsAIWnjABjuiI/vlpbujpIAH2gAAFnKzNjLytbDx9XiAAAAAF8AAF3jAB8AHGcACGE2H2SHjKnrbXPqXWf4ztH619sAGGZ+g6Pu7/MAAFTkACTrACfZCDI9QXj96OkYJWrrdXv2w8jsgIMAE2TiAAvl5uz84OEAAE9uc5e5vMzoU17qSVneho7XACIyOnU6LWyTmLJcYYxNVoVITX8AADvU2OL1tr3q1NnaWWnpx802EF1hapKmq8GhthSDAAAEyklEQVRoge1YDVPbOBCVIt+h+IhlqyagODkSBxyTGAoNSd32Cv//X50kf0S25VhcnZm2xxsyAbx62n1aaVcGF1cwRzChDgY6oKEN4Zk1kLDOILSHSGuIHToJ4N2tOxi4o/ElcN1xSR/7oYP5sOyn+CA9ed0IIOyEPqdezqyBawmngTtwVwfv4wmjTe+NPMeUTWK4uLUE9fhSsIHbkStCULyfNugNyDGdcq8Xy5GlsIF8rlE2l9Te96Q45uRcEE8KIh096ABEKFKlivaAYmSqOcIU+DqWCdDPGU8cRZyjnmPqlFrX4m9RSzwkBHeTY0Ky0W0rh5R1Xqlzh7n2beRl8lnNnMtmb2RoRTU+f6vmXGv9ipW7pVzvyIca7WV4WnIhp4h3VdUa+lEt14pM1RgHPj8UmuR8o7c7oyRp+UEUK2FeKmGu6+TrTEa32OiFjJiiyqGgom2BNudV8vNNbaMfEkAFGNawXnPvebgC9wclq+QQXl1IC3Xx1+s6FzhvIEkCCBc3Al/uWsgXX+Tzw+MgSZpMAJqi6rkRTkv+pynuZxn57N54CLBMkXNzdtMRKzA4Hf5+J//dyE+ain8Y4uyh2EQPZ6ZjfuGz5a8m7MPjq0uOm5s2cn4wCwNx8toaIkBqmJJJWlKPLVERspKk9fzyYTRajWbLBS8WfGgN1YYT0yGvQwX1hay+S+7XpF5DeRde0I9Hs4G1uhX0Q9qs+2X9d0T3dBjk5oP8abNAi06h4QTv0mrXh6JQZ8W5pOY12nJluLyia/oW2SmU9CtpfVd2aUUHUHQtXruxjlzrjBTHq/X3WUOkCdORYbb0ithx6jKOlotqY5S37qqRmy0QoV1dLiW6BCivDwiTUPF67PL5Zxdi/jC/ABxr/nl+NUdnchI+mtKa1u5KPgRKO3ms+edxAzVusVqWjJtS5cHV+BDWsNpOHr8T8d1RY5Hacwd1c0a19e68zWEa6eIHxXxWVa03XnK1K3cLahvdZ5rW3eSSy7Vn9cQEleTTXHBNyUFzt1jg67fHx+vr629fg6x11wGRJAg+CjOOx49BkJAWQ3EoBDn+uQffv38Q2M/nlVOh+s7Ae5rPP33I8Wk+f/I0RsUJNc+x34P8tuh5nv51SB6x8hh3mhY4YtUHmrG1/2pkpNq/Q4ufRvNTZpc3n5+OnW639G0jzDVE0zieohNp7j1B+NS3LhHLzhLxhsXPdMGMGQ3tjI297KhsBAg/1W0iS76ze2G9yMJ2MJ1gJ8JEFAGCI8fjjenOzPXO0BwuB0ye1xtBvlk/J/zLd3o6l9BUduyBLGGxrJPp1IzbILXYvqy8GYI96y8ViV8l90n3GGNgaqvctrZH+M/kw51KvhuakndrjiK2rYgebFmE+tGcTZ9jWEP8Mu0jzxHZ23Vqqfu+pTGqjgbHYsPeq45a4FW2Lz8iCw43m42/Tez0wJrayXbC/x3+cM5gFkXUIcPP5ZIGn4fEoRFjfeUjwsobCNx+T26MAx3CyS+2F7RJItOc9VyJInEk2o4jMmcTGQ8zA92KoxBjcUC+tUp3ATkJTCNeP70oha/mZ7mZ5jSNQ1nYWBintF/NMUvDfL+zMO0tCTMgEJY9hRf2nYoIH/7EqF9Z/n8w0/wNRu+ad+JX1fxfy5SdFv8wHUEAAAAASUVORK5CYII=",infos:"The Territory of Heard Island and McDonald Islands is an Australian external territory comprising a volcanic group of mostly barren Antarctic islands, about two-thirds of the way from Madagascar to Antarctica. ",capital:".....?"});C({lat:15.199999,lng:-86.241905,countries:"Honduras",populations:"10.28 million",where:"Central America",flags:"https://www.countryflags.com/wp-content/uploads/honduras-flag-png-large.png",infos:"Honduras is a Central American country with Caribbean Sea coastlines to the north and the Pacific Ocean to the south.",capital:"Tegucigalpa"});C({lat:45.1,lng:15.2,countries:"Croatia",populations:"3.899 million",where:"The Balkans",flags:"https://www.countryflags.com/wp-content/uploads/croatia-flag-png-large.png",infos:"Croatia, officially the Republic of Croatia, is a country at the crossroads of Central and Southeast Europe.",capital:"Zagreb"});C({lat:18.971187,lng:-72.285215,countries:"Haiti",populations:"11.45 million",where:"The Caribbean",flags:"https://www.countryflags.com/wp-content/uploads/haiti-flag-png-large.png",infos:"Haiti is a Caribbean country that shares the island of Hispaniola with the Dominican Republic to its east. ",capital:"Port-au-Prince"});C({lat:47.162494,lng:19.503304,countries:"Hungary",populations:"9.71 million",where:"Europe",flags:"https://www.countryflags.com/wp-content/uploads/hungary-flag-png-large.png",infos:"Hungary is a landlocked country in Central Europe.",capital:"Budapest"});C({lat:-.789275,lng:113.921327,countries:"Indonesia",populations:"273.8 million",where:"Asia",flags:"https://www.countryflags.com/wp-content/uploads/indonesia-flag-png-large.png",infos:"Indonesia, officially the Republic of Indonesia, is a country in Southeast Asia and Oceania between the Indian and Pacific oceans.",capital:"Jakarta"});C({lat:53.41291,lng:-8.24389,countries:"Ireland",populations:"5.033 million",where:" Europe",flags:"https://www.countryflags.com/wp-content/uploads/ireland-flag-png-large.png",infos:"The Republic of Ireland occupies most of the island of Ireland, off the coast of England and Wales.",capital:"Dublin"});C({lat:54.236107,lng:-4.548056,countries:"	Isle of Man",populations:"84,263",where:"Crown Dependencies",flags:"data:image/png;base64,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",infos:"The Isle of Man is a self-governing British Crown dependency in the Irish Sea between England and Ireland. It\u2019s known for its rugged coastline, medieval castles and rural landscape, rising to a mountainous center.",capital:"Douglas"});C({lat:-6.343194,lng:71.876519,countries:"British Indian Ocean Territory",populations:"About 4,000",where:"Indian Ocean",flags:"data:image/png;base64,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",infos:"The British Indian Ocean Territory is an Overseas Territory of the United Kingdom situated in the Indian Ocean, halfway between Tanzania and Indonesia.",capital:"Camp Thunder Cove"});C({lat:33.223191,lng:43.679291,countries:"Iraq",populations:"43.53 million",where:"The Middle East",flags:"https://www.countryflags.com/wp-content/uploads/iraq-flag-png-large.png",infos:"Iraq, officially the Republic of Iraq, is a country in Western Asia. It is bordered by Turkey to the north, Iran to the east, the Persian Gulf and Kuwait to the southeast, Saudi Arabia to the south, Jordan to the southwest and Syria to the west.",capital:"Baghdad"});C({lat:32.427908,lng:53.688046,countries:"Iran",populations:"87.92 million",where:"The Middle East",flags:"https://www.countryflags.com/wp-content/uploads/iran-flag-png-large.png",infos:"Iran, officially the Islamic Republic of Iran, and also called Persia, is a country located in Western Asia.",capital:"Tehran"});C({lat:64.963051,lng:-19.020835,countries:"Iceland",populations:"372,520",where:"Europe",flags:"https://www.countryflags.com/wp-content/uploads/iceland-flag-png-large.png",infos:"Iceland, a Nordic island nation, is defined by its dramatic landscape with volcanoes, geysers, hot springs and lava fields.",capital:"Reykjav\xEDk"});C({lat:44.1068,lng:9.7285,countries:"Italy",populations:"59.11 million",where:"Europe",flags:"https://www.countryflags.com/wp-content/uploads/italy-flag-png-large.png",infos:"Italy, a European country with a long Mediterranean coastline, has left a powerful mark on Western culture and cuisine. ",capital:"Rome"});C({lat:18.109581,lng:-77.297508,countries:"Jamaica",populations:"2.828 million",where:"The Caribbean",flags:"https://www.countryflags.com/wp-content/uploads/jamaica-flag-png-large.png",infos:"Jamaica, a Caribbean island nation, has a lush topography of mountains, rainforests and reef-lined beaches. ",capital:"Kingston"});C({lat:30.585164,lng:36.238414,countries:"Jordan",populations:"11.15 million",where:"The Middle East",flags:"https://www.countryflags.com/wp-content/uploads/jordan-flag-png-large.png",infos:"Jordan, an Arab nation on the east bank of the Jordan River, is defined by ancient monuments, nature reserves and seaside resorts.",capital:"Amman"});C({lat:36.204824,lng:138.252924,countries:"Japan",populations:"125.7 million",where:"East Asia",flags:"https://cdn.countryflags.com/thumbs/japan/flag-800.png",infos:"Japan is an island country in East Asia. It is situated in the northwest Pacific Ocean and is bordered on the west by the Sea of Japan, extending from the Sea of Okhotsk in the north toward the East China Sea, Philippine Sea, and Taiwan in the south",capital:"Tokyo"});C({lat:-.023559,lng:37.906193,countries:"Kenya",populations:"53.01 million",where:"East Africa",flags:"https://www.countryflags.com/wp-content/uploads/kenya-flag-png-large.png",infos:"Kenya is a country in East Africa with coastline on the Indian Ocean. It encompasses savannah, lakelands, the dramatic Great Rift Valley and mountain highlands.",capital:"Nairobi"});C({lat:42.8746,lng:74.5698,countries:"Kyrgyzstan",populations:"6.692 million",where:"Central Asia",flags:"https://www.countryflags.com/wp-content/uploads/kyrgyzstan-flag-png-large.png",infos:"Kyrgyzstan or the Kyrgyz Republic is a landlocked country in Central Asia. Kyrgyzstan is bordered by Kazakhstan to the north, Uzbekistan to the west, Tajikistan to the south, and the People's Republic of China to the east.",capital:"Bishkek"});C({lat:12.565679,lng:104.990963,countries:"Cambodia",populations:"16.59 million",where:"Asia",flags:"https://www.countryflags.com/wp-content/uploads/cambodia-flag-png-large.png",infos:"Cambodia is a Southeast Asian nation whose landscape spans low-lying plains, the Mekong Delta, mountains and Gulf of Thailand coastline.",capital:"Phnom Penh"});C({lat:-3.370417,lng:-168.734039,countries:"Kiribati",populations:"128,874",where:"Oceania",flags:"https://cdn.countryflags.com/thumbs/kiribati/flag-800.png",infos:"Kiribati, officially the Republic of Kiribati, is an island country in Oceania in the central Pacific Ocean. ",capital:"Tarawa"});C({lat:-11.875001,lng:43.872219,countries:"Comoros",populations:"821,625",where:"East Africa",flags:"https://www.countryflags.com/wp-content/uploads/comoros-flag-png-large.png",infos:"The Comoros is a volcanic archipelago off Africa\u2019s east coast, in the warm Indian Ocean waters of the Mozambique Channel.",capital:"Moroni"});C({lat:17.357822,lng:-62.782998,countries:"Saint Kitts and Nevis",populations:"47,606",where:"The Caribbean",flags:"https://www.countryflags.com/wp-content/uploads/saint-kitts-and-nevis-flag-png-large.png",infos:"Saint Kitts and Nevis is a dual-island nation situated between the Atlantic Ocean and Caribbean Sea.",capital:"Basseterre"});C({lat:40.339852,lng:127.510093,countries:"North Korea",populations:"25.97 million",where:"East Asia",flags:"https://cdn.countryflags.com/thumbs/north-korea/flag-800.png",infos:"North Korea, officially the Democratic People's Republic of Korea, is a country in East Asia. ",capital:"Pyongyang"});C({lat:35.907757,lng:127.766922,countries:"South Korea",populations:"51.74 million",where:"East Asia",flags:"https://cdn.countryflags.com/thumbs/south-korea/flag-800.png",infos:"South Korea, an East Asian nation on the southern half of the Korean Peninsula, shares one of the world\u2019s most heavily militarized borders with North Korea",capital:"Seoul"});C({lat:29.31166,lng:47.481766,countries:"Kuwait",populations:"4.25 million",where:"The Middle East",flags:"https://www.countryflags.com/wp-content/uploads/kuwait-flag-png-large.png",infos:"Kuwait, officially the State of Kuwait, is a country in Western Asia. It is situated in the northern edge of Eastern Arabia at the tip of the Persian Gulf, bordering Iraq to the north and Saudi Arabia to the south.",capital:"Kuwait City"});C({lat:19.513469,lng:-80.566956,countries:"Cayman Islands",populations:"68,136 ",where:"British Overseas Territories",flags:"data:image/png;base64,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",infos:"The Cayman Islands, a British Overseas Territory, encompasses 3 islands in the western Caribbean Sea",capital:"George Town"});C({lat:41.20438,lng:74.766098,countries:"Kazakhstan",populations:"19 million",where:"Central Asia",flags:"https://cdn.countryflags.com/thumbs/kazakhstan/flag-800.png",infos:"Kazakhstan, a Central Asian country and former Soviet republic, extends from the Caspian Sea in the west to the Altai Mountains at its eastern border with China and Russia.",capital:"Astana"});C({lat:19.85627,lng:102.495496,countries:"Laos",populations:"7.425 million",where:"Asia",flags:"https://cdn.countryflags.com/thumbs/laos/flag-800.png",infos:"Laos is a Southeast Asian country traversed by the Mekong River and known for mountainous terrain, French colonial architecture, hill tribe settlements and Buddhist monasteries.",capital:"Vientiane"});C({lat:6.877,lng:31.307,countries:"South Sudan",populations:"10.75 million",where:"North Africa",flags:"https://cdn.countryflags.com/thumbs/south-sudan/flag-800.png",infos:"South Sudan, officially the Republic of South Sudan, is a landlocked country in East Africa. ",capital:"Juba"});C({lat:33.854721,lng:35.862285,countries:"Lebanon",populations:"5.593 million",where:"The Middle East",flags:"https://cdn.countryflags.com/thumbs/lebanon/flag-800.png",infos:"Lebanon, officially the Republic of Lebanon or the Lebanese Republic, is a country in Western Asia. ",capital:"Beirut"});C({lat:13.909444,lng:-60.978893,countries:"Saint Lucia",populations:"179,651",where:"The Caribbean",flags:"https://cdn.countryflags.com/thumbs/saint-lucia/flag-800.png",infos:"Saint Lucia is an Eastern Caribbean island nation with a pair of dramatically tapered mountains, the Pitons, on its west coast. ",capital:"Castries"});C({lat:7.873054,lng:80.771797,countries:"Sri Lanka",populations:"22.16 million",where:"South Asia",flags:"https://www.countryflags.com/wp-content/uploads/sri-lanka-flag-png-large.png",infos:"Sri Lanka, formerly known as Ceylon and officially the Democratic Socialist Republic of Sri Lanka, is an island country in South Asia.",capital:"Colombo, Sri Jayawardenepura Kotte"});C({lat:6.428055,lng:-9.429499,countries:"Liberia",populations:"5.193 million",where:"West Africa",flags:"https://cdn.countryflags.com/thumbs/liberia/flag-800.png",infos:"Liberia is a country in West Africa, bordering Sierra Leone, Guinea and C\xF4te d'Ivoire. ",capital:"Monrovia"});C({lat:-29.609988,lng:28.233608,countries:"Lesotho",populations:"2.281 million",where:"Southern Africa",flags:"https://cdn.countryflags.com/thumbs/lesotho/flag-800.png",infos:"Lesotho, a high-altitude, landlocked kingdom encircled by South Africa, is crisscrossed by a network of rivers and mountain ranges including the 3,482m-high peak of Thabana Ntlenyana.",capital:"Maseru"});C({lat:47.166,lng:9.555373,countries:"Liechtenstein",populations:"39,039",where:"Europe",flags:"https://cdn.countryflags.com/thumbs/liechtenstein/flag-800.png",infos:"Liechtenstein is a German-speaking, 25km-long principality between Austria and Switzerland.",capital:"Vaduz"});C({lat:22.198745,lng:113.543873,countries:"Macau",populations:"686,607",where:"Special administrative region of China",flags:"https://cdn.countryflags.com/thumbs/macau/flag-800.png",infos:"Macau is an autonomous region on the south coast of China, across the Pearl River Delta from Hong Kong.",capital:"Macau"});C({lat:21.9162,lng:95.956,countries:"Myanmar [Burma]",populations:"53.8 million",where:"Asia",flags:"https://cdn.countryflags.com/thumbs/myanmar/flag-800.png",infos:"Myanmar (formerly Burma) is a Southeast Asian nation of more than 100 ethnic groups, bordering India, Bangladesh, China, Laos and Thailand.",capital:"Naypyidaw"});C({lat:55.169438,lng:23.881275,countries:"Lithuania",populations:"2.801 million",where:"Europe",flags:"https://cdn.countryflags.com/thumbs/lithuania/flag-800.png",infos:"Lithuania, officially the Republic of Lithuania, is a country in the Baltic region of Europe.",capital:"Vilnius"});C({lat:46.862496,lng:103.846656,countries:"Mongolia",populations:" 3.348 million",where:"East Asia",flags:"https://cdn.countryflags.com/thumbs/mongolia/flag-800.png",infos:"Mongolia, a nation bordered by China and Russia, is known for vast, rugged expanses and nomadic culture.",capital:"Ulaanbaatar"});C({lat:17.33083,lng:145.38469,countries:"Northern Mariana Islands",populations:"49,481",where:"Territory",flags:"data:image/png;base64,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",infos:"The Northern Mariana Islands are a U.S. commonwealth in the Pacific Ocean.",capital:"Saipan"});C({lat:14.641528,lng:-61.024174,countries:"Martinique",populations:"376,480",where:"French Region",flags:"https://cdn.countryflags.com/thumbs/france/flag-800.png",infos:"Martinique is a rugged Caribbean island that\u2019s part of the Lesser Antilles.",capital:"Fort-de-France"});C({lat:21.00789,lng:-10.940835,countries:"Mauritania",populations:"4.615 million",where:"Africa",flags:"https://cdn.countryflags.com/thumbs/mauritania/flag-800.png",infos:"Mauritania, officially the Islamic Republic of Mauritania, is a sovereign country in Northwest Africa.",capital:"Nouakchott"});C({lat:16.742498,lng:-62.187366,countries:"Montserrat",populations:"4,992 ",where:"British Overseas Territories",flags:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHoAAAA9CAMAAABV2o0CAAABfVBMVEUBIWn////IEC4Aor3HACfw0NLSXWSlPQjGAB/hmp4AAFsAGmbEAAwAAF+8vMoNFWTp6++nw8oAEWQAAAB6fZv0293DAACPjKdFlaakrLapNwDK0t7GyNUAfiAAAFHnpKdwdXo/S381QHgAmLGBF01qd3zUY2wAAEze4Of46erNPEvVDSUACWPbf4ZrbZAApcWqrcGSaIUAdB9xVhBYX4zRVVszOHPfY2W2yswAhJwAd43QAAAAP0oANkMAV2ZCMSmvmIpWAADWcHQASlvEu7F0bmhYZmf12cd6AAA/JCff1syatrr/69d6NjeAsbrGzcbEvp9FijxnWE8AeAKFoG7gz7hBYGYAi3yfiIAAjYyAADYALkEAeUHDkmDelUJgSCP/kQDtlxoYAADgjiV6joN7dFe4dAAAgmCwk1mUg13joik6cUiVmJrJcwC3ZACCIwA/CACeZlGYWgB4TQGYRCClVQWHeBNTZhiMNgCldmpdhRpOiEmVJgBzOgC5ZE4At60EAAAEBklEQVRYhe2X/V/aRhjACaOAeUGWYOhCIgWcBQsmKrrqrLOWyeZw1KGrm30Za9fp2rVq6UZntr99T165hFz8fBbIfuH7CwTu7nvPk+dyl8j8DKGRKpBUBIVJEVPJaDSanCJSjOMfiiyIRD4a4+MzZCQING3KxSKDynFqiinkQEzTceg2G0idj9F83JSjkXurIWIQ212CqUU7BKfcS22J7UQFS7g+Gk3zdtpN+bCaIot6qpEkBTJ7jkh5qCncHAPKzTzacig4p9pRXO6yGIE8iUZOImrSWVwjFOtyxpX2IqIuGvPyXoX/HdLm9hpUO83zqzd0Q9pWwzeet+aUWrs96BJMnUYow9CVSsVwELZa+61SMX5Ll9EOwdY1gcdWYwmmjuNZiGos4Bt8xgZSx/BEDfAN7gQyR6IBGFaz01jGrGbEjzHczQ7fnJGqq598NGB9A7m46aGm8ST18ZP4Bp/7qje5a9Q38NS0QovVfFq4nymWuqRxj9M/8OqRrmtLvcVx3BfbHHf/Psfh1ZkBi9m0PuBMrbZTm3Gr8zs7O3mCyC4iPdzDWeqNra0HjS+53eZXX2/h1axJlSyKhjhO8+ATRVstpow/Vnk6midyRbJqdfK51/LePe6b1v6+jFcbULZ4nqdpGL8wi+xcswVrVoYcu2ci6m9BXWq2/crMELvGhhOI46gwPDNvOaJutze5zsMDyTdq2KqtcWFBWeO6DkjI7Ghjdl6bNqpufcdJnYNDnwp3RBwbBDR0LHQ0THpHjqhL8iaomw99Eu4KpmAF43EYhgPaoLE+S7fb9UjpXLUOfRKOu4WerwDuFLnXNetUHx41l/3VVqodx1vMi4+z4NxRo2r5+2br6OCRT8I1cdJjxWjqO9qe7H7dG0Q+P/QMR9V3j44POp0ffNRLP87NzSnKUM2wGWVpTmNJcT+0QK7oLLk3YRZd1yecJEmPfRKu9656rBSWMQaeZjyWBaMztP0P1PKTp880dcdncY0UWy2Xftro/rwM6kchq+Wbz1+s//IS1NKvcjhqc13Lp6cbpfUH3TDVTOpTjbPfXuze2j3pgll6dUvndcbjXDhatSoAid/fvFX75y819Yqgs10c4QuiF2z2QkhovLl82z+/1NX6tdpgru8dCGqtYahViPv83UDdU8athoN4P2Hw/P35ipFwuBC2F8d8qyHsuhl2Qu1e/iFBif8J10I/N/agtUL7YLoT3b9AfSXBpdoed5EZ7tyF5b6Slv9uniUEtZGphmCGKs8dq4b6n77Qa0K225kQ0q1BVZW9nmBG3uupx+V6ODFrkPVc4wKeLQlBALHCjr24ESimLpa3L3ofGuUsG17IljySSeWUOhO2WGeaYaphLKkJEyZMmPA/8C/t+LAuNj2uhQAAAABJRU5ErkJggg==",infos:"Montserrat is a mountainous Caribbean island, part of the Lesser Antilles chain and a British Overseas Territory. Its Soufri\xE8re Hills volcano erupted in the 1990s, causing significant damage to the south of the island and leading to the creation of an exclusion zone.",capital:"Plymouth, Brades"});C({lat:35.937496,lng:14.375416,countries:"Malta",populations:"518,536",where:"Europe",flags:"https://www.countryflags.com/wp-content/uploads/malta-flag-png-large.png",infos:"Malta is an archipelago in the central Mediterranean between Sicily and the North African coast. ",capital:"Valletta"});C({lat:-20.348404,lng:57.552152,countries:"Mauritius",populations:"1.266 million",where:"East Africa",flags:"https://cdn.countryflags.com/thumbs/mauritius/flag-800.png",infos:"Mauritius, an Indian Ocean island nation, is known for its beaches, lagoons and reefs.",capital:"Port Louis"});C({lat:3.202778,lng:73.22068,countries:"Maldives",populations:"521,457",where:"South Asia",flags:"https://cdn.countryflags.com/thumbs/maldives/flag-800.png",infos:"Maldives, officially the Republic of Maldives, is an archipelagic state in South Asia, situated in the Indian Ocean",capital:"Mal\xE9"});C({lat:-13.254308,lng:34.301525,countries:"Malawi",populations:"19.89 million",where:"East Africa",flags:"https://cdn.countryflags.com/thumbs/malawi/flag-800.png",infos:"Malawi, a landlocked country in southeastern Africa, is defined by its topography of highlands split by the Great Rift Valley and enormous Lake Malawi.",capital:"Lilongwe"});C({lat:4.210484,lng:101.975766,countries:"Malaysia",populations:"33.57 million",where:"Asia",flags:"https://cdn.countryflags.com/thumbs/malaysia/flag-800.png",infos:"Malaysia is a Southeast Asian country occupying parts of the Malay Peninsula and the island of Borneo. It's known for its beaches, rainforests and mix of Malay, Chinese, Indian and European cultural influences. ",capital:"Federal Territory of Kuala Lumpur"});C({lat:-18.665695,lng:35.529562,countries:"Mozambique",populations:"32.08 million",where:"East Africa",flags:"https://cdn.countryflags.com/thumbs/mozambique/flag-800.png",infos:"Mozambique is a southern African nation whose long Indian Ocean coastline is dotted with popular beaches like Tofo, as well as offshore marine parks.",capital:"Maputo"});C({lat:-22.95764,lng:18.49041,countries:"Namibia",populations:"2.53 million",where:"Southern Africa",flags:"https://cdn.countryflags.com/thumbs/namibia/flag-800.png",infos:"Namibia, a country in southwest Africa, is distinguished by the Namib Desert along its Atlantic Ocean coast. The country is home to diverse wildlife, including a significant cheetah population",capital:"Windhoek"});C({lat:-20.904305,lng:165.618042,countries:"New Caledonia",populations:"271,030",where:"Territory",flags:"https://cdn.countryflags.com/thumbs/new-caledonia/flag-800.png",infos:"New Caledonia is a French territory comprising dozens of islands in the South Pacific.",capital:"Noum\xE9a"});C({lat:17.607789,lng:8.081666,countries:"Niger",populations:"25.25 million",where:"West Africa",flags:"https://cdn.countryflags.com/thumbs/niger/flag-800.png",infos:"Niger or the Niger, officially the Republic of the Niger, is a landlocked country in West Africa. It is a unitary state bordered by Libya to the northeast, Chad to the east, Nigeria to the south, Benin and Burkina Faso to the southwest, Mali to the west, and Algeria to the northwest.",capital:"Niamey"});C({lat:-29.040835,lng:167.954712,countries:"Norfolk Island",populations:"2,169",where:"Territory",flags:"https://upload.wikimedia.org/wikipedia/commons/4/48/Flag_of_Norfolk_Island.svg",infos:"Norfolk Island, a tiny Australian island in the South Pacific Ocean, is defined by pine trees and jagged cliffs.",capital:"Kingston"});C({lat:9.081999,lng:8.675277,countries:"Nigeria",populations:"213.4 million",where:"West Africa",flags:"https://cdn.countryflags.com/thumbs/nigeria/flag-800.png",infos:"Nigeria, an African country on the Gulf of Guinea, has many natural landmarks and wildlife reserves.",capital:"Abuja"});C({lat:12.865416,lng:-85.207229,countries:"Nicaragua",populations:"6.851 million",where:"Central America",flags:"https://cdn.countryflags.com/thumbs/nicaragua/flag-800.png",infos:"Nicaragua, set between the Pacific Ocean and the Caribbean Sea, is a Central American nation known for its dramatic terrain of lakes, volcanoes and beaches.",capital:"Managua"});C({lat:52.132633,lng:5.291266,countries:"Netherlands",populations:"17.53 million",where:"Europe",flags:"https://cdn.countryflags.com/thumbs/netherlands/flag-800.png",infos:"The Netherlands, a country in northwestern Europe, is known for a flat landscape of canals, tulip fields, windmills and cycling routes.",capital:"Amsterdam"});C({lat:60.472024,lng:8.468946,countries:"Norway",populations:"5.408 million",where:"Europe",flags:"https://cdn.countryflags.com/thumbs/norway/flag-800.png",infos:"Norway is a Scandinavian country encompassing mountains, glaciers and deep coastal fjords. Oslo, the capital, is a city of green spaces and museums.",capital:"Oslo"});C({lat:28.394857,lng:84.124008,countries:"Nepal",populations:"30.03 million",where:"South Asia",flags:"https://cdn.countryflags.com/thumbs/nepal/flag-800.png",infos:"Nepal, formally the Federal Democratic Republic of Nepal, is a landlocked country in South Asia. ",capital:"Kathmandu"});C({lat:49.815273,lng:6.129583,countries:"Luxembourg",populations:"640,064",where:"Europe",flags:"https://cdn.countryflags.com/thumbs/luxembourg/flag-800.png",infos:"Luxembourg is a small European country, surrounded by Belgium, France and Germany.",capital:"Luxembourg"});C({lat:56.879635,lng:24.603189,countries:"Latvia",populations:"1.884 million",where:"Europe",flags:"https://cdn.countryflags.com/thumbs/latvia/flag-800.png",infos:"Latvia is a country on the Baltic Sea between Lithuania and Estonia.",capital:"Riga"});C({lat:26.3351,lng:17.228331,countries:"Libya",populations:"6.735 million",where:"North Africa",flags:"https://cdn.countryflags.com/thumbs/libya/flag-800.png",infos:"Libya, officially the State of Libya, is a country in the Maghreb region in North Africa.",capital:"Tripoli"});C({lat:31.791702,lng:-7.09262,countries:"Morocco",populations:"37.08 million",where:"North Africa",flags:"https://cdn.countryflags.com/thumbs/morocco/flag-800.png",infos:"Morocco, a North African country bordering the Atlantic Ocean and Mediterranean Sea, is distinguished by its Berber, Arabian and European cultural influences.",capital:"Rabat"});C({lat:47.411631,lng:28.369885,countries:"Moldova",populations:"2.615 million",where:"Europe",flags:"https://cdn.countryflags.com/thumbs/moldova/flag-800.png",infos:"Moldova, an Eastern European country and former Soviet republic, has varied terrain including forests, rocky hills and vineyards.",capital:"Chi\u0219in\u0103u"});C({lat:42.708678,lng:19.37439,countries:"Montenegro",populations:"619,211 ",where:"The Balkans",flags:"https://cdn.countryflags.com/thumbs/montenegro/flag-800.png",infos:"Montenegro is a Balkan country with rugged mountains, medieval villages and a narrow strip of beaches along its Adriatic coastline.",capital:"Podgorica"});C({lat:-18.766947,lng:46.869107,countries:"Madagascar",populations:"28.92 million",where:" East Africa",flags:"https://cdn.countryflags.com/thumbs/madagascar/flag-800.png",infos:"Madagascar, officially the Republic of Madagascar is an island country in the Indian Ocean, approximately 400 kilometres off the coast of East Africa across the Mozambique Channel. At 592,800 square kilometres, it is the world's second-largest island country, after Indonesia.",capital:"Antananarivo"});C({lat:7.131474,lng:171.184478,countries:"Marshall Islands",populations:"42,050",where:"Oceania",flags:"https://cdn.countryflags.com/thumbs/marshall-islands/flag-800.png",infos:"The Marshall Islands are a sprawling chain of volcanic islands and coral atolls in the central Pacific Ocean, between Hawaii and the Philippines.",capital:"Majuro, Delap-Uliga-Djarrit"});C({lat:41.608635,lng:21.745275,countries:"Macedonia",populations:"2.065 million",where:"The Balkans",flags:"https://cdn.countryflags.com/thumbs/north-macedonia/flag-800.png",infos:"North Macedonia, officially the Republic of North Macedonia, is a country in Southeast Europe.",capital:"Skopje"});C({lat:17.570692,lng:-3.996166,countries:"Mali",populations:"21.9 million",where:"West Africa",flags:"https://cdn.countryflags.com/thumbs/mali/flag-800.png",infos:"Mali, officially the Republic of Mali, is a landlocked country in West Africa. Mali is the eighth-largest country in Africa, with an area of over 1,240,000 square kilometres.",capital:"Bamako"});C({lat:-.522778,lng:166.931503,countries:"Nauru",populations:"12,511",where:"Oceania",flags:"https://cdn.countryflags.com/thumbs/nauru/flag-800.png",infos:"Nauru is a tiny island country in Micronesia, northeast of Australia. It features a coral reef and white-sand beaches fringed with palms, including Anibare Bay on the east coast.",capital:"No official capital"});C({lat:-19.054445,lng:-169.867233,countries:"Niue",populations:"1,620",where:"Island country",flags:"https://cdn.countryflags.com/thumbs/niue/flag-800.png",infos:"Niue is a small island nation in the South Pacific Ocean. It\u2019s known for its limestone cliffs and coral-reef dive sites. Migrating whales swim in Niue's waters between July and October.",capital:"Alofi"});C({lat:-40.900557,lng:174.885971,countries:"New Zealand",populations:"5.123 million",where:"Oceania",flags:"https://cdn.countryflags.com/thumbs/new-zealand/flag-800.png",infos:"New Zealand is an island country in the southwestern Pacific Ocean.",capital:"Wellington"});C({lat:21.512583,lng:55.923255,countries:"Oman",populations:"4.52 million",where:"The Middle East",flags:"https://cdn.countryflags.com/thumbs/oman/flag-800.png",infos:"Oman, officially the Sultanate of Oman, is an Arab country located in Western Asia.",capital:"Muscat"});C({lat:8.537981,lng:-80.782127,countries:"Panama",populations:"4.351 million",where:"Central America",flags:"https://cdn.countryflags.com/thumbs/panama/flag-800.png",infos:"Panama is a country on the isthmus linking Central and South America.",capital:"Spanish Panam\xE1 or Ciudad de Panam\xE1"});C({lat:-9.189967,lng:-75.015152,countries:"Peru",populations:"33.72 million",where:"South America",flags:"https://cdn.countryflags.com/thumbs/peru/flag-800.png",infos:"Peru is a country in South America that's home to a section of Amazon rainforest and Machu Picchu, an ancient Incan city high in the Andes mountains.",capital:"Lima"});C({lat:-17.679742,lng:-149.406843,countries:"French Polynesia",populations:"304,032",where:"Country",flags:"data:image/png;base64,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",infos:"French Polynesia, an overseas collectivity of France, comprises more than 100 islands in the South Pacific, stretching for more than 2,000km. ",capital:"Papeete"});C({lat:-6.314993,lng:143.95555,countries:"Papua New Guinea",populations:"10,142,619",where:"Oceania",flags:"https://cdn.countryflags.com/thumbs/papua-new-guinea/flag-800.png",infos:"Papua New Guinea, in the southwestern Pacific, encompasses the eastern half of New Guinea and its offshore islands. ",capital:"Port Moresby"});C({lat:12.879721,lng:121.774017,countries:"Philippines",populations:"113.9 million",where:"Asia",flags:"https://cdn.countryflags.com/thumbs/philippines/flag-800.png",infos:"The Philippines, officially the Republic of the Philippines, is an archipelagic country in Southeast Asia.",capital:"Manila"});C({lat:30.375321,lng:69.345116,countries:"Pakistan",populations:"231.4 million",where:"South Asia",flags:"https://cdn.countryflags.com/thumbs/pakistan/flag-800.png",infos:"Pakistan, officially the Islamic Republic of Pakistan, is a country in South Asia. ",capital:"Islamabad"});C({lat:51.919438,lng:19.145136,countries:"Poland",populations:"37.75 million",where:"Europe",flags:"https://cdn.countryflags.com/thumbs/poland/flag-800.png",infos:"Poland, officially the Republic of Poland, is a country in Central Europe. ",capital:"Warsaw"});C({lat:46.941936,lng:-56.27111,countries:"Saint Pierre and Miquelon",populations:"5,888",where:"Territory",flags:"https://cdn.countryflags.com/thumbs/france/flag-800.png",infos:"Saint Pierre and Miquelon is a French archipelago south of the Canadian island of Newfoundland. Sparsely populated Miquelon-\xADLanglade island contains the Grand Barachois lagoon, home to seabirds and seals.",capital:"Saint-Pierre"});C({lat:-24.703615,lng:-127.439308,countries:"Pitcairn Islands",populations:"67 (2011)",where:"British Overseas Territories",flags:"https://upload.wikimedia.org/wikipedia/commons/8/88/Flag_of_the_Pitcairn_Islands.svg",infos:"The Pitcairn Islands, officially the Pitcairn, Henderson, Ducie and Oeno Islands, is a group of four volcanic islands in the southern Pacific Ocean that form the sole British Overseas Territory in the Pacific Ocean",capital:"Adamstown"});C({lat:18.220833,lng:-66.590149,countries:"Puerto Rico",populations:"3.264 million",where:"Territory",flags:"https://cdn.countryflags.com/thumbs/puerto-rico/flag-800.png",infos:"Puerto Rico is a Caribbean island and unincorporated U.S. territory with a landscape of mountains, waterfalls and the El Yunque tropical rainforest.",capital:"San Juan"});C({lat:39.399872,lng:-8.224454,countries:"Portugal",populations:"10.33 million",where:"Southern European",flags:"https://cdn.countryflags.com/thumbs/portugal/flag-800.png",infos:"Portugal is a southern European country on the Iberian Peninsula, bordering Spain. ",capital:"Lisbon"});C({lat:7.51498,lng:134.58252,countries:"Palau",populations:"18,024",where:"Oceania",flags:"https://cdn.countryflags.com/thumbs/palau/flag-800.png",infos:"Palau is an archipelago of over 500 islands, part of the Micronesia region in the western Pacific Ocean.",capital:"Ngerulmud"});C({lat:-23.442503,lng:-58.443832,countries:"Paraguay",populations:"6.704 million",where:"South America",flags:"https://cdn.countryflags.com/thumbs/paraguay/flag-800.png",infos:"Paraguay is a landlocked country between Argentina, Brazil and Bolivia, home to large swaths of swampland, subtropical forest and chaco, wildernesses comprising savanna and scrubland.",capital:"Asunci\xF3n"});C({lat:25.354826,lng:51.183884,countries:"Qatar",populations:"2.688 million ",where:"The Middle East",flags:"https://cdn.countryflags.com/thumbs/qatar/flag-800.png",infos:"Qatar is a peninsular Arab country whose terrain comprises arid desert and a long Persian (Arab) Gulf shoreline of beaches and dunes.",capital:"Doha"});C({lat:-21.115141,lng:55.536384,countries:"R\xE9union",populations:"859,959",where:"Departments of France",flags:"https://cdn.countryflags.com/thumbs/france/flag-800.png",infos:"R\xE9union Island, a French department in the Indian Ocean, is known for its volcanic, rainforested interior, coral reefs and beaches.",capital:"Saint-Denis"});C({lat:45.943161,lng:24.96676,countries:"Romania",populations:"19.12 million",where:"The Balkans",flags:"https://cdn.countryflags.com/thumbs/romania/flag-800.png",infos:"Romania is a southeastern European country known for the forested region of Transylvania, ringed by the Carpathian Mountains.",capital:"Bucharest"});C({lat:44.016521,lng:21.005859,countries:"Serbia",populations:"6.834 million",where:"The Balkans",flags:"https://cdn.countryflags.com/thumbs/serbia/flag-800.png",infos:"Serbia, officially the Republic of Serbia, is a landlocked country in Southeastern and Central Europe, situated at the crossroads of the Pannonian Basin and the Balkans.",capital:"Belgrade"});C({lat:61.52401,lng:105.318756,countries:"Russia",populations:"143.4 million",where:"Country",flags:"https://cdn.countryflags.com/thumbs/russia/flag-800.png",infos:"Russia is a federation of 86 republics, provinces, territories, and districts, all controlled by the government in Moscow.",capital:"Moscow"});C({lat:-1.940278,lng:29.873888,countries:"Rwanda",populations:"13.46 million",where:"East Africa",flags:"https://cdn.countryflags.com/thumbs/rwanda/flag-800.png",infos:"Rwanda, officially the Republic of Rwanda, is a landlocked country in the Great Rift Valley of Central Africa, where the African Great Lakes region and Southeast Africa converge.",capital:"Kigali"});C({lat:23.885942,lng:45.079162,countries:"Saudi Arabia",populations:"35.95 million",where:"The Middle East",flags:"https://cdn.countryflags.com/thumbs/saudi-arabia/flag-800.png",infos:"Saudi Arabia, officially the Kingdom of Saudi Arabia, is a country in Western Asia. It covers the bulk of the Arabian Peninsula, and has a land area of about 2,150,000 km\xB2, making it the fifth-largest country in Asia, the second-largest in the Arab world, and the largest in Western Asia and the Middle East.",capital:"Riyadh"});C({lat:-9.64571,lng:160.156194,countries:"Solomon Islands",populations:"707,851",where:"Oceania",flags:"https://cdn.countryflags.com/thumbs/solomon-islands/flag-800.png",infos:"The Solomon Islands, a nation of hundreds of islands in the South Pacific, has many WWII-era sites. Guadalcanal, a province and one of the archipelago\u2019s largest islands, honors fallen Allied soldiers at its U.S. War Memorial. Guadalcanal is also home to the nation\u2019s capital, Honiara, whose bustling Central Market showcases the islands\u2019 produce and traditional handicrafts.",capital:"Honiara"});C({lat:-4.679574,lng:55.491977,countries:"Seychelles",populations:"99,258",where:"East Africa",flags:"https://cdn.countryflags.com/thumbs/seychelles/flag-800.png",infos:"The Seychelles is an archipelago of 115 islands in the Indian Ocean, off East Africa.",capital:"Victoria"});C({lat:12.862807,lng:30.217636,countries:"Sudan",populations:"45.66 million",where:"North Africa",flags:"https://cdn.countryflags.com/thumbs/sudan/flag-800.png",infos:"Sudan, officially the Republic of the Sudan, is a country in Northeast Africa. It is bordered with the Central African Republic to the southwest, Chad to the west, Egypt to the north, Eritrea to the northeast, Ethiopia to the southeast, Libya to the northwest, South Sudan to the south and the Red Sea",capital:"Khartoum"});C({lat:60.128161,lng:18.643501,countries:"Sweden",populations:"10.42 million",where:"Europe",flags:"https://cdn.countryflags.com/thumbs/sweden/flag-800.png",infos:"Sweden is a Scandinavian nation with thousands of coastal islands and inland lakes, along with vast boreal forests and glaciated mountains.",capital:"Stockholm"});C({lat:1.352083,lng:103.819836,countries:"Singapore",populations:"5.454 million ",where:"Asia",flags:"https://cdn.countryflags.com/thumbs/singapore/flag-800.png",infos:"Singapore is a multiracial, multiethnic, and multicultural Asian society.",capital:"Singapore (city-state)"});C({lat:-24.143474,lng:-10.030696,countries:"Saint Helena",populations:"4,255",where:"British Overseas Territory",flags:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQd1KGNoQgLOkDJwOlybylUyc8bFF1xvdhGXQ&usqp=CAU",infos:"St. Helena island, part of the British Overseas Territory also encompassing Ascension and Tristan da Cunha islands, is a remote volcanic outpost in the South Atlantic Ocean.",capital:"Jamestown"});C({lat:46.151241,lng:14.995463,countries:"Slovenia",populations:"2.108 million",where:"The Balkans",flags:"https://cdn.countryflags.com/thumbs/slovenia/flag-800.png",infos:"Slovenia, a country in Central Europe, is known for its mountains, ski resorts and lakes.",capital:"Ljubljana"});C({lat:77.553604,lng:23.670272,countries:"Svalbard and Jan Mayen",populations:"2,552",where:"Country",flags:"https://cdn.countryflags.com/thumbs/norway/flag-800.png",infos:"Jan Mayen is a remote island in the Arctic Ocean; it has no permanent population and is administered by the County Governor of Nordland.",capital:"Longyearbyen"});C({lat:48.669026,lng:19.699024,countries:"Slovakia",populations:"5.447 million ",where:"Europe",flags:"https://cdn.countryflags.com/thumbs/slovakia/flag-800.png",infos:"Slovakia, officially the Slovak Republic, is a landlocked country in Central Europe. It is bordered by Poland to the north, Ukraine to the east, Hungary to the south, Austria to the southwest, and the Czech Republic to the northwest.",capital:"Bratislava"});C({lat:8.460555,lng:-11.779889,countries:"Sierra Leone",populations:"8.421 million",where:"West Africa",flags:"https://cdn.countryflags.com/thumbs/sierra-leone/flag-800.png",infos:"Sierra Leone is a country in West Africa, on the Atlantic Ocean. It\u2019s known for the white-sand beaches lining the Freetown Peninsula.",capital:"Freetown"});C({lat:43.94236,lng:12.457777,countries:"San Marino",populations:"33,745",where:"Europe",flags:"https://cdn.countryflags.com/thumbs/san-marino/flag-800.png",infos:"San Marino is a mountainous microstate surrounded by north-central Italy. Among the world\u2019s oldest republics, it retains much of its historic architecture. ",capital:"San Marino"});C({lat:14.497401,lng:-14.452362,countries:"Senegal",populations:"16.88 million",where:"West Africa",flags:"https://www.countryflags.com/wp-content/uploads/senegal-flag-png-large.png",infos:"Senegal, officially the Republic of Senegal, is a country in West Africa, on the Atlantic Ocean coastline.",capital:"Dakar"});C({lat:5.152149,lng:46.199616,countries:"Somalia",populations:"17.07 million",where:"East Africa",flags:"https://www.countryflags.com/wp-content/uploads/somalia-flag-png-large.png",infos:"Somalia, officially the Federal Republic of Somalia, is a country in the Horn of Africa. ",capital:"Mogadishu"});C({lat:3.919305,lng:-56.027783,countries:"Suriname",populations:"612,985 ",where:"South America",flags:"https://cdn.countryflags.com/thumbs/suriname/flag-800.png",infos:"Suriname is a small country on the northeastern coast of South America.",capital:"Paramaribo"});C({lat:.18636,lng:6.613081,countries:"S\xE3o Tom\xE9 and Pr\xEDncipe",populations:"71,868",where:" Central Africa",flags:"https://cdn.countryflags.com/thumbs/sao-tome-and-principe/flag-800.png",infos:"S\xE3o Tom\xE9 is the capital and largest city of the Central African island country of S\xE3o Tom\xE9 and Pr\xEDncipe. ",capital:"S\xE3o Tom\xE9"});C({lat:34.802075,lng:38.996815,countries:"Syria",populations:"21.32 million",where:"The Middle East",flags:"https://cdn.countryflags.com/thumbs/syria/flag-800.png",infos:"Syria, officially the Syrian Arab Republic, is a Western Asian country located in the Eastern Mediterranean and the Levant.",capital:"Damascus"});C({lat:-26.522503,lng:31.465866,countries:"Swaziland",populations:"1.192 million ",where:"Southern Africa",flags:"https://cdn.countryflags.com/thumbs/swaziland/flag-800.png",infos:"Not Found",capital:"Eswatini"});C({lat:21.694025,lng:-71.797928,countries:"Turks and Caicos Islands",populations:"45,114",where:"British Overseas Territories",flags:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHoAAAA9CAMAAABV2o0CAAABL1BMVEUAKGj////OESbLAADNAB7XXWHy0NHMABP80RbkmpwAImUAAFoAC168vMoAHGPp6++ytst6fZoAE2D129z0zzujqb/qo6T+0QDGydX31VgAmUfK097/1hEAAFYAAFBGU4CFG0o/THzZZGk2RHcAAEre4OfSPEPcDRref4Py1W9rbY+YoLrRAAyCiaz33Ympr8GUaoP76rfv6dn4zyr24qLz58Lx1nseMGzoqqzWVlgzPHP46enXAAD4xyPfswzWpwracXPwtzj0o1n7yED4mabMnRC+jA7yrGHrmbP4rnW6fw6sbwz+r1T2o2+QSAibWAr+oJvkpcj4qIXkk6DwuFnQXCDopht9MgaLABs6AAvWuBEAAAeDADKqABp5AA5Hn0A7hEJaeT3EvSdmoDmPrzYtwhvWAAAD00lEQVRYhe2YCVPaQBTHTcCyEoQSSzeFVUS0RZFi8agVE5AKWqSItrXWHljh+3+Gvt1gzt06nSAzneE/o7OT7L7fvmOPMLOyIFHN55TojFOxeWkuIstyZE6aj7neRJWcJu3L4dDswuJMEIXAAoNreRdchAZwRnoum8OWAqH3wzbc6TkfbYKtIcHQmuUChWctOA8dVbImeJQlTQmEZtZCtrX7sPvRUSWfcc0zF4zsSZ4ddi86KppjQHjWmUAT7kYL5jcGmZYjTsuKA624i2uMYBPuSWTegc6b8xprqEGKpdUDjSXz3RNGSFhoaIWsOc0frNpDgqETDq2B6Wq1ajIkC02fVavms8Sao78UbDeTxLLQQgXbUmbFehkGdPiluMO7eCB0WCzZlLjDZiDyjBxAr6bokeIxnrhFERIrwuxHxB0OOeTkU56SPPYTsQqswgt/6eHfU9Ty+jO/1ssqBz3mda2mXmBdJwRhBCLEMGqE4BcpHjppa6OYYAYXCoV6YcGL3q/X69AubjhG+MNI0UcN/f2xTtFNo9mCP8RHx0dSF/OaCZ4NhcJzkqZZaM31IpNbVO8H+c0xrxuNk9MPBKFard0+a7eaNT7aFBxcI/srUD7Pwf6S4+Raytlwmb4UH12A1o8anY+n1G2jaZx1z+G/GA13BbdtOBZdVwXfzLIiOKDJUafROz0+AbebzfNutyUKuMfj8L1dzwXJNzuB59TrRueyd9G7JBBw/Ry8rgkCzi70Viptm75roaijD42POp3exTGgkY7a3TNiED5alEbOZdgHz/rZFE0Q5LoHK4xs681uixiCxeUuLtsR7ieACw4z5a9r8Lbx6TNpfrkiOvpq/A3tKC77ueDDx1UYhxyvi+t0M9ER2b6Wv+k6VDgy8HqRiwbwpuwvWorepGey93PPLrgV3h5ees32MYRuruXvNdQ6byMdvy7x9vCtH8vLy6myb7XEk+WtZaqtsnfTAngqlSqXy1t+g9HsGxNNrn6Gf11BvqHa8BtOVQCChUn1v4qPnkVVDkBl4rmiVkbo/u3v2z5hbVwRb2ZjVEzbZri7dL+fTt+x9rYWe3hgcMWTO8zt/oCi+8zpHe5xPX7FEszRNEOnWQgSE3Ga1jh1G+I9GKRZxPEOt74fQ7EMuDrsAxvQQwhAZkJOQ/nnK4gMBv00RQ8IquTH+Fn6gNTSLh4CluZ6iHdLE1lZIynFXXwzhBof3uDdYtCfPf6RXaogDBsZRpXSZMkQ8+zaHsZ4by07yWibisdTlb1KindzfHzF3hbfTmxVeRTlnElTTTXVVFNNNdX/pT/Zj5P17l4zfgAAAABJRU5ErkJggg==",infos:"Turks and Caicos is an archipelago of 40 low-lying coral islands in the Atlantic Ocean, a British Overseas Territory southeast of the Bahamas.",capital:""});C({lat:15.454166,lng:18.732207,countries:"Chad",populations:"17.18 million ",where:"Central Africa",flags:"https://cdn.countryflags.com/thumbs/chad/flag-800.png",infos:"Chad, officially the Republic of Chad, is a landlocked country at the crossroads of North and Central Africa.",capital:"N'Djamena"});C({lat:-49.280366,lng:69.348557,countries:"French Southern Territories",populations:"150 to 300 people, depending on the season",where:"Oceania",flags:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFwAAABcCAMAAADUMSJqAAAAllBMVEUAJlT////OESYAFUwAAD+an63MABHsrqzf3uIAAEQAIFEAAEIAI1IAADTU1tzNAB3bamvBxM0ACUgAHVAAADyjp7QYL1oAADEAD0oAGE3l5ukAADfHytFRWXXt7vHz9PZxd4wxO2A2Qma3vMbLAADaYmP2x8aBg5WKjp5DTW4AABVdZH6ssLwAACgmM1tLUnBmboYAAAoEaH1BAAADEUlEQVRoge2Y0ZaaMBCGSYGWhMjWEBQRAUNboLKrff+XayYJ6G71AsOe0wv+Cw7g4XP4MzMZdb4Yff3mu87cWuALfIEv8AW+wBf4Al/gC3yBL3B7vRj9+Az4d6Ofvz4BHo1qdrPD8aj52YusxLxHwtbsNMmCB8pDWzh10CMdiHXorH3Arj1rtuPw4D7c0vJYHUk3uK6Y5jyrdM941hrXmBqb7Pit4Km5MuzDc+VNSfDe1ZWCx5hJDQGz+vRE7C7zWuRhFn+EJ6D+TCFsxl5Rv2fpVHbb+xmqk/4msNV1MQsGryb6JEGln/jxY9A90bdcUfwbS2/gZ4VzK73E3US4Q3kvn+t0vsXxe3jNNS4l8iLn0133cpShSgW+q9R2ouGZFO4S8MUhR1Sgcj+Z7aSo8upIRR6WJR7haYixrKsNrGjaR+SAzpMjJ4cudbwGshn3utY1XFJT2REiDq/UYLrbXKbbQuARcIMIs4QDnILTSFUoWE+nLueteKaSzxvhPJ+jtyhBVyxLmZTYwFNIwAKh3rqdy5eGbIe2e9xqOJaH9WlMdhvJjETlditDD/5oN2poMK+RTEpuyd5doEx8fw1LqPcfqMnWh6/wmWXg5bXm9Wlxs1+oZH9aOLm7CQ2KbIxRKZ6tlbLrG+gbEThlMQmGsLMJL5TyxAi/cLgRcmlTaeN6J8TRBBfWhh2YRkXehOg2FnBCyLBm1DXwsU9RQuwnF0fzma/YuXdzbwb2mw6Ql9f0o3ZZeBVe6x7lNpLd63Mvty1PkDR2hS6ucndf6F5ISLxBJCa2wVNx7iq0PnYwIMUn1KYwgp1Fgnz5iSWdHs2kqMqFr2E1yUm3gMJ6zKV7aLdRqrNdG0445Hz/xK7/UaS7LuMgF76wmeHXK6vLrkamKs32wLNIBMEM8zmuw5i3eqrbVXos3PR7sq9tSn8Q9KadDnmFdKOizNyfTYRhgRqPWe+cdxRXUR6gIo/a+f+GkOZfVHa3c/zO+lcpJGUzxyx0D+6jHOWfBOdlte2Q/Zx1VxvhOjERc20TH0THw6L/T38B6i85QfUJUtQAAAAASUVORK5CYII=",infos:"The French Southern and Antarctic Lands is an Overseas Territory of France.",capital:"Saint Pierre, R\xE9union"});C({lat:8.619543,lng:.824782,countries:"Togo",populations:"8.645 million ",where:"updating",flags:"https://cdn.countryflags.com/thumbs/togo/flag-800.png",infos:"Togo, a West African nation on the Gulf of Guinea, is known for its palm-lined beaches and hilltop villages.",capital:"Lom\xE9"});C({lat:15.870032,lng:100.992541,countries:"Thailand",populations:"71.6 million",where:"Asia",flags:"https://cdn.countryflags.com/thumbs/thailand/flag-800.png",infos:"Thailand is a Southeast Asian country. It's known for tropical beaches, opulent royal palaces, ancient ruins and ornate temples displaying figures of Buddha",capital:"Bangkok"});C({lat:38.861034,lng:71.276093,countries:"Tajikistan",populations:"9.75 million",where:"Central Asia",flags:"https://www.countryflags.com/wp-content/uploads/tajikistan-flag-png-large.png",infos:"Tajikistan is a country in Central Asia surrounded by Afghanistan, China, Kyrgyzstan and Uzbekistan.",capital:"Dushanbe"});C({lat:-8.967363,lng:-171.855881,countries:"Tokelau",populations:"1,411",where:"Territory",flags:"https://www.interflag.gr/1911-large_default/flag-of-tokelau.jpg",infos:"Tokelau is a remote group of atolls in the South Pacific Ocean, halfway between Hawaii and New Zealand, of which it's a territory.",capital:"Nukunonu"});C({lat:-8.874217,lng:125.727539,countries:"Timor-Leste",populations:"1.321 million ",where:"Asia",flags:"https://cdn.countryflags.com/thumbs/east-timor/flag-800.png",infos:"Timor-Leste, or East Timor, a Southeast Asian nation occupying half the island of Timor, is ringed by coral reefs teeming with marine life.",capital:"Dili"});C({lat:38.969719,lng:59.556278,countries:"Turkmenistan",populations:"6.342 million",where:"Central Asia",flags:"https://cdn.countryflags.com/thumbs/turkmenistan/flag-800.png",infos:"Turkmenistan is a country in Central Asia bordered by the Caspian Sea and largely covered by the Karakum Desert.",capital:"Ashgabat"});C({lat:33.886917,lng:9.537499,countries:"Tunisia",populations:"12.26 million",where:"North Africa",flags:"https://www.countryflags.com/wp-content/uploads/tunisia-flag-png-large.png",infos:"Tunisia, officially the Republic of Tunisia, is the northernmost country in Africa.",capital:"Tunis"});C({lat:-21.178986,lng:-175.198242,countries:"Tonga",populations:"106,017 ",where:"Oceania",flags:"https://cdn.countryflags.com/thumbs/tonga/flag-800.png",infos:"Tonga is a Polynesian kingdom of more than 170 South Pacific islands, many uninhabited, most lined in white beaches and coral reefs and covered with tropical rainforest. ",capital:"Nuku'alofa"});C({lat:38.963745,lng:35.243322,countries:"Turkey",populations:"84.78 million",where:"The Middle East",flags:"https://cdn.countryflags.com/thumbs/turkey/flag-800.png",infos:"Turkey, officially the Republic of T\xFCrkiye, is a transcontinental country located mainly on the Anatolian Peninsula in Western Asia, with a small portion on the Balkan Peninsula in Southeast Europe.",capital:"Ankara"});C({lat:10.691803,lng:-61.222503,countries:"Trinidad and Tobago",populations:"1.526 million ",where:"The Caribbean",flags:"https://cdn.countryflags.com/thumbs/trinidad-and-tobago/flag-800.png",infos:"Trinidad and Tobago is a dual-island Caribbean nation near Venezuela, with distinctive Creole traditions and cuisines.",capital:"Port of Spain"});C({lat:-7.109535,lng:177.64933,countries:"Tuvalu",populations:"11,204",where:"Oceania",flags:"https://cdn.countryflags.com/thumbs/tuvalu/flag-800.png",infos:"Tuvalu, in the South Pacific, is an independent island nation within the British Commonwealth",capital:"Funafuti"});C({lat:23.69781,lng:120.960515,countries:"Taiwan",populations:"23.57 million",where:"East Asia",flags:"https://www.countryflags.com/wp-content/uploads/taiwan-flag-png-large.png",infos:"Taiwan, officially the Republic of China, is a country in East Asia",capital:"Taipei City"});C({lat:-6.369028,lng:34.888822,countries:"Tanzania",populations:"63.59 million",where:"East Africa",flags:"https://cdn.countryflags.com/thumbs/tanzania/flag-800.png",infos:"Tanzania is an East African country known for its vast wilderness areas.",capital:"Dodoma"});C({lat:48.379433,lng:31.16558,countries:"Ukraine",populations:"43.79 million",where:"Europe",flags:"https://cdn.countryflags.com/thumbs/ukraine/flag-800.png",infos:"Ukraine is a country in Eastern Europe.",capital:"Kyiv"});C({lat:1.373333,lng:32.290275,countries:"Uganda",populations:"45.85 million ",where:"East Africa",flags:"https://cdn.countryflags.com/thumbs/uganda/flag-800.png",infos:"Uganda is a landlocked country in East Africa whose diverse landscape encompasses the snow-capped Rwenzori Mountains and immense Lake Victoria.",capital:"Kampala"});C({lat:-32.522779,lng:-55.765835,countries:"Uruguay",populations:"3.426 million",where:"South America",flags:"https://www.countryflags.com/wp-content/uploads/uruguay-flag-png-large.png",infos:"Uruguay is a South American country known for its verdant interior and beach-lined coast.",capital:"Montevideo"});C({lat:41.377491,lng:64.585262,countries:"Uzbekistan",populations:"34.92 million",where:"Central Asia",flags:"https://www.countryflags.com/wp-content/uploads/uzbekistan-flag-png-large.png",infos:"Uzbekistan is a Central Asian nation and former Soviet republic.",capital:"Tashkent"});C({lat:41.902916,lng:12.453389,countries:"Vatican City",populations:"825",where:"Europe",flags:"https://www.countryflags.com/wp-content/uploads/vatican-city-flag-png-large.png",infos:"Vatican City, a city-state surrounded by Rome, Italy, is the headquarters of the Roman Catholic Church.",capital:"Vatican City"});C({lat:12.984305,lng:-61.287228,countries:"Saint Vincent and the Grenadines",populations:"104,332 ",where:"The Caribbean",flags:"https://cdn.countryflags.com/thumbs/saint-vincent-and-the-grenadines/flag-800.png",infos:"St. Vincent and the Grenadines is a southern Caribbean nation comprising a main island, St. Vincent, and a chain of smaller islands",capital:"Kingstown"});C({lat:6.42375,lng:-66.58973,countries:"Venezuela",populations:"28.2 million",where:"South America",flags:"https://cdn.countryflags.com/thumbs/venezuela/flag-800.png",infos:"Venezuela is a country on the northern coast of South America with diverse natural attractions. Along its Caribbean coast are tropical resort islands including Isla de Margarita and the Los Roques archipelago.",capital:"Caracas"});C({lat:18.420695,lng:-64.639968,countries:"British Virgin Islands",populations:"31,122",where:"Territory",flags:"data:image/png;base64,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",infos:"The British Virgin Islands, part of a volcanic archipelago in the Caribbean, is a British overseas territory. Comprising 4 main islands and many smaller ones, it's known for its reef-lined beaches and as a yachting destination",capital:"Road Town"});C({lat:18.335765,lng:-64.896335,countries:"U.S. Virgin Islands",populations:"105,870",where:"Territory",flags:"https://www.countryflags.com/wp-content/uploads/united-states-of-america-flag-png-large.png",infos:"The U.S. Virgin Islands are a group of Caribbean islands and islets. A U.S. territory",capital:"Charlotte Amalie"});C({lat:14.058324,lng:108.277199,countries:"Vietnam",populations:"97.47 million ",where:"Asia",flags:"https://cdn.countryflags.com/thumbs/vietnam/flag-800.png",infos:"Vietnam is a Southeast Asian country known for its beaches, rivers, Buddhist pagodas and bustling cities.",capital:"Hanoi"});C({lat:-15.376706,lng:166.959158,countries:"Vanuatu",populations:"319,137",where:"Oceania",flags:"https://www.countryflags.com/wp-content/uploads/vanuatu-flag-jpg-xl.jpg",infos:"Vanuatu is a South Pacific Ocean nation made up of roughly 80 islands that stretch 1,300 kilometers.",capital:"Port Vila"});C({lat:-13.768752,lng:177.156097,countries:"	Wallis and Futuna",populations:" 15,289 ",where:"Territory",flags:"https://www.countryflags.com/wp-content/uploads/france-flag-png-large.png",infos:"Wallis and Futuna, officially the Territory of the Wallis and Futuna Islands, is a French island collectivity in the South Pacific, situated between Tuvalu to the northwest, Fiji to the southwest, Tonga to the southeast, Samoa to the east, and Tokelau to the northeast",capital:"Mat\u0101'utu"});C({lat:-13.759029,lng:-172.104629,countries:"Samoa",populations:"218,764",where:"Oceania",flags:"https://www.countryflags.com/wp-content/uploads/samoa-flag-png-large.png",infos:"Samoa, officially the Independent State of Samoa and until 1997 known as Western Samoa, is a Polynesian island country consisting of two main islands; two smaller, inhabited islands; and several smaller, uninhabited islands, including the Aleipata Islands.",capital:"Apia"});C({lat:42.602636,lng:20.902977,countries:"Kosovo",populations:"1.873 million",where:"Europe",flags:"https://www.countryflags.com/wp-content/uploads/kosovo-flag-png-large.png",infos:"Kosovo, officially the Republic of Kosovo, is a partially recognised state in Southeast Europe.",capital:"Pristina"});C({lat:15.552727,lng:48.516388,countries:"Yemen",populations:"32.98 million",where:"The Middle East",flags:"https://www.countryflags.com/wp-content/uploads/yemen-flag-png-large.png",infos:"Yemen, officially the Republic of Yemen, is a country in Western Asia.",capital:"Sana'a"});C({lat:-12.8275,lng:45.166244,countries:"Mayotte",populations:"270,372",where:"Departments of France",flags:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALYAAAB5CAMAAACjkCtXAAAAFVBMVEX///8AI5XtKTl1e7fzfYTtFisADJAUEbSdAAAAeElEQVR4nO3OOQEAIAwEsOP1L7kOGMqaKEhG3135sM/si7a2tra2tra2tra2tra2tra2tra2tra2tra2tra2tra2tra2tra2tra2tra2tra2tra2tra2tra2tra2tra2tra2tra2tra2tra2tra2tra2tra2tvZTAaLOXCyoPt13AAAAAElFTkSuQmCC",infos:"Mayotte is an archipelago in the Indian Ocean between Madagascar and the coast of Mozambique.",capital:"Mamoudzou"});C({lat:-30.559482,lng:22.937506,countries:"South Africa",populations:"59.39 million",where:"South Africa",flags:"https://cdn.countryflags.com/thumbs/south-africa/flag-800.png",infos:"South Africa is a country on the southernmost tip of the African continent, marked by several distinct ecosystems. Inland safari destination Kruger National Park is populated by big game",capital:"Cape Town, Pretoria, Bloemfontein"});C({lat:-13.133897,lng:27.849332,countries:"Zambia",populations:"19.47 million",where:"Africa",flags:"https://cdn.countryflags.com/thumbs/zambia/flag-800.png",infos:"Zambia, in southern Africa, is a landlocked country of rugged terrain and diverse wildlife, with many parks and safari areas.",capital:"Lusaka"});C({lat:-19.015438,lng:29.154857,countries:"Zimbabwe",populations:"15.99 million",where:"Africa",flags:"https://www.countryflags.com/wp-content/uploads/zimbabwe-flag-png-large.png",infos:"Zimbabwe is a landlocked country in southern Africa known for its dramatic landscape and diverse wildlife, much of it within parks, reserves and safari areas.",capital:"Harare"});xa.position.z=10;Bu.rotation.y=-Math.PI/2;Ge.rotation.offset={x:0,y:0};const ze={x:void 0,y:void 0,down:!1,xPrev:void 0,yPrev:void 0},cc=new qg,zu=()=>{requestAnimationFrame(zu),Pa.render(Ir,xa),cc.setFromCamera(ze,xa);const o=cc.intersectObjects(Ge.children.filter(t=>t.geometry.type==="BoxGeometry"));Ge.children.forEach(t=>{t.material.opacity=.3}),sr.set(io,{display:"none"});for(let t=0;t<o.length;t++){const e=o[t].object;e.material.opacity=2,sr.set(io,{display:"block"}),d_.innerHTML=`Country ${e.countries}`,p_.innerHTML=`Population: ${e.populations}`,m_.innerHTML=`Location: ${e.where}`,lc.src=`${e.flags}`,__.appendChild(lc),g_.innerHTML=`Description: ${e.infos}`,v_.innerHTML=`Capital city: ${e.capital}`}Pa.render(Ir,xa),Eo.rotation.y+=.05};zu();Or.addEventListener("mousedown",({clientX:o,clientY:t})=>{ze.down=!0,ze.xPrev=o,ze.yPrev=t});addEventListener("mousemove",o=>{if(o.preventDefault(),ze.x=(o.clientX-innerWidth/2)/(innerWidth/2)*2-1,ze.y=-(o.clientY/innerHeight)*2+1,sr.set(io,{x:o.clientX,y:o.clientY}),ze.down){const t=o.clientX-ze.xPrev,e=o.clientY-ze.yPrev;ze.xPrev=o.clientX,ze.yPrev=o.clientY,Ge.rotation.offset.x+=e*.005,Ge.rotation.offset.y+=t*.005,sr.to(Ge.rotation,{y:Ge.rotation.offset.y,x:Ge.rotation.offset.x,duration:2})}});addEventListener("mouseup",o=>{ze.down=!1});
