/*!
 * byui前端敏捷开发平台 : vue-element-admin-beautiful
 *  copyright:1204505056@qq.com 
 *  author: chuzhixin <1204505056@qq.com> 
 *  participants: liyanna,songmeiyu,lizhenguo
 *  time: 2020-4-8 19:40:28
 */
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[16],{

/***/ "./node_modules/_vue-qart@2.2.0@vue-qart/dist/vue-qart.js":
/*!****************************************************************!*\
  !*** ./node_modules/_vue-qart@2.2.0@vue-qart/dist/vue-qart.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(t,r){ true?module.exports=r():undefined}(this,function(){return function(t){function r(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}var e={};return r.m=t,r.c=e,r.i=function(t){return t},r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:n})},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,r){return Object.prototype.hasOwnProperty.call(t,r)},r.p="/dist/",r(r.s=2)}([function(t,r,e){var n=e(4)(e(1),e(5),null,null);t.exports=n.exports},function(t,r,e){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n=e(3),o=function(t){return t&&t.__esModule?t:{default:t}}(n);r.default={props:{config:{type:Object},download:{type:Object,default:function(){return{visible:!1}}}},name:"VueQart",data:function(){return{}},watch:{"config.value":function(t,r){this.config.value=t,this.renderQrcode(this.config)}},mounted:function(){this.renderQrcode(this.config)},methods:{renderQrcode:function(t){this.qart=new o.default(t),this.qart.make(this.$refs.qart)},convertToImage:function(t){var r=this.download,e=r.type,n=void 0===e?"image/png":e,o=r.filename,i=void 0===o?"download.png":o,u=this.$refs.qart.children[0];t.target.href=u.toDataURL(n),t.target.download=i}}}},function(t,r,e){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n=e(0),o=function(t){return t&&t.__esModule?t:{default:t}}(n);r.default=o.default},function(t,r,e){!function(r,e){t.exports=e()}(0,function(){return function(t){function r(n){if(e[n])return e[n].exports;var o=e[n]={exports:{},id:n,loaded:!1};return t[n].call(o.exports,o,o.exports,r),o.loaded=!0,o.exports}var e={};return r.m=t,r.c=e,r.p="../dist/",r(0)}([function(t,r,e){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(r,"__esModule",{value:!0});var o=e(1),i=n(o),u=e(2),a=n(u),f=e(21),c=e(75),s=n(c),l=function(){function t(r){if((0,i.default)(this,t),void 0===r)throw new TypeError("QArt required `options`.");if(void 0===r.value)throw new TypeError("QArt required `value` option.");if(void 0===r.imagePath)throw new TypeError("QArt required `imagePath` option.");this.filter=void 0===r.filter?t.DEFAULTS.filter:r.filter,this.value=r.value,this.imagePath=r.imagePath}return(0,a.default)(t,[{key:"make",value:function(t){var r=195,e=12,n=(0,f.QRCode)(10,"H");n.addData(this.value),n.make();var o=n.createImgObject(3),i=this;o.onload=function(){var n=new Image;n.src=i.imagePath;var u=s.default.createCanvas(r,o),a=s.default.createCanvas(r,o);n.onload=function(){n.width<n.height?(n.height=1*n.height/n.width*171,n.width=171):(n.width=1*n.width/n.height*171,n.height=171);var o=document.createElement("canvas");o.width=r,o.height=r,o.getContext("2d").drawImage(n,e,e,171,171);for(var c=o.getContext("2d").getImageData(0,0,r,r),l=c.data,h=u.getContext("2d").getImageData(0,0,r,r),v=h.data,d=0;d<l.length;d+=4){var g=Math.floor(d/4)%r,p=Math.floor(Math.floor(d/4)/r);if(g<e||p<e||g>=183||p>=183)v[d+3]=0;else if((g%3!=1||p%3!=1)&&!(g<36&&(p<36||p>=159)||g>=159&&p<36)){if("threshold"==i.filter){var y=s.default.threshold(l[d],l[d+1],l[d+2],127);v[d]=y,v[d+1]=y,v[d+2]=y}else"color"==i.filter&&(v[d]=l[d],v[d+1]=l[d+1],v[d+2]=l[d+2]);v[d+3]=l[d+3]}}u.getContext("2d").putImageData(h,0,0);for(var w=f.QRUtil.getPatternPosition(10),d=0;d<w.length;d+=1)for(var m=0;m<w.length;m+=1){var g=w[d],p=w[m];if(!(6==g&&50==p||6==p&&50==g||6==g&&6==p)){var b=3*(g-2)+12,x=3*(p-2)+12,A=3*(g+3)+12-b,_=3*(p+3)+12-x,E=a.getContext("2d").getImageData(b,x,A,_);u.getContext("2d").putImageData(E,b,x)}}t.innerHTML="",t.appendChild(u)}}}}],[{key:"DEFAULTS",get:function(){return{value:"",filter:"threshold"}}}]),t}();window.QArt=l,r.default=window.QArt},function(t,r){"use strict";r.__esModule=!0,r.default=function(t,r){if(!(t instanceof r))throw new TypeError("Cannot call a class as a function")}},function(t,r,e){"use strict";r.__esModule=!0;var n=e(3),o=function(t){return t&&t.__esModule?t:{default:t}}(n);r.default=function(){function t(t,r){for(var e=0;e<r.length;e++){var n=r[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),(0,o.default)(t,n.key,n)}}return function(r,e,n){return e&&t(r.prototype,e),n&&t(r,n),r}}()},function(t,r,e){t.exports={default:e(4),__esModule:!0}},function(t,r,e){e(5);var n=e(8).Object;t.exports=function(t,r,e){return n.defineProperty(t,r,e)}},function(t,r,e){var n=e(6);n(n.S+n.F*!e(16),"Object",{defineProperty:e(12).f})},function(t,r,e){var n=e(7),o=e(8),i=e(9),u=e(11),a="prototype",f=function(t,r,e){var c,s,l,h=t&f.F,v=t&f.G,d=t&f.S,g=t&f.P,p=t&f.B,y=t&f.W,w=v?o:o[r]||(o[r]={}),m=w[a],b=v?n:d?n[r]:(n[r]||{})[a];v&&(e=r);for(c in e)(s=!h&&b&&void 0!==b[c])&&c in w||(l=s?b[c]:e[c],w[c]=v&&"function"!=typeof b[c]?e[c]:p&&s?i(l,n):y&&b[c]==l?function(t){var r=function(r,e,n){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(r);case 2:return new t(r,e)}return new t(r,e,n)}return t.apply(this,arguments)};return r[a]=t[a],r}(l):g&&"function"==typeof l?i(Function.call,l):l,g&&((w.virtual||(w.virtual={}))[c]=l,t&f.R&&m&&!m[c]&&u(m,c,l)))};f.F=1,f.G=2,f.S=4,f.P=8,f.B=16,f.W=32,f.U=64,f.R=128,t.exports=f},function(t,r){var e=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=e)},function(t,r){var e=t.exports={version:"2.4.0"};"number"==typeof __e&&(__e=e)},function(t,r,e){var n=e(10);t.exports=function(t,r,e){if(n(t),void 0===r)return t;switch(e){case 1:return function(e){return t.call(r,e)};case 2:return function(e,n){return t.call(r,e,n)};case 3:return function(e,n,o){return t.call(r,e,n,o)}}return function(){return t.apply(r,arguments)}}},function(t,r){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,r,e){var n=e(12),o=e(20);t.exports=e(16)?function(t,r,e){return n.f(t,r,o(1,e))}:function(t,r,e){return t[r]=e,t}},function(t,r,e){var n=e(13),o=e(15),i=e(19),u=Object.defineProperty;r.f=e(16)?Object.defineProperty:function(t,r,e){if(n(t),r=i(r,!0),n(e),o)try{return u(t,r,e)}catch(t){}if("get"in e||"set"in e)throw TypeError("Accessors not supported!");return"value"in e&&(t[r]=e.value),t}},function(t,r,e){var n=e(14);t.exports=function(t){if(!n(t))throw TypeError(t+" is not an object!");return t}},function(t,r){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,r,e){t.exports=!e(16)&&!e(17)(function(){return 7!=Object.defineProperty(e(18)("div"),"a",{get:function(){return 7}}).a})},function(t,r,e){t.exports=!e(17)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,r){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,r,e){var n=e(14),o=e(7).document,i=n(o)&&n(o.createElement);t.exports=function(t){return i?o.createElement(t):{}}},function(t,r,e){var n=e(14);t.exports=function(t,r){if(!n(t))return t;var e,o;if(r&&"function"==typeof(e=t.toString)&&!n(o=e.call(t)))return o;if("function"==typeof(e=t.valueOf)&&!n(o=e.call(t)))return o;if(!r&&"function"==typeof(e=t.toString)&&!n(o=e.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,r){t.exports=function(t,r){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:r}}},function(t,r,e){var n,o,i,u=e(22),a=(function(t){return t&&t.__esModule?t:{default:t}}(u),function(){function t(r,e){if(void 0===r.length)throw new Error(r.length+"/"+e);var n=function(){for(var t=0;t<r.length&&0==r[t];)t+=1;for(var n=new Array(r.length-t+e),o=0;o<r.length-t;o+=1)n[o]=r[o+t];return n}(),o={};return o.getAt=function(t){return n[t]},o.getLength=function(){return n.length},o.multiply=function(r){for(var e=new Array(o.getLength()+r.getLength()-1),n=0;n<o.getLength();n+=1)for(var i=0;i<r.getLength();i+=1)e[n+i]^=u.gexp(u.glog(o.getAt(n))+u.glog(r.getAt(i)));return t(e,0)},o.mod=function(r){if(o.getLength()-r.getLength()<0)return o;for(var e=u.glog(o.getAt(0))-u.glog(r.getAt(0)),n=new Array(o.getLength()),i=0;i<o.getLength();i+=1)n[i]=o.getAt(i);for(var i=0;i<r.getLength();i+=1)n[i]^=u.gexp(u.glog(r.getAt(i))+e);return t(n,0).mod(r)},o}var r=function(r,e){var o=r,u=n[e],v=null,d=0,g=null,p=new Array,m={},b=function(t,r){d=4*o+17,v=function(t){for(var r=new Array(t),e=0;e<t;e+=1){r[e]=new Array(t);for(var n=0;n<t;n+=1)r[e][n]=null}return r}(d),x(0,0),x(d-7,0),x(0,d-7),E(),_(),O(t,r),o>=7&&M(t),null==g&&(g=B(o,u,p)),T(g,r)},x=function(t,r){for(var e=-1;e<=7;e+=1)if(!(t+e<=-1||d<=t+e))for(var n=-1;n<=7;n+=1)r+n<=-1||d<=r+n||(v[t+e][r+n]=0<=e&&e<=6&&(0==n||6==n)||0<=n&&n<=6&&(0==e||6==e)||2<=e&&e<=4&&2<=n&&n<=4)},A=function(){for(var t=0,r=0,e=0;e<8;e+=1){b(!0,e);var n=i.getLostPoint(m);(0==e||t>n)&&(t=n,r=e)}return r},_=function(){for(var t=8;t<d-8;t+=1)null==v[t][6]&&(v[t][6]=t%2==0);for(var r=8;r<d-8;r+=1)null==v[6][r]&&(v[6][r]=r%2==0)},E=function(){for(var t=i.getPatternPosition(o),r=0;r<t.length;r+=1)for(var e=0;e<t.length;e+=1){var n=t[r],u=t[e];if(null==v[n][u])for(var a=-2;a<=2;a+=1)for(var f=-2;f<=2;f+=1)v[n+a][u+f]=-2==a||2==a||-2==f||2==f||0==a&&0==f}},M=function(t){for(var r=i.getBCHTypeNumber(o),e=0;e<18;e+=1){var n=!t&&1==(r>>e&1);v[Math.floor(e/3)][e%3+d-8-3]=n}for(var e=0;e<18;e+=1){var n=!t&&1==(r>>e&1);v[e%3+d-8-3][Math.floor(e/3)]=n}},O=function(t,r){for(var e=u<<3|r,n=i.getBCHTypeInfo(e),o=0;o<15;o+=1){var a=!t&&1==(n>>o&1);o<6?v[o][8]=a:o<8?v[o+1][8]=a:v[d-15+o][8]=a}for(var o=0;o<15;o+=1){var a=!t&&1==(n>>o&1);o<8?v[8][d-o-1]=a:o<9?v[8][15-o-1+1]=a:v[8][15-o-1]=a}v[d-8][8]=!t},T=function(t,r){for(var e=-1,n=d-1,o=7,u=0,a=i.getMaskFunction(r),f=d-1;f>0;f-=2)for(6==f&&(f-=1);;){for(var c=0;c<2;c+=1)if(null==v[n][f-c]){var s=!1;u<t.length&&(s=1==(t[u]>>>o&1));var l=a(n,f-c);l&&(s=!s),v[n][f-c]=s,-1==(o-=1)&&(u+=1,o=7)}if((n+=e)<0||d<=n){n-=e,e=-e;break}}},P=function(r,e){for(var n=0,o=0,u=0,a=new Array(e.length),f=new Array(e.length),c=0;c<e.length;c+=1){var s=e[c].dataCount,l=e[c].totalCount-s;o=Math.max(o,s),u=Math.max(u,l),a[c]=new Array(s);for(var h=0;h<a[c].length;h+=1)a[c][h]=255&r.getBuffer()[h+n];n+=s;var v=i.getErrorCorrectPolynomial(l),d=t(a[c],v.getLength()-1),g=d.mod(v);f[c]=new Array(v.getLength()-1);for(var h=0;h<f[c].length;h+=1){var p=h+g.getLength()-f[c].length;f[c][h]=p>=0?g.getAt(p):0}}for(var y=0,h=0;h<e.length;h+=1)y+=e[h].totalCount;for(var w=new Array(y),m=0,h=0;h<o;h+=1)for(var c=0;c<e.length;c+=1)h<a[c].length&&(w[m]=a[c][h],m+=1);for(var h=0;h<u;h+=1)for(var c=0;c<e.length;c+=1)h<f[c].length&&(w[m]=f[c][h],m+=1);return w},B=function(t,r,e){for(var n=a.getRSBlocks(t,r),o=f(),u=0;u<e.length;u+=1){var c=e[u];o.put(c.getMode(),4),o.put(c.getLength(),i.getLengthInBits(c.getMode(),t)),c.write(o)}for(var s=0,u=0;u<n.length;u+=1)s+=n[u].dataCount;if(o.getLengthInBits()>8*s)throw new Error("code length overflow. ("+o.getLengthInBits()+">"+8*s+")");for(o.getLengthInBits()+4<=8*s&&o.put(0,4);o.getLengthInBits()%8!=0;)o.putBit(!1);for(;!(o.getLengthInBits()>=8*s)&&(o.put(236,8),!(o.getLengthInBits()>=8*s));)o.put(17,8);return P(o,n)};return m.addData=function(t,r){r=r||"Byte";var e=null;switch(r){case"Numeric":e=c(t);break;case"Alphanumeric":e=s(t);break;case"Byte":e=l(t);break;case"Kanji":e=h(t);break;default:throw"mode:"+r}p.push(e),g=null},m.isDark=function(t,r){if(t<0||d<=t||r<0||d<=r)throw new Error(t+","+r);return v[t][r]},m.getModuleCount=function(){return d},m.make=function(){b(!1,A())},m.createTableTag=function(t,r){t=t||2,r=void 0===r?4*t:r;var e="";e+='<table style="',e+=" border-width: 0px; border-style: none;",e+=" border-collapse: collapse;",e+=" padding: 0px; margin: "+r+"px;",e+='">',e+="<tbody>";for(var n=0;n<m.getModuleCount();n+=1){e+="<tr>";for(var o=0;o<m.getModuleCount();o+=1)e+='<td style="',e+=" border-width: 0px; border-style: none;",e+=" border-collapse: collapse;",e+=" padding: 0px; margin: 0px;",e+=" width: "+t+"px;",e+=" height: "+t+"px;",e+=" background-color: ",e+=m.isDark(n,o)?"#000000":"#ffffff",e+=";",e+='"/>';e+="</tr>"}return e+="</tbody>",e+="</table>"},m.createSvgTag=function(t,r){t=t||2,r=void 0===r?4*t:r;var e,n,o,i,u,a=m.getModuleCount()*t+2*r,f="";for(u="l"+t+",0 0,"+t+" -"+t+",0 0,-"+t+"z ",f+="<svg",f+=' width="'+a+'px"',f+=' height="'+a+'px"',f+=' xmlns="http://www.w3.org/2000/svg"',f+=">",f+='<path d="',o=0;o<m.getModuleCount();o+=1)for(i=o*t+r,e=0;e<m.getModuleCount();e+=1)m.isDark(o,e)&&(n=e*t+r,f+="M"+n+","+i+u);return f+='" stroke="transparent" fill="black"/>',f+="</svg>"},m.createImgTag=function(t,r){t=t||2,r=void 0===r?4*t:r;var e=m.getModuleCount()*t+2*r,n=r,o=e-r;return y(e,e,function(r,e){if(n<=r&&r<o&&n<=e&&e<o){var i=Math.floor((r-n)/t),u=Math.floor((e-n)/t);return m.isDark(u,i)?0:1}return 1})},m.createImgObject=function(t,r){t=t||2,r=void 0===r?4*t:r;var e=m.getModuleCount()*t+2*r,n=r,o=e-r;return w(e,e,function(r,e){if(n<=r&&r<o&&n<=e&&e<o){var i=Math.floor((r-n)/t),u=Math.floor((e-n)/t);return m.isDark(u,i)?0:1}return 1})},m};r.stringToBytes=function(t){for(var r=new Array,e=0;e<t.length;e+=1){var n=t.charCodeAt(e);r.push(255&n)}return r},r.createStringToBytes=function(t,r){var e=function(){for(var e=g(t),n=function(){var t=e.read();if(-1==t)throw new Error;return t},o=0,i={};;){var u=e.read();if(-1==u)break;var a=n(),f=n(),c=n(),s=String.fromCharCode(u<<8|a),l=f<<8|c;i[s]=l,o+=1}if(o!=r)throw new Error(o+" != "+r);return i}(),n="?".charCodeAt(0);return function(t){for(var r=new Array,o=0;o<t.length;o+=1){var i=t.charCodeAt(o);if(i<128)r.push(i);else{var u=e[t.charAt(o)];"number"==typeof u?(255&u)==u?r.push(u):(r.push(u>>>8),r.push(255&u)):r.push(n)}}return r}};var e={MODE_NUMBER:1,MODE_ALPHA_NUM:2,MODE_8BIT_BYTE:4,MODE_KANJI:8},n={L:1,M:0,Q:3,H:2},o={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7},i=function(){var r=[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]],n=1335,i=7973,a={},f=function(t){for(var r=0;0!=t;)r+=1,t>>>=1;return r};return a.getBCHTypeInfo=function(t){for(var r=t<<10;f(r)-f(n)>=0;)r^=n<<f(r)-f(n);return 21522^(t<<10|r)},a.getBCHTypeNumber=function(t){for(var r=t<<12;f(r)-f(i)>=0;)r^=i<<f(r)-f(i);return t<<12|r},a.getPatternPosition=function(t){return r[t-1]},a.getMaskFunction=function(t){switch(t){case o.PATTERN000:return function(t,r){return(t+r)%2==0};case o.PATTERN001:return function(t,r){return t%2==0};case o.PATTERN010:return function(t,r){return r%3==0};case o.PATTERN011:return function(t,r){return(t+r)%3==0};case o.PATTERN100:return function(t,r){return(Math.floor(t/2)+Math.floor(r/3))%2==0};case o.PATTERN101:return function(t,r){return t*r%2+t*r%3==0};case o.PATTERN110:return function(t,r){return(t*r%2+t*r%3)%2==0};case o.PATTERN111:return function(t,r){return(t*r%3+(t+r)%2)%2==0};default:throw new Error("bad maskPattern:"+t)}},a.getErrorCorrectPolynomial=function(r){for(var e=t([1],0),n=0;n<r;n+=1)e=e.multiply(t([1,u.gexp(n)],0));return e},a.getLengthInBits=function(t,r){if(1<=r&&r<10)switch(t){case e.MODE_NUMBER:return 10;case e.MODE_ALPHA_NUM:return 9;case e.MODE_8BIT_BYTE:case e.MODE_KANJI:return 8;default:throw new Error("mode:"+t)}else if(r<27)switch(t){case e.MODE_NUMBER:return 12;case e.MODE_ALPHA_NUM:return 11;case e.MODE_8BIT_BYTE:return 16;case e.MODE_KANJI:return 10;default:throw new Error("mode:"+t)}else{if(!(r<41))throw new Error("type:"+r);switch(t){case e.MODE_NUMBER:return 14;case e.MODE_ALPHA_NUM:return 13;case e.MODE_8BIT_BYTE:return 16;case e.MODE_KANJI:return 12;default:throw new Error("mode:"+t)}}},a.getLostPoint=function(t){for(var r=t.getModuleCount(),e=0,n=0;n<r;n+=1)for(var o=0;o<r;o+=1){for(var i=0,u=t.isDark(n,o),a=-1;a<=1;a+=1)if(!(n+a<0||r<=n+a))for(var f=-1;f<=1;f+=1)o+f<0||r<=o+f||0==a&&0==f||u==t.isDark(n+a,o+f)&&(i+=1);i>5&&(e+=3+i-5)}for(var n=0;n<r-1;n+=1)for(var o=0;o<r-1;o+=1){var c=0;t.isDark(n,o)&&(c+=1),t.isDark(n+1,o)&&(c+=1),t.isDark(n,o+1)&&(c+=1),t.isDark(n+1,o+1)&&(c+=1),0!=c&&4!=c||(e+=3)}for(var n=0;n<r;n+=1)for(var o=0;o<r-6;o+=1)t.isDark(n,o)&&!t.isDark(n,o+1)&&t.isDark(n,o+2)&&t.isDark(n,o+3)&&t.isDark(n,o+4)&&!t.isDark(n,o+5)&&t.isDark(n,o+6)&&(e+=40);for(var o=0;o<r;o+=1)for(var n=0;n<r-6;n+=1)t.isDark(n,o)&&!t.isDark(n+1,o)&&t.isDark(n+2,o)&&t.isDark(n+3,o)&&t.isDark(n+4,o)&&!t.isDark(n+5,o)&&t.isDark(n+6,o)&&(e+=40);for(var s=0,o=0;o<r;o+=1)for(var n=0;n<r;n+=1)t.isDark(n,o)&&(s+=1);return e+=Math.abs(100*s/r/r-50)/5*10},a}(),u=function(){for(var t=new Array(256),r=new Array(256),e=0;e<8;e+=1)t[e]=1<<e;for(var e=8;e<256;e+=1)t[e]=t[e-4]^t[e-5]^t[e-6]^t[e-8];for(var e=0;e<255;e+=1)r[t[e]]=e;var n={};return n.glog=function(t){if(t<1)throw new Error("glog("+t+")");return r[t]},n.gexp=function(r){for(;r<0;)r+=255;for(;r>=256;)r-=255;return t[r]},n}(),a=function(){var t=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],[4,101,81],[1,80,50,4,81,51],[4,50,22,4,51,23],[3,36,12,8,37,13],[2,116,92,2,117,93],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,4,43,15],[4,133,107],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12],[3,145,115,1,146,116],[4,64,40,5,65,41],[11,36,16,5,37,17],[11,36,12,5,37,13],[5,109,87,1,110,88],[5,65,41,5,66,42],[5,54,24,7,55,25],[11,36,12,7,37,13],[5,122,98,1,123,99],[7,73,45,3,74,46],[15,43,19,2,44,20],[3,45,15,13,46,16],[1,135,107,5,136,108],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15],[5,150,120,1,151,121],[9,69,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,15],[3,141,113,4,142,114],[3,70,44,11,71,45],[17,47,21,4,48,22],[9,39,13,16,40,14],[3,135,107,5,136,108],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,43,15,10,44,16],[4,144,116,4,145,117],[17,68,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,139,111,7,140,112],[17,74,46],[7,54,24,16,55,25],[34,37,13],[4,151,121,5,152,122],[4,75,47,14,76,48],[11,54,24,14,55,25],[16,45,15,14,46,16],[6,147,117,4,148,118],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2,47,17],[8,132,106,4,133,107],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,142,114,2,143,115],[19,74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,152,122,4,153,123],[22,73,45,3,74,46],[8,53,23,26,54,24],[12,45,15,28,46,16],[3,147,117,10,148,118],[3,73,45,23,74,46],[4,54,24,31,55,25],[11,45,15,31,46,16],[7,146,116,7,147,117],[21,73,45,7,74,46],[1,53,23,37,54,24],[19,45,15,26,46,16],[5,145,115,10,146,116],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,145,115,3,146,116],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,145,115],[10,74,46,23,75,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,145,115,1,146,116],[14,74,46,21,75,47],[29,54,24,19,55,25],[11,45,15,46,46,16],[13,145,115,6,146,116],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,16,1,47,17],[12,151,121,7,152,122],[12,75,47,26,76,48],[39,54,24,14,55,25],[22,45,15,41,46,16],[6,151,121,14,152,122],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[17,152,122,4,153,123],[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,152,122,18,153,123],[13,74,46,32,75,47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,147,117,4,148,118],[40,75,47,7,76,48],[43,54,24,22,55,25],[10,45,15,67,46,16],[19,148,118,6,149,119],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,61,46,16]],r=function(t,r){var e={};return e.totalCount=t,e.dataCount=r,e},e={},o=function(r,e){switch(e){case n.L:return t[4*(r-1)+0];case n.M:return t[4*(r-1)+1];case n.Q:return t[4*(r-1)+2];case n.H:return t[4*(r-1)+3];default:return}};return e.getRSBlocks=function(t,e){var n=o(t,e);if(void 0===n)throw new Error("bad rs block @ typeNumber:"+t+"/errorCorrectionLevel:"+e);for(var i=n.length/3,u=new Array,a=0;a<i;a+=1)for(var f=n[3*a+0],c=n[3*a+1],s=n[3*a+2],l=0;l<f;l+=1)u.push(r(c,s));return u},e}(),f=function(){var t=new Array,r=0,e={};return e.getBuffer=function(){return t},e.getAt=function(r){var e=Math.floor(r/8);return 1==(t[e]>>>7-r%8&1)},e.put=function(t,r){for(var n=0;n<r;n+=1)e.putBit(1==(t>>>r-n-1&1))},e.getLengthInBits=function(){return r},e.putBit=function(e){var n=Math.floor(r/8);t.length<=n&&t.push(0),e&&(t[n]|=128>>>r%8),r+=1},e},c=function(t){var r=e.MODE_NUMBER,n=t,o={};o.getMode=function(){return r},o.getLength=function(t){return n.length},o.write=function(t){for(var r=n,e=0;e+2<r.length;)t.put(i(r.substring(e,e+3)),10),e+=3;e<r.length&&(r.length-e==1?t.put(i(r.substring(e,e+1)),4):r.length-e==2&&t.put(i(r.substring(e,e+2)),7))};var i=function(t){for(var r=0,e=0;e<t.length;e+=1)r=10*r+u(t.charAt(e));return r},u=function(t){if("0"<=t&&t<="9")return t.charCodeAt(0)-"0".charCodeAt(0);throw"illegal char :"+t};return o},s=function(t){var r=e.MODE_ALPHA_NUM,n=t,o={};o.getMode=function(){return r},o.getLength=function(t){return n.length},o.write=function(t){for(var r=n,e=0;e+1<r.length;)t.put(45*i(r.charAt(e))+i(r.charAt(e+1)),11),e+=2;e<r.length&&t.put(i(r.charAt(e)),6)};var i=function(t){if("0"<=t&&t<="9")return t.charCodeAt(0)-"0".charCodeAt(0);if("A"<=t&&t<="Z")return t.charCodeAt(0)-"A".charCodeAt(0)+10;switch(t){case" ":return 36;case"$":return 37;case"%":return 38;case"*":return 39;case"+":return 40;case"-":return 41;case".":return 42;case"/":return 43;case":":return 44;default:throw"illegal char :"+t}};return o},l=function(t){var n=e.MODE_8BIT_BYTE,o=r.stringToBytes(t),i={};return i.getMode=function(){return n},i.getLength=function(t){return o.length},i.write=function(t){for(var r=0;r<o.length;r+=1)t.put(o[r],8)},i},h=function(t){var n=e.MODE_KANJI,o=r.stringToBytes(t);!function(t,e){var n=r.stringToBytes("友");if(2!=n.length||38726!=(n[0]<<8|n[1]))throw"sjis not supported."}();var i={};return i.getMode=function(){return n},i.getLength=function(t){return~~(o.length/2)},i.write=function(t){for(var r=o,e=0;e+1<r.length;){var n=(255&r[e])<<8|255&r[e+1];if(33088<=n&&n<=40956)n-=33088;else{if(!(57408<=n&&n<=60351))throw"illegal char at "+(e+1)+"/"+n;n-=49472}n=192*(n>>>8&255)+(255&n),t.put(n,13),e+=2}if(e<r.length)throw"illegal char at "+(e+1)},i},v=function(){var t=new Array,r={};return r.writeByte=function(r){t.push(255&r)},r.writeShort=function(t){r.writeByte(t),r.writeByte(t>>>8)},r.writeBytes=function(t,e,n){e=e||0,n=n||t.length;for(var o=0;o<n;o+=1)r.writeByte(t[o+e])},r.writeString=function(t){for(var e=0;e<t.length;e+=1)r.writeByte(t.charCodeAt(e))},r.toByteArray=function(){return t},r.toString=function(){var r="";r+="[";for(var e=0;e<t.length;e+=1)e>0&&(r+=","),r+=t[e];return r+="]"},r},d=function(){var t=0,r=0,e=0,n="",o={},i=function(t){n+=String.fromCharCode(u(63&t))},u=function(t){if(t<0);else{if(t<26)return 65+t;if(t<52)return t-26+97;if(t<62)return t-52+48;if(62==t)return 43;if(63==t)return 47}throw new Error("n:"+t)};return o.writeByte=function(n){for(t=t<<8|255&n,r+=8,e+=1;r>=6;)i(t>>>r-6),r-=6},o.flush=function(){if(r>0&&(i(t<<6-r),t=0,r=0),e%3!=0)for(var o=3-e%3,u=0;u<o;u+=1)n+="="},o.toString=function(){return n},o},g=function(t){var r=t,e=0,n=0,o=0,i={};i.read=function(){for(;o<8;){if(e>=r.length){if(0==o)return-1;throw new Error("unexpected end of file./"+o)}var t=r.charAt(e);if(e+=1,"="==t)return o=0,-1;t.match(/^\s$/)||(n=n<<6|u(t.charCodeAt(0)),o+=6)}var i=n>>>o-8&255;return o-=8,i};var u=function(t){if(65<=t&&t<=90)return t-65;if(97<=t&&t<=122)return t-97+26;if(48<=t&&t<=57)return t-48+52;if(43==t)return 62;if(47==t)return 63;throw new Error("c:"+t)};return i},p=function(t,r){var e=t,n=r,o=new Array(t*r),i={};i.setPixel=function(t,r,n){o[r*e+t]=n},i.write=function(t){t.writeString("GIF87a"),t.writeShort(e),t.writeShort(n),t.writeByte(128),t.writeByte(0),t.writeByte(0),t.writeByte(0),t.writeByte(0),t.writeByte(0),t.writeByte(255),t.writeByte(255),t.writeByte(255),t.writeString(","),t.writeShort(0),t.writeShort(0),t.writeShort(e),t.writeShort(n),t.writeByte(0);var r=a(2);t.writeByte(2);for(var o=0;r.length-o>255;)t.writeByte(255),t.writeBytes(r,o,255),o+=255;t.writeByte(r.length-o),t.writeBytes(r,o,r.length-o),t.writeByte(0),t.writeString(";")};var u=function(t){var r=t,e=0,n=0,o={};return o.write=function(t,o){if(t>>>o!=0)throw new Error("length over");for(;e+o>=8;)r.writeByte(255&(t<<e|n)),o-=8-e,t>>>=8-e,n=0,e=0;n|=t<<e,e+=o},o.flush=function(){e>0&&r.writeByte(n)},o},a=function(t){for(var r=1<<t,e=1+(1<<t),n=t+1,i=f(),a=0;a<r;a+=1)i.add(String.fromCharCode(a));i.add(String.fromCharCode(r)),i.add(String.fromCharCode(e));var c=v(),s=u(c);s.write(r,n);var l=0,h=String.fromCharCode(o[l]);for(l+=1;l<o.length;){var d=String.fromCharCode(o[l]);l+=1,i.contains(h+d)?h+=d:(s.write(i.indexOf(h),n),i.size()<4095&&(i.size()==1<<n&&(n+=1),i.add(h+d)),h=d)}return s.write(i.indexOf(h),n),s.write(e,n),s.flush(),c.toByteArray()},f=function(){var t={},r=0,e={};return e.add=function(n){if(e.contains(n))throw new Error("dup key:"+n);t[n]=r,r+=1},e.size=function(){return r},e.indexOf=function(r){return t[r]},e.contains=function(r){return void 0!==t[r]},e};return i},y=function(t,r,e,n){for(var o=p(t,r),i=0;i<r;i+=1)for(var u=0;u<t;u+=1)o.setPixel(u,i,e(u,i));var a=v();o.write(a);for(var f=d(),c=a.toByteArray(),s=0;s<c.length;s+=1)f.writeByte(c[s]);f.flush();var l="";return l+="<img",l+=' src="',l+="data:image/gif;base64,",l+=f,l+='"',l+=' width="',l+=t,l+='"',l+=' height="',l+=r,l+='"',n&&(l+=' alt="',l+=n,l+='"'),l+="/>"},w=function(t,r,e){for(var n=p(t,r),o=0;o<r;o+=1)for(var i=0;i<t;i+=1)n.setPixel(i,o,e(i,o));var u=v();n.write(u);for(var a=d(),f=u.toByteArray(),c=0;c<f.length;c+=1)a.writeByte(f[c]);a.flush();var s=new Image;return s.src="data:image/gif;base64,"+a,s.width=t,s.height=r,s};return{QRCode:r,QRUtil:i}}());!function(e){o=[],n=e,void 0!==(i="function"==typeof n?n.apply(r,o):n)&&(t.exports=i)}(function(){return{QRCode:a.QRCode,QRUtil:a.QRUtil}})},function(t,r,e){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}r.__esModule=!0;var o=e(23),i=n(o),u=e(59),a=n(u),f="function"==typeof a.default&&"symbol"==typeof i.default?function(t){return typeof t}:function(t){return t&&"function"==typeof a.default&&t.constructor===a.default&&t!==a.default.prototype?"symbol":typeof t};r.default="function"==typeof a.default&&"symbol"===f(i.default)?function(t){return void 0===t?"undefined":f(t)}:function(t){return t&&"function"==typeof a.default&&t.constructor===a.default&&t!==a.default.prototype?"symbol":void 0===t?"undefined":f(t)}},function(t,r,e){t.exports={default:e(24),__esModule:!0}},function(t,r,e){e(25),e(54),t.exports=e(58).f("iterator")},function(t,r,e){"use strict";var n=e(26)(!0);e(29)(String,"String",function(t){this._t=String(t),this._i=0},function(){var t,r=this._t,e=this._i;return e>=r.length?{value:void 0,done:!0}:(t=n(r,e),this._i+=t.length,{value:t,done:!1})})},function(t,r,e){var n=e(27),o=e(28);t.exports=function(t){return function(r,e){var i,u,a=String(o(r)),f=n(e),c=a.length;return f<0||f>=c?t?"":void 0:(i=a.charCodeAt(f),i<55296||i>56319||f+1===c||(u=a.charCodeAt(f+1))<56320||u>57343?t?a.charAt(f):i:t?a.slice(f,f+2):u-56320+(i-55296<<10)+65536)}}},function(t,r){var e=Math.ceil,n=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?n:e)(t)}},function(t,r){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},function(t,r,e){"use strict";var n=e(30),o=e(6),i=e(31),u=e(11),a=e(32),f=e(33),c=e(34),s=e(50),l=e(52),h=e(51)("iterator"),v=!([].keys&&"next"in[].keys()),d="keys",g="values",p=function(){return this};t.exports=function(t,r,e,y,w,m,b){c(e,r,y);var x,A,_,E=function(t){if(!v&&t in P)return P[t];switch(t){case d:case g:return function(){return new e(this,t)}}return function(){return new e(this,t)}},M=r+" Iterator",O=w==g,T=!1,P=t.prototype,B=P[h]||P["@@iterator"]||w&&P[w],S=B||E(w),C=w?O?E("entries"):S:void 0,k="Array"==r?P.entries||B:B;if(k&&(_=l(k.call(new t)))!==Object.prototype&&(s(_,M,!0),n||a(_,h)||u(_,h,p)),O&&B&&B.name!==g&&(T=!0,S=function(){return B.call(this)}),n&&!b||!v&&!T&&P[h]||u(P,h,S),f[r]=S,f[M]=p,w)if(x={values:O?S:E(g),keys:m?S:E(d),entries:C},b)for(A in x)A in P||i(P,A,x[A]);else o(o.P+o.F*(v||T),r,x);return x}},function(t,r){t.exports=!0},function(t,r,e){t.exports=e(11)},function(t,r){var e={}.hasOwnProperty;t.exports=function(t,r){return e.call(t,r)}},function(t,r){t.exports={}},function(t,r,e){"use strict";var n=e(35),o=e(20),i=e(50),u={};e(11)(u,e(51)("iterator"),function(){return this}),t.exports=function(t,r,e){t.prototype=n(u,{next:o(1,e)}),i(t,r+" Iterator")}},function(t,r,e){var n=e(13),o=e(36),i=e(48),u=e(45)("IE_PROTO"),a=function(){},f="prototype",c=function(){var t,r=e(18)("iframe"),n=i.length;for(r.style.display="none",e(49).appendChild(r),r.src="javascript:",t=r.contentWindow.document,t.open(),t.write("<script>document.F=Object<\/script>"),t.close(),c=t.F;n--;)delete c[f][i[n]];return c()};t.exports=Object.create||function(t,r){var e;return null!==t?(a[f]=n(t),e=new a,a[f]=null,e[u]=t):e=c(),void 0===r?e:o(e,r)}},function(t,r,e){var n=e(12),o=e(13),i=e(37);t.exports=e(16)?Object.defineProperties:function(t,r){o(t);for(var e,u=i(r),a=u.length,f=0;a>f;)n.f(t,e=u[f++],r[e]);return t}},function(t,r,e){var n=e(38),o=e(48);t.exports=Object.keys||function(t){return n(t,o)}},function(t,r,e){var n=e(32),o=e(39),i=e(42)(!1),u=e(45)("IE_PROTO");t.exports=function(t,r){var e,a=o(t),f=0,c=[];for(e in a)e!=u&&n(a,e)&&c.push(e);for(;r.length>f;)n(a,e=r[f++])&&(~i(c,e)||c.push(e));return c}},function(t,r,e){var n=e(40),o=e(28);t.exports=function(t){return n(o(t))}},function(t,r,e){var n=e(41);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==n(t)?t.split(""):Object(t)}},function(t,r){var e={}.toString;t.exports=function(t){return e.call(t).slice(8,-1)}},function(t,r,e){var n=e(39),o=e(43),i=e(44);t.exports=function(t){return function(r,e,u){var a,f=n(r),c=o(f.length),s=i(u,c);if(t&&e!=e){for(;c>s;)if((a=f[s++])!=a)return!0}else for(;c>s;s++)if((t||s in f)&&f[s]===e)return t||s||0;return!t&&-1}}},function(t,r,e){var n=e(27),o=Math.min;t.exports=function(t){return t>0?o(n(t),9007199254740991):0}},function(t,r,e){var n=e(27),o=Math.max,i=Math.min;t.exports=function(t,r){return t=n(t),t<0?o(t+r,0):i(t,r)}},function(t,r,e){var n=e(46)("keys"),o=e(47);t.exports=function(t){return n[t]||(n[t]=o(t))}},function(t,r,e){var n=e(7),o="__core-js_shared__",i=n[o]||(n[o]={});t.exports=function(t){return i[t]||(i[t]={})}},function(t,r){var e=0,n=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++e+n).toString(36))}},function(t,r){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(t,r,e){t.exports=e(7).document&&document.documentElement},function(t,r,e){var n=e(12).f,o=e(32),i=e(51)("toStringTag");t.exports=function(t,r,e){t&&!o(t=e?t:t.prototype,i)&&n(t,i,{configurable:!0,value:r})}},function(t,r,e){var n=e(46)("wks"),o=e(47),i=e(7).Symbol,u="function"==typeof i;(t.exports=function(t){return n[t]||(n[t]=u&&i[t]||(u?i:o)("Symbol."+t))}).store=n},function(t,r,e){var n=e(32),o=e(53),i=e(45)("IE_PROTO"),u=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=o(t),n(t,i)?t[i]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?u:null}},function(t,r,e){var n=e(28);t.exports=function(t){return Object(n(t))}},function(t,r,e){e(55);for(var n=e(7),o=e(11),i=e(33),u=e(51)("toStringTag"),a=["NodeList","DOMTokenList","MediaList","StyleSheetList","CSSRuleList"],f=0;f<5;f++){var c=a[f],s=n[c],l=s&&s.prototype;l&&!l[u]&&o(l,u,c),i[c]=i.Array}},function(t,r,e){"use strict";var n=e(56),o=e(57),i=e(33),u=e(39);t.exports=e(29)(Array,"Array",function(t,r){this._t=u(t),this._i=0,this._k=r},function(){var t=this._t,r=this._k,e=this._i++;return!t||e>=t.length?(this._t=void 0,o(1)):"keys"==r?o(0,e):"values"==r?o(0,t[e]):o(0,[e,t[e]])},"values"),i.Arguments=i.Array,n("keys"),n("values"),n("entries")},function(t,r){t.exports=function(){}},function(t,r){t.exports=function(t,r){return{value:r,done:!!t}}},function(t,r,e){r.f=e(51)},function(t,r,e){t.exports={default:e(60),__esModule:!0}},function(t,r,e){e(61),e(72),e(73),e(74),t.exports=e(8).Symbol},function(t,r,e){"use strict";var n=e(7),o=e(32),i=e(16),u=e(6),a=e(31),f=e(62).KEY,c=e(17),s=e(46),l=e(50),h=e(47),v=e(51),d=e(58),g=e(63),p=e(64),y=e(65),w=e(68),m=e(13),b=e(39),x=e(19),A=e(20),_=e(35),E=e(69),M=e(71),O=e(12),T=e(37),P=M.f,B=O.f,S=E.f,C=n.Symbol,k=n.JSON,D=k&&k.stringify,j="prototype",I=v("_hidden"),N=v("toPrimitive"),L={}.propertyIsEnumerable,R=s("symbol-registry"),F=s("symbols"),Q=s("op-symbols"),U=Object[j],H="function"==typeof C,J=n.QObject,K=!J||!J[j]||!J[j].findChild,q=i&&c(function(){return 7!=_(B({},"a",{get:function(){return B(this,"a",{value:7}).a}})).a})?function(t,r,e){var n=P(U,r);n&&delete U[r],B(t,r,e),n&&t!==U&&B(U,r,n)}:B,Y=function(t){var r=F[t]=_(C[j]);return r._k=t,r},z=H&&"symbol"==typeof C.iterator?function(t){return"symbol"==typeof t}:function(t){return t instanceof C},W=function(t,r,e){return t===U&&W(Q,r,e),m(t),r=x(r,!0),m(e),o(F,r)?(e.enumerable?(o(t,I)&&t[I][r]&&(t[I][r]=!1),e=_(e,{enumerable:A(0,!1)})):(o(t,I)||B(t,I,A(1,{})),t[I][r]=!0),q(t,r,e)):B(t,r,e)},$=function(t,r){m(t);for(var e,n=y(r=b(r)),o=0,i=n.length;i>o;)W(t,e=n[o++],r[e]);return t},G=function(t,r){return void 0===r?_(t):$(_(t),r)},V=function(t){var r=L.call(this,t=x(t,!0));return!(this===U&&o(F,t)&&!o(Q,t))&&(!(r||!o(this,t)||!o(F,t)||o(this,I)&&this[I][t])||r)},Z=function(t,r){if(t=b(t),r=x(r,!0),t!==U||!o(F,r)||o(Q,r)){var e=P(t,r);return!e||!o(F,r)||o(t,I)&&t[I][r]||(e.enumerable=!0),e}},X=function(t){for(var r,e=S(b(t)),n=[],i=0;e.length>i;)o(F,r=e[i++])||r==I||r==f||n.push(r);return n},tt=function(t){for(var r,e=t===U,n=S(e?Q:b(t)),i=[],u=0;n.length>u;)!o(F,r=n[u++])||e&&!o(U,r)||i.push(F[r]);return i};H||(C=function(){if(this instanceof C)throw TypeError("Symbol is not a constructor!");var t=h(arguments.length>0?arguments[0]:void 0),r=function(e){this===U&&r.call(Q,e),o(this,I)&&o(this[I],t)&&(this[I][t]=!1),q(this,t,A(1,e))};return i&&K&&q(U,t,{configurable:!0,set:r}),Y(t)},a(C[j],"toString",function(){return this._k}),M.f=Z,O.f=W,e(70).f=E.f=X,e(67).f=V,e(66).f=tt,i&&!e(30)&&a(U,"propertyIsEnumerable",V,!0),d.f=function(t){return Y(v(t))}),u(u.G+u.W+u.F*!H,{Symbol:C});for(var rt="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),et=0;rt.length>et;)v(rt[et++]);for(var rt=T(v.store),et=0;rt.length>et;)g(rt[et++]);u(u.S+u.F*!H,"Symbol",{for:function(t){return o(R,t+="")?R[t]:R[t]=C(t)},keyFor:function(t){if(z(t))return p(R,t);throw TypeError(t+" is not a symbol!")},useSetter:function(){K=!0},useSimple:function(){K=!1}}),u(u.S+u.F*!H,"Object",{create:G,defineProperty:W,defineProperties:$,getOwnPropertyDescriptor:Z,getOwnPropertyNames:X,getOwnPropertySymbols:tt}),k&&u(u.S+u.F*(!H||c(function(){var t=C();return"[null]"!=D([t])||"{}"!=D({a:t})||"{}"!=D(Object(t))})),"JSON",{stringify:function(t){if(void 0!==t&&!z(t)){for(var r,e,n=[t],o=1;arguments.length>o;)n.push(arguments[o++]);return r=n[1],"function"==typeof r&&(e=r),!e&&w(r)||(r=function(t,r){if(e&&(r=e.call(this,t,r)),!z(r))return r}),n[1]=r,D.apply(k,n)}}}),C[j][N]||e(11)(C[j],N,C[j].valueOf),l(C,"Symbol"),l(Math,"Math",!0),l(n.JSON,"JSON",!0)},function(t,r,e){var n=e(47)("meta"),o=e(14),i=e(32),u=e(12).f,a=0,f=Object.isExtensible||function(){return!0},c=!e(17)(function(){return f(Object.preventExtensions({}))}),s=function(t){u(t,n,{value:{i:"O"+ ++a,w:{}}})},l=function(t,r){if(!o(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!i(t,n)){if(!f(t))return"F";if(!r)return"E";s(t)}return t[n].i},h=function(t,r){if(!i(t,n)){if(!f(t))return!0;if(!r)return!1;s(t)}return t[n].w},v=function(t){return c&&d.NEED&&f(t)&&!i(t,n)&&s(t),t},d=t.exports={KEY:n,NEED:!1,fastKey:l,getWeak:h,onFreeze:v}},function(t,r,e){var n=e(7),o=e(8),i=e(30),u=e(58),a=e(12).f;t.exports=function(t){var r=o.Symbol||(o.Symbol=i?{}:n.Symbol||{});"_"==t.charAt(0)||t in r||a(r,t,{value:u.f(t)})}},function(t,r,e){var n=e(37),o=e(39);t.exports=function(t,r){for(var e,i=o(t),u=n(i),a=u.length,f=0;a>f;)if(i[e=u[f++]]===r)return e}},function(t,r,e){var n=e(37),o=e(66),i=e(67);t.exports=function(t){var r=n(t),e=o.f;if(e)for(var u,a=e(t),f=i.f,c=0;a.length>c;)f.call(t,u=a[c++])&&r.push(u);return r}},function(t,r){r.f=Object.getOwnPropertySymbols},function(t,r){r.f={}.propertyIsEnumerable},function(t,r,e){var n=e(41);t.exports=Array.isArray||function(t){return"Array"==n(t)}},function(t,r,e){var n=e(39),o=e(70).f,i={}.toString,u="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],a=function(t){try{return o(t)}catch(t){return u.slice()}};t.exports.f=function(t){return u&&"[object Window]"==i.call(t)?a(t):o(n(t))}},function(t,r,e){var n=e(38),o=e(48).concat("length","prototype");r.f=Object.getOwnPropertyNames||function(t){return n(t,o)}},function(t,r,e){var n=e(67),o=e(20),i=e(39),u=e(19),a=e(32),f=e(15),c=Object.getOwnPropertyDescriptor;r.f=e(16)?c:function(t,r){if(t=i(t),r=u(r,!0),f)try{return c(t,r)}catch(t){}if(a(t,r))return o(!n.f.call(t,r),t[r])}},function(t,r){},function(t,r,e){e(63)("asyncIterator")},function(t,r,e){e(63)("observable")},function(t,r,e){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(r,"__esModule",{value:!0});var o=e(1),i=n(o),u=e(2),a=n(u),f=function(){function t(){(0,i.default)(this,t)}return(0,a.default)(t,null,[{key:"createCanvas",value:function(t,r){var e=document.createElement("canvas");return e.width=t,e.height=t,e.getContext("2d").drawImage(r,0,0,t,t),e}},{key:"threshold",value:function(t,r,e,n){return.2126*t+.7152*r+.0722*e>=n?255:0}}]),t}();r.default=f}])})},function(t,r){t.exports=function(t,r,e,n){var o,i=t=t||{},u=typeof t.default;"object"!==u&&"function"!==u||(o=t,i=t.default);var a="function"==typeof i?i.options:i;if(r&&(a.render=r.render,a.staticRenderFns=r.staticRenderFns),e&&(a._scopeId=e),n){var f=a.computed||(a.computed={});Object.keys(n).forEach(function(t){var r=n[t];f[t]=function(){return r}})}return{esModule:o,exports:i,options:a}}},function(t,r){t.exports={render:function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",[e("div",{ref:"qart"}),t._v(" "),t.download.visible?e("a",{style:t.download.style,on:{click:t.convertToImage}},[t._v(t._s(t.download.text))]):t._e()])},staticRenderFns:[]}}])});

/***/ })

}]);
//# sourceMappingURL=16.js.map