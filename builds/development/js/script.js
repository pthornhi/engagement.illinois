////////////////////////////////////////////
// 
//   Countdown
//   v5.0
//   Sept. 3, 2014
//   www.gieson.com
//   Copyright Mike Gieson
// 
//////////////////////////////////////////////////////////////////////////////////////
//
// The MIT License (MIT)
// 
//////////////////////////////////////////////////////////////////////////////////////
//
// Copyright (c) 2014 Mike Gieson www.gieson.com
// 
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
// 
// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.
// 
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.
//
//////////////////////////////////////////////////////////////////////////////////////




// -----------------------------------------
//
// Usage:
// var test = new Countdown({time:15});
//
// -----------------------------------------

var CountdownImageFolder = "/images/countdown/"; // Should have trailing slash.
// NOTE: The countdown script assumes the folder is relative to the countdown.js script file.
// When CountdownImageFolder starts with a slash "/", or "http" the script will not assume the 
// folder is relative to the script and you can hard-code another folder on your site.
// Examples:
// var CountdownImageFolder = "/path/to/images/"; // Starts with a slash ( / ) as a shortcut to the root of your site.
// var CountdownImageFolder = "http://www.yoursite.com/path/to/images/";
var CountdownImageBasename = "flipper";
var CountdownImageExt = "png";
var CountdownImagePhysicalWidth = 41;
var CountdownImagePhysicalHeight = 60;

var CountdownWidth = 200;
var CountdownHeight = 30;

var CountdownLabels = {
	second 	: "SECONDS",
	minute 	: "MINUTES",
	hour	: "HOURS",
	day 	: "DAYS",
	month 	: "MONTHS",
	year 	: "YEARS"	
};

var CountdownInterval = 76;


////////////////////////////////////////////
//                                        //
//                 jbeeb                  //
//         version 0.0.0.3 alpha          //
//             www.jbeeb.com              //
//          Copyright Mike Gieson         //
//                                        //
////////////////////////////////////////////

if(!Array.prototype.indexOf)Array.prototype.indexOf=function(c){if(this==null)throw new TypeError;var b=Object(this),a=b.length>>>0;if(a===0)return-1;var h=0;arguments.length>1&&(h=Number(arguments[1]),h!=h?h=0:h!=0&&h!=Infinity&&h!=-Infinity&&(h=(h>0||-1)*Math.floor(Math.abs(h))));if(h>=a)return-1;for(h=h>=0?h:Math.max(a-Math.abs(h),0);h<a;h++)if(h in b&&b[h]===c)return h;return-1};
if(!Function.prototype.bind)Function.prototype.bind=function(c){if(typeof this!=="function")throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");var b=Array.prototype.slice.call(arguments,1),a=this,h=function(){},e=function(){return a.apply(this instanceof h&&c?this:c,b.concat(Array.prototype.slice.call(arguments)))};h.prototype=this.prototype;e.prototype=new h;return e};this.jbeeb=this.jbeeb||{};
(function(){var c=function(){},b=Object.prototype.toString,a=String.prototype.trim;c.link=function(a,b,d){var d=d||{},b=b||"_blank",f=[],c;for(c in d)c=c.toLowerCase(),c=="width"||c=="height"||c=="left"?f.push(c+"="+d[c]):(c=="location"||c=="menubar"||c=="resizable"||c=="scrollbars"||c=="status"||c=="titlebar"||c=="toolbar")&&f.push(c+"=1");d=null;f.length>0&&(d=f.join(","));window.open(a,b,d)};c.isArray=function(a){return Array.isArray?Array.isArray(a):b.call(a)==="[object Array]"};c.isEmpty=function(a){var b=
typeof a;if(b=="undefined")return true;if(a===null)return true;else if(b=="object"){if(a=={}||a==[])return true;var b=true,d;for(d in a)if(!c.isEmpty(a[d])){b=false;break}return b}else return b=="string"&&a==""?true:false};c.isNumber=function(a){return b.call(a)==="[object Number]"&&isFinite(a)};c.isInteger=function(a){return parseFloat(a)==parseInt(a)&&!isNaN(a)&&isFinite(a)};c.isString=function(a){return b.call(a)==="[object String]"};c.isNull=function(a){return a===""||a===null||a===void 0||typeof a==
"undefined"||a=="undefined"||a=="null"?true:false};c.clone=function(a){if(a===null||typeof a!="object")return a;if(a.init)return a;else{var b=a.constructor;if(b){var d=new b,f;for(f in a)d[f]=c.clone(a[f])}}return d};c.sortOn=function(a,b){if(!b||!a)return a;a.sort(function(a,h){return a[b]<h[b]?-1:a[b]>h[b]?1:0})};c.arrayShuffle=function(a){if(a){for(var b=a.length,d,f;b;)f=Math.floor(Math.random()*b--),d=a[b],a[b]=a[f],a[f]=d;return a}else return[]};c.arrayMove=function(a,b,d){a.splice(d,0,a.splice(b,
1)[0])};c.arrayInsertAt=function(a,b,d){Array.prototype.splice.apply(a,[b,0].concat(d));return a};c.rtrim=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;c.trim=a&&!a.call("\ufeff\u00a0")?function(h){return h==null?"":a.call(h)}:function(a){return a==null?"":(a+"").replace(c.rtrim,"")};c.alphanumeric=function(a,b){return b?a.replace(/[^A-Za-z0-9]/g,""):a.replace(/[^A-Za-z0-9_\-\.]/g,"")};c.parseJSON=function(a){if(typeof a!="string")return null;try{return JSON.parse(a)}catch(b){return a||null}};c.hexToRgb=function(a){return!a?
"":(a=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(a))?[parseInt(a[1],16),parseInt(a[2],16),parseInt(a[3],16)]:[0,0,0]};c.makeColor=function(a,b){if(!a)return"";var d=c.hexToRgb(a);return c.isNumber(b)&&jbeeb.Browser.rgba?(b>1&&(b/=100),"rgba("+d.join(",")+(","+b)+")"):a};c.getXYWH=function(a){var b=0,d=0,f=0,c=0;if(a){for(var f=a.offsetWidth,c=a.offsetHeight,g=jbeeb.Browser.touch;a&&!isNaN(a.offsetLeft)&&!isNaN(a.offsetTop);)g?(b+=(a.offsetLeft||0)-(a.scrollLeft||0),d+=(a.offsetTop||0)-(a.scrollTop||
0)):(b+=a.offsetLeft||0,d+=a.offsetTop||0),a=a.offsetParent;g&&(a=window.scrollY!=null?window.scrollY:window.pageYOffset,b+=window.scrollX!=null?window.scrollX:window.pageXOffset,d+=a)}return{x:b,y:d,w:f,h:c,xMax:b+f,yMax:d+c}};c.getWindowSize=function(){var a=window,b=document,d=b.documentElement,b=b.getElementsByTagName("body")[0];return{w:a.innerWidth||d.clientWidth||b.clientWidth,h:a.innerHeight||d.clientHeight||b.clientHeight}};c.contains=function(a,b){var d={},f={x:a.x,y:a.y,w:a.width,h:a.height},
c={x:b.x,y:b.y,w:b.width,h:b.height};f.xMax=f.x+f.w;f.yMax=f.y+f.h;c.xMax=c.x+c.w;c.yMax=c.y+c.h;for(var g in f)d[g]=f[g]>=c[g]?true:false;return!d.x&&!d.y&&d.xMax&&d.yMax?true:false};c.getTimestamp=function(){var a=new Date;return Date.UTC(a.getFullYear(),a.getMonth(),a.getDate(),a.getHours(),a.getMinutes(),a.getSeconds(),a.getMilliseconds()).valueOf()};c.bindEvent=function(a,b,d){a.attachEvent?a.attachEvent("on"+b,d):a.addEventListener&&a.addEventListener(b,d,false)};c.unbindEvent=function(a,b,
d){a.attachEvent?a.detachEvent("on"+b,d):a.addEventListener&&a.removeEventListener(b,d,false)};c.getAttributes=function(a){var b={};if(a=a.attributes){for(var d=a.length,f=0;f<d;f++)jbeeb.Browser.ie?a[f].specified&&(b[a[f].nodeName]=a[f].nodeValue.toString()):b[a[f].nodeName]=a[f].value?a[f].value.toString():a[f].nodeValue.toString();return b}else return{}};jbeeb.Utils=c})();this.jbeeb=this.jbeeb||{};
(function(){var c=function(){this.initialize()},b=c.prototype;c.initialize=function(a){a.addEventListener=b.addEventListener;a.removeEventListener=b.removeEventListener;a.removeAllEventListeners=b.removeAllEventListeners;a.hasEventListener=b.hasEventListener;a.dispatchEvent=b.dispatchEvent};b._listeners=null;b.initialize=function(){};b.addEventListener=function(a,b,e,d){var f=this._listeners;f?this.removeEventListener(a,b,e):f=this._listeners={};var c=f[a];c||(c=f[a]=[]);c.push({fn:b,arg:d,scope:e});
return b};b.removeEventListener=function(a,b,e){var d=this._listeners;if(d&&(a=d[a]))for(d=a.length;d--;){var c=a[d];c.scope==e&&c.fn==b&&a.splice(d,1)}};b.removeAllEventListeners=function(a){a?this._listeners&&delete this._listeners[a]:this._listeners=null};b.dispatchEvent=function(a){var b=this._listeners;if(a&&b&&(b=b[a])){var e=[].slice.call(arguments);e.splice(0,1);for(var d=0;d<b.length;d++){var c=b[d];if(c.fn){var i=e,g=c.arg;typeof g!=="undefined"&&i.push(g);i.length?c.scope?c.fn.apply(c.scope,
i):c.fn.apply(null,i):c.scope?c.fn.call(c.scope):c.fn()}}}};b.hasEventListener=function(a){var b=this._listeners;return!(!b||!b[a])};b.toString=function(){return"[EventDispatcher]"};if(!jbeeb.EventDispatcher)jbeeb.EventDispatcher=c})();this.jbeeb=this.jbeeb||{};
(function(){var c;if(!jbeeb.ready)jbeeb.ready=function(){var b,a,h=[],e,d=document,c=d.documentElement,i=c.doScroll,g=(i?/^loaded|^c/:/^loaded|c/).test(d.readyState);a=function(b){try{b=d.getElementsByTagName("body")[0].appendChild(d.createElement("span")),b.parentNode.removeChild(b)}catch(e){return setTimeout(function(){a()},50)}for(g=1;b=h.shift();)b()};d.addEventListener&&(e=function(){d.removeEventListener("DOMContentLoaded",e,false);a()},d.addEventListener("DOMContentLoaded",e,false),b=function(a){g?
a():h.push(a)});i&&(e=function(){/^c/.test(d.readyState)&&(d.detachEvent("onreadystatechange",e),a())},d.attachEvent("onreadystatechange",e),b=function(a){if(self!=top)g?a():h.push(a);else{try{c.doScroll("left")}catch(e){return setTimeout(function(){b(a)},50)}a()}});return b}()})();this.jbeeb=this.jbeeb||{};
(function(){function c(){return a&&a.call(performance)||(new Date).getTime()}var b=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame,a=window.performance&&(performance.now||performance.mozNow||performance.msNow||performance.oNow||performance.webkitNow),h=function(a){this.init(a);return this},e=h.prototype;e.addEventListener=null;e.removeEventListener=null;e.removeAllEventListeners=null;e.dispatchEvent=
null;e.hasEventListener=null;jbeeb.EventDispatcher.initialize(e);e._interval=50;e._lastTime=0;e._times=null;e._active=null;e._loopHandler=null;e._useRAF=false;e.state=0;e.init=function(a){a.fps?(this._useRAF=a.animation&&b||false,this._interval=1E3/(a.fps||60)):this._interval=a.interval||50;a.startNow&&this.start()};e.stop=function(){this.state=0;this._setLoopHandler(this._handleStop)};e.getInterval=function(){return this._interval};e.setInterval=function(a){this._interval=a};e.start=function(){if(!this.state)this.state=
1,this._times=[],this._times.push(this._lastTime=c()),this._useRAF?this._setLoopHandler(this._handleRAF):this._setLoopHandler(this._handleTimeout),this._loop()};e.getFPS=function(){var a=this._times.length-1;return a<2?this._interval:1E3/((this._times[0]-this._times[a])/a)};e._handleRAF=function(){this._active=null;this._loop();c()-this._lastTime>=(this._interval-1)*0.97&&this._tick()};e._handleTimeout=function(){this._active=null;this._loop();this._tick()};e._handleStop=function(){this._active=null};
e._loop=function(){if(this._active==null)this._useRAF?(b(this._loopHandler),this._active=true):(this._active&&clearTimeout(this._active),this._active=setTimeout(this._loopHandler,this._interval))};e._setLoopHandler=function(a){this._loopHandler=a.bind(this)};e._tick=function(){var a=c(),b=a-this._lastTime;this._lastTime=a;this.dispatchEvent("tick",{delta:b,time:a});for(this._times.unshift(a);this._times.length>100;)this._times.pop()};e.toString=function(){return"[Ticker]"};if(!jbeeb.Ticker)jbeeb.Ticker=
h})();this.jbeeb=this.jbeeb||{};
(function(){var c,b;if(!jbeeb.Browser){var a={ie:null,ios:null,mac:null,webkit:null,oldWebkit:false,flash:0,touch:false};c=navigator.userAgent;c=c.toLowerCase();b=/(chrome)[ \/]([\w.]+)/.exec(c)||/(webkit)[ \/]([\w.]+)/.exec(c)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(c)||/(msie) ([\w.]+)/.exec(c)||c.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(c)||[];c=b[1]||"";b=b[2]||"0";a.version=parseFloat(b);a.agent=c;b=false;c=="chrome"?b=true:c=="webkit"&&(b=true);a.webkit=b;a.chrome=/chrome/.test(c)||
/chromium/.test(c);a.moz=/mozilla/.test(c);a.opera=/opera/.test(c);a.safari=/webkit/.test(c);a.ie=/msie/.test(c)&&!/opera/.test(c);a.android=/android/.test(c);b=navigator.platform.toLowerCase();a.platform=b;a.ios=/iphone/.test(b)||/ipod/.test(b)||/ipad/.test(b);a.win=a.windows=b?/win/.test(b):/win/.test(c);a.mac=b?/mac/.test(b):/mac/.test(c);a.cssPrefix="";if(a.chrome||a.safari)if(a.cssPrefix="webkit",a.chrome&&a.version<10)a.oldWebkit=true;else{if(a.safari&&a.version<5.1)a.oldWebkit=true}else if(a.opera)a.cssPrefix=
"o";else if(a.moz)a.cssPrefix="moz";else if(a.ie&&a.version>8)a.cssPrefix="ms";if(a.chrome||a.ios||a.android)a.flash=0;c=false;b="Webkit Moz O ms Khtml".split(" ");var h="",h=document.createElement("div");h.style.animationName&&(c=true);if(c===false)for(var e=0;e<b.length;e++)if(h.style[b[e]+"AnimationName"]!==void 0){h=b[e];h.toLowerCase();c=true;break}a.animation=c;a.modern=false;if(a.moz&&a.version>3)a.modern=true;if(a.opera&&a.version>9)a.modern=true;if(a.ie&&a.version>9)a.modern=true;if(a.chrome||
a.safari||a.ios||a.android)a.modern=true;a.rgba=true;a.quirks=document.compatMode=="CSS1Compat"?false:true;if(a.ie)if(a.version<9)a.rgba=false;else{if(a.quirks)a.rgba=false,a.version=8,a.modern=false}else if(a.moz&&a.version<3)a.rgba=false;else if(a.safari&&a.version<3)a.rgba=false;else if(a.opera&&a.version<10)a.rgba=false;a.touch=typeof window.ontouchstart==="undefined"?false:true;jbeeb.Browser=a}})();this.jbeeb=this.jbeeb||{};
(function(){jbeeb.PathInfo=function(){function c(a,b){var h,k,o,p,v,z,n,m,q,s,r,w,t,y,a=a||"";k=a.replace(/\\/g,"/");k.match(/:\//)||(m="",m=b?d:f,m=c(m,false),k.substr(0,1)=="/"?k=m.host+(e?"":"/")+k:k.substr(0,3)=="../"?(m=m.parenturl.split("/"),k=k.split("../"),o=k.pop(),m.splice(m.length-k.length,k.length,o),k=m.join("/")):k=m.pathurl+(e?"":"/")+k);k.substr(-1)=="/"&&(k=k.substr(0,k.length-1));h=k.split("://");k=h.shift();m=(h.shift()||"").replace("//","/");m=m.split("/");o=m.shift()||"";o.indexOf("@")>
-1&&(h=o.split("@"),t=h[0].split(":"),w=t[0],t=t[1],o=h[1]);o.indexOf(":")>-1&&(h=o.split(":"),p=h[1],o=h[0]);m=m.join("/");m.indexOf("#")!=-1&&(h=m.split("#"),r=h[1],m=h[0]);m.indexOf("?")!=-1&&(h=m.split("?"),s=h[1],m=h[0]);h=m.split("/");n=h.pop();m=h.join("/");n==".."&&(n="");h=n.split(".");h.length>1&&(z=h.pop().toLowerCase(),v=h.join("."));y=k+"://"+o+(p?":"+p:"");m="/"+m+(m.length>0?"/":"");q=y+m;h=y+m+n+(s?"?"+s:"")+(r?"#"+r:"");var l=m,u=q;z?(m+=n,q+=n):(m+=n+(n!=""?"/":""),q+=n+(n!=""?"/":
""),v=n,!s&&!r&&h.substr(-1)!="/"&&(h+="/"));e===false&&(l.substr(-1)=="/"&&(l=l.substr(0,l.length-1)),u.substr(-1)=="/"&&(u=u.substr(0,u.length-1)),z||(m.substr(-1)=="/"&&(m=m.substr(0,m.length-1)),q.substr(-1)=="/"&&(q=q.substr(0,q.length-1)),h.substr(-1)=="/"&&(h=h.substr(0,h.length-1))));return{source:a||null,url:h||null,protocol:k||null,domain:o||null,port:p||null,basename:v||null,ext:z||null,filename:n||null,path:m||null,pathurl:q||null,parent:l||null,parenturl:u||null,query:s||null,fragment:r||
null,username:w||null,password:t||null,host:y||null}}function b(a){return(a||"").split("?")[0].split("/").pop()}function a(a){a=a.split("/");a.pop();return a.join("/").toString()+(a.length>0?"/":"")}function h(b){var h=document.getElementsByTagName("script");return(h=h[h.length-1].getAttribute("src"))?b?h.split("?")[0]:a(h.split("?")[0]):""}var e=true,d=h(),f=a(window.location.href);return{parse:c,filename:b,basename:function(a){a=b(a).split(".");a.pop();return a.join(".")},basepath:a,scriptPath:d,
getScriptPath:h,pagePath:f,ext:function(a){return(a||"").split("?")[0].split("/").pop().split(".").pop().toLowerCase()}}}()})();this.jbeeb=this.jbeeb||{};
(function(){if(!jbeeb.Base)jbeeb.amReady=false,jbeeb.ticker=null,jbeeb.tickerInterval=80,jbeeb.scriptPath=null,jbeeb.pagePath="",jbeeb.assetsBasePath="",jbeeb.focus=null,jbeeb.binit=0;jbeeb.unfocus=function(){if(jbeeb.focus){var b=jbeeb.focus;b.element&&b.element.blur();jbeeb.focus=null}};var c=function(){};c._nextUID=0;c._stages=[];c._readyList=[];c.scriptPath=null;c._getUID=function(){return"jbeeb_"+c._nextUID++};c._register=function(b){c._readyList.push(b);jbeeb.amReady&&c._readyListRun()};c._readyListRun=
function(){var b=c._readyList.length;if(b>0)for(;b--;){var a=c._readyList.splice(b,1)[0];a&&a.init&&a.init.call(a)}};c.init=function(){if(!jbeeb.amReady){jbeeb.ticker=new jbeeb.Ticker({interval:jbeeb.tickerInterval,startNow:1});if(!jbeeb.assetsBasePath)jbeeb.assetsBasePath="";if(window.location.href.substr(0,4)!="http"){if(!jbeeb.pagePath)jbeeb.pagePath="";if(!jbeeb.scriptPath)jbeeb.scriptPath=""}else{if(!jbeeb.pagePath)jbeeb.pagePath=jbeeb.PathInfo.pagePath;if(!jbeeb.scriptPath)jbeeb.scriptPath=
jbeeb.PathInfo.scriptPath}jbeeb.FlashDetect&&jbeeb.FlashDetect.run();jbeeb.amReady=true;c._readyListRun()}};if(!jbeeb.Base)jbeeb.Base=c,jbeeb.register=c._register,jbeeb.getUID=c._getUID})();if(!jbeeb.binit)jbeeb.binit=1,jbeeb.ready(function(){jbeeb.Base.init()});this.jbeeb=this.jbeeb||{};
(function(){var c=function(a){this.init(a)},b=c.prototype;b.addEventListener=null;b.removeEventListener=null;b.removeAllEventListeners=null;b.dispatchEvent=null;b.hasEventListener=null;jbeeb.EventDispatcher.initialize(b);b.amStage=null;b.element=null;b.style=null;b._cssStore=null;b.alpha=1;b.id=null;b.name=null;b.parent=null;b.stage=null;b.rotation=0;b.scale=1;b.scaleX=1;b.scaleY=1;b.stretchX=1;b.stretchY=1;b.skewX=0;b.skewY=0;b.origin=null;b.originX=0;b.originY=0;b.originType="px";b.shadow=null;
b.bevel=null;b.outline=null;b.inset=null;b.visible=true;b.overflow="visible";b.autoCenter=null;b.x=0;b.y=0;b.width=0;b.height=0;b.flex="wh";b._flexW=1;b._flexH=1;b.pin=null;b._pinX=null;b._pinY=null;b.z=0;b.temp=null;b.rounded=null;b.fill=null;b.stroke=null;b.image=null;b.gradient=null;b._blockDisplay=null;b.init=function(a){this.temp={};this.style=null;this.alpha=1;this.parent=this.name=this.id=null;this.rotation=0;this.scaleY=this.scaleX=this.scale=1;this.skewY=this.skewX=0;this.visible=true;this.overflow=
"visible";this.height=this.width=this.y=this.x=0;this.flex="wh";this._flexH=this._flexW=1;this._pinY=this._pinX=this.pin=null;this.z=0;this.autoCenter=null;this.stroke={};this.fill={};this.inset=this.shadow=null;this.gradient={};this.rounded=null;this._cssStore=jbeeb.storeCSS?{}:null;var a=a||{},b=jbeeb.getUID();this.id=b;if(a.element)this.element=a.element;else if(this.element=document.createElement("div"),this.element.id=b,this.element.style.position="absolute",this.element.style.overflow="visible",
this._cssStore)this._cssStore.position="absolute",this._cssStore.overflow="visible";if(a.standalone)this.amStage=1;this._blockDisplay=a.inline?"inline-block":"block";if(a.name)this.name=a.name;this.element.id=this.type+"_"+this.element.id;b=this.style=this.element.style;b.padding="0px";b.margin="0px";b.border="0px";b.fontSize="100%";b.verticalAlign="baseline";b.outline="0px";b.background="transparent";b.WebkitTextSizeAdjust="100%";b.msTextSizeAdjust="100%";b.WebkitBoxSizing=b.MozBoxSizing=b.boxSizing=
"padding-box";b.backgroundClip="padding-box";if(this._cssStore)b=this._cssStore,b.padding="0px",b.margin="0px",b.border="0px",b.fontSize="100%",b.verticalAlign="baseline",b.outline="0px",b.background="transparent",b.WebkitTextSizeAdjust="100%",b.msTextSizeAdjust="100%",b.boxSizing="padding-box",b.backgroundClip="padding-box";a.editable||this.setSelectable(false);this.setCursor("inherit");if(a)this.autoCenter=a.center,typeof a.flex!="undefined"&&this.setFlex(a.flex),typeof a.pin!="undefined"&&this.setPin(a.pin),
typeof a.overflow!="undefined"&&this.setOverflow(a.pin);this.setOrigin(0,0,"px");this.applySkin(a,false)};b.setSelectable=function(a){var b=this.style,e="none",d="-moz-none";a&&(d=e="text");b.userSelect=b.WebkitUserSelect=b.MozUserSelect=b.OUserSelect=e;b.MozUserSelect=d;if(this._cssStore)this._cssStore.userSelect=e,this._cssStore.MozUserSelect=d};b.setBorderRender=function(a){var b=this.style,a=a=="outside"?"content-box":"border-box";b.WebkitBoxSizing=b.MozBoxSizing=b.boxSizing=a;if(this._cssStore)this._cssStore.boxSizing=
a};b.applySkin=function(a,b){this.stroke={};this.fill={};this.gradient=null;this.rounded=0;this.inset=this.outline=this.bevel=this.shadow=this.image=null;if(!(b==true&&b)){var e=jbeeb.Utils.isNumber(a.x)?a.x:0,d=jbeeb.Utils.isNumber(a.y)?a.y:0;this.setXY(e,d);a.height&&this.setHeight(a.height);a.width&&this.setWidth(a.width);a.h&&this.setHeight(a.h);a.w&&this.setWidth(a.w)}this.setRounded(a.rounded);var e=a.fill,c,i;if(e)typeof e=="string"?(c=e,i=1):(c=e.color,i=e.alpha);this.setFill(c,i);var e=a.stroke,
g=d=i=c=null;e&&(typeof e=="string"?(c=e,d=i=1,g="solid"):e.color!=null&&(c=e.color||"#000000",i=jbeeb.Utils.isNumber(e.alpha)?e.alpha:1,d=e.weight||1,g=e.style||"solid"));this.setStroke(d,c,i,g);this.setStrokeStyle(g);var e=a.image,j,k;if(a.image)typeof e=="string"?(j=e,k=null):(j=e.url,k=e.mode);this.setImage(j,k);this.setShadow(a.shadow);this.setBevel(a.bevel);this.setOutline(a.outline);this.setInset(a.inset)};b._applyBkgd=function(){var a=this.style;if(a){var b="",e="",d="",c="",i="",g=0,j=this.fill;
j&&(jbeeb.Utils.isArray(j.color)?g=1:j.color&&(e=jbeeb.Utils.makeColor(j.color,j.alpha)));if(this.image&&this.image.url){b='url("'+this.image.url+'")';g=this.image.mode||"center";if(g!="pattern"){if(g=="fit")d="100% 100%";else if(g=="contain"||g=="cover")d="contain";c="no-repeat";i="center center"}g=0}if(g){g=j.color;if(this._cssStore)this._cssStore.gradient=1;for(var j=j.alpha||"v",k=jbeeb.Browser,o=[],p=[],v=g.length,z=k.oldWebkit,n=0;n<v;n+=3){var m=jbeeb.Utils.makeColor(g[n],g[n+1]),q=g[n+2];
q>100?q=100:q<0&&(q=0);z?p.push("color-stop("+q+"%, "+m+")"):o.push(m+" "+q+"%")}if(k.modern)b=k.cssPrefix,b==""?(b="linear-",j=(j=="v"?"to bottom, ":"to right, ")+o.join(",")):b=="webkit"&&z?(g=p.join(","),b="-webkit-",j=j=="v"?"linear, left top, left bottom, "+g:"linear, left top, right top, "+g):(b="-"+b+"-linear-",j=(j=="v"?"top, ":"left, ")+o.join(",")),b=b+"gradient("+j+")";else if(k.ie&&k.version<9){if(j="progid:DXImageTransform.Microsoft.gradient( gradientType="+(j=="v"?"0":"1")+", startColorstr='"+
g[0]+"', endColorstr='"+g[g.length-3]+"')",this.style.filter=j,this.style.msFilter='"'+j+'"',this._cssStore)g=this._cssStore,g.filter=j,g.msFilter='"'+j+'"'}else{b="";for(n=0;n<v;n+=3)jbeeb.Utils.makeColor(g[n],g[n+1]),b+='<stop offset="'+g[n+2]+'%" stop-color="'+g[n]+'" stop-opacity="'+g[n+1]+'"/>';g="0";o="100";j=="h"&&(g="100",o="0");j="jbeeb-grad-"+this.id;p="";p+='<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 1 1" preserveAspectRatio="none">';p+='  <linearGradient id="'+
j+'" gradientUnits="userSpaceOnUse" x1="0%" y1="0%" x2="'+g+'%" y2="'+o+'%">';p+=b;p+="  </linearGradient>";p+='  <rect x="0" y="0" width="1" height="1" fill="url(#'+j+')" />';p+="</svg>";b='url("data:image/svg+xml;base64,'+jbeeb.Base64.encode(p)+'")'}}else if(this._cssStore)this._cssStore.gradient=0;a.backgroundColor=e||"";a.backgroundImage=b||"none";a.backgroundSize=d||"";a.backgroundRepeat=c||"";a.backgroundPosition=i||"";if(this._cssStore)g=this._cssStore,g.backgroundColor=e||"",g.backgroundImage=
b||"none",g.backgroundSize=d||"",g.backgroundRepeat=c||"",g.backgroundPosition=i||""}};b.setFill=function(a,b){if(!this.fill)this.fill={};this.fill.color=a;this.fill.alpha=b;this._applyBkgd()};b.setImage=function(a,b){if(a){if(!this.image)this.image={};this.image.url=a;this.image.mode=b}else this.image=null;this._applyBkgd()};b.setImageSizing=function(a){if(this.image)this.image.mode=a,this._applyBkgd()};b.setStroke=function(a,b,e,d){if(!this.stroke)this.stroke={};typeof a=="string"&&(b=a,a=1);a>
0&&(a=Math.round(a));var c=e||1,d=d||"solid";b==null&&(d=c=a=null);e=this.stroke;e.weight=a;e.color=b;e.alpha=c;e.style=d;var i=this.style;a?(e=a+"px",b=jbeeb.Utils.makeColor(b,c),c=-a+"px",a=-a+"px"):a=c=b=e=d="";i.borderStyle=d;i.borderWidth=e;i.borderColor=b;i.marginLeft=c;i.marginTop=a;if(this._cssStore)i=this._cssStore,i.borderStyle=d,i.borderWidth=e,i.borderColor=b,i.marginLeft=c,i.marginTop=a;this._applyRounded()};b.setStrokeStyle=function(a){a=a||"";this.style.borderStyle=a;if(this._cssStore)this._cssStore.borderStyle=
a};b.setCursor=function(a){this.style.cursor=a;if(this._cssStore)this._cssStore.cursor=a};b.setWidth=function(a){var b=this.style;if(b&&a>0&&(this.width=a,b.width=a+"px",this.autoCenter&&this.center(this.autoCenter),this.rounded&&this._applyRounded(),this._cssStore))this._cssStore.width=a+"px"};b.setHeight=function(a){var b=this.style;if(b&&a>0&&(this.height=a,b.height=a+"px",this.autoCenter&&this.center(this.autoCenter),this.rounded&&this._applyRounded(),this._cssStore))this._cssStore.height=a+"px"};
b.measure=function(){var a=this.element,b=a.clientWidth,a=a.clientHeight;this.width=b;this.height=a;return[b,a]};b.setSize=function(a,b){var e=this.style;if(e&&a>0&&b>0&&(this.width=a,this.height=b,e.width=a+"px",e.height=b+"px",this.autoCenter&&this.center(this.autoCenter),this.rounded&&this._applyRounded(),this._cssStore))this._cssStore.width=a+"px",this._cssStore.height=b+"px"};b.setXY=function(a,b){this.x=a;this.y=b;var e=this.style;e.left=a+"px";e.top=b+"px";if(this._cssStore)this._cssStore.left=
a+"px",this._cssStore.top=b+"px"};b.setBaseXY=function(a,b){this.setXY(a,b);this._baseX=a;this._baseY=b};b.setXYWH=function(a,b,e,d){this.width=e;this.height=d;this.x=a;this.y=b;var c=this.style;c.width=(e||0)+"px";c.height=(d||0)+"px";c.left=(a||0)+"px";c.top=(b||0)+"px";if(this._cssStore)c=this._cssStore,c.width=(e||0)+"px",c.height=(d||0)+"px",c.left=(a||0)+"px",c.top=(b||0)+"px"};b.setX=function(a){this.x=a;this.style.left=(a||0)+"px";if(this._cssStore)this._cssStore.left=(a||0)+"px"};b.setY=
function(a){this.y=a;this.style.top=(a||0)+"px";if(this._cssStore)this._cssStore.top=(a||0)+"px"};b.setTop=function(a){this.y=a;this.style.top=a+"px";if(this._cssStore)this._cssStore.top=(a||0)+"px"};b.setBottom=function(a){this.y=a-this.height;this.style.bottom=a+"px";if(this._cssStore)this._cssStore.bottom=(a||0)+"px"};b.setLeft=function(a){this.x=a;this.style.left=(a||0)+"px";if(this._cssStore)this._cssStore.left=(a||0)+"px"};b.setRight=function(a){this.x=a=(a||0)-this.width;this.style.right=a+
"px";if(this._cssStore)this._cssStore.right=a+"px"};b.setZ=function(a){a<0&&(a=0);this.z=a;var b=this.style;if(!b)this.style=b=this.element.style;b.zIndex=a;if(this._cssStore)this._cssStore.zIndex=a};b.setScale=function(a){this.scaleY=this.scaleX=this.scale=a;this._doTransform("scale("+a+","+a+")")};b.setScaleX=function(a){this.scaleX=a;this._doTransform("scale("+this.scaleX+","+a+")")};b.setScaleY=function(a){this.scaleY=a;this._doTransform("scale("+a+","+this.scaleY+")")};b.stretch=function(a,b){this.stretchX=
a;this.stretchY=b;if(a>0&&b>0){this._flexW&&this.setWidth(this.width*a);this._flexH&&this.setHeight(this.height*b);var e=this.x,d=this.y;if(this._pinX){if(this._pinX=="r"&&this.parent){if(this._pinRightFirst==null)this._pinRightFirst=this.parent.width-this.x;e=this.parent.width-this._pinRightFirst;this.setX(e)}}else if(this.originX){var c=this.originX;this.setX(c+(e-c)*a)}else this.setX(e*a);if(this._pinY){if(this._pinY=="b"&&this.parent){if(this._pinBottomFirst==null)this._pinBottomFirst=this.parent.height-
this.y;e=this.parent.height-this._pinBottomFirst;this.setY(e)}}else this.originY?(c=this.originY,this.setY(c+(d-c)*b)):this.setY(d*b)}this.dispatchEvent("stretch",this.width,this.height)};b._pinRightFirst=null;b._pinBottomFirst=null;b.setPin=function(a){this.pin=a;this._pinY=this._pinX=0;if(a){a=a.toLowerCase();if(a.match(/r/))this._pinX="r";if(a.match(/l/))this._pinX="l";if(a.match(/t/))this._pinY="t";if(a.match(/b/))this._pinY="b";if(a.match(/s/))this._pinY=this._pinX="s"}};b.setFlex=function(a){this._flexH=
this._flexW=0;if(a)a.toLowerCase(),this._flexW=a.match(/w/)?1:0,this._flexH=a.match(/h/)?1:0;this.flex=a};b.setRotation=function(a){this.rotation=a;this._doTransform("rotate("+a+"deg)")};b.setSkew=function(a,b){this.skewX=a;this.skewY=b;this._doTransform("skew("+a+"deg,"+b+"deg)")};b.setOrigin=function(a,b,e){this.originX=a;this.originY=b;e=(this.originType=e)?e:"px";a=a+e+" "+b+e;b=this.style;b.transformOrigin=b.WebkitTransformOrigin=b.msTransformOrigin=b.MozTransformOrigin=b.OTransformOrigin=a;
if(this._cssStore)this._cssStore.transformOrigin=a};b._doTransform=function(a){var b=this.style;b.transform=b.transform=b.msTransform=b.WebkitTransform=b.MozTransform=a;if(this._cssStore)this._cssStore.transform=a};b.center=function(a){if((this.parent||this.amStage)&&this.width&&this.height){var b=this.x,e=this.y,d,c;this.amStage?(d=jbeeb.Utils.getXYWH(this.element.parentNode),c=d.w*0.5,d=d.h*0.5):(d=this.parent,d.width||d.measure(),c=d.width*0.5,d=d.height*0.5);var i=this.width*0.5,g=this.height*
0.5;a=="v"?e=d-g:a=="h"?b=c-i:(b=c-i,e=d-g);this.setXY(b,e)}};b.setOverflow=function(a){this.overflow=a;var b="",e="";if(a=="x"||a=="y"||!a)a=="x"?(b="auto",e="hidden"):a=="y"&&(b="hidden",e="auto",jbeeb.Browser.ie&&this.setWidth(this.width+20)),this.style.overflowX=b,this.style.overflowY=e;this.style.overflow=a;if(this._cssStore){var c=this._cssStore;c.overflow=a;c.overflowX=b;c.overflowY=e}};b.setVisible=function(a){this.visible=a;var b=this.style,a=a?this._blockDisplay:"none";b.display=a;if(this._cssStore)this._cssStore.display=
a};b.show=function(){this.setVisible(true)};b.hide=function(){this.setVisible(false)};b.setAlpha=function(a){this.alpha=a;if(a!==null)this.style.opacity=""+a;if(this._cssStore)this._cssStore.opacity=""+a};b.setRounded=function(a){this.rounded=a;this._applyRounded()};b._applyRounded=function(){var a="",b=this.rounded;if(b){var e=this.width,c=this.height,f=0,i=this.stroke;if(i)i=i.weight,jbeeb.Utils.isNumber(i)&&(f=i*2);e=((e<c?e:c)+f)*0.5;jbeeb.Utils.isNumber(b)?a=e*b+"px":b&&typeof b=="object"&&(a+=
(e*b.tl||0)+"px "+(e*b.tr||0)+"px "+(e*b.br||0)+"px "+(e*b.bl||0)+"px")}b=this.style;b.borderRadius=b.MozBorderRadius=b.WebkitBorderRadius=b.OBorderRadius=b.msBorderRadius=a;if(this._cssStore)this._cssStore.borderRadius=a};b.onAdded=function(){this.autoCenter&&this.center(this.autoCenter);this.dispatchEvent("added",this)};b.toFront=function(){this.parent&&this.parent.toFront(this)};b.toBack=function(){this.parent&&this.parent.toBack(this)};b._updateShadow=function(){var a=this.style,b=this._makeShadow(),
e=this._makeBevel(),c=this._makeOutline(),f=this._makeInset(),i="none";if(!(b==[]&&e==[]&&c==[]&&f==[])){for(var b=e.concat(c,f,b),e=b.length,c=[],f=[],g=0,j=0;j<e;j++)g==0?b[j]==1&&f.push("inset"):g<4?f.push(b[j]+"px"):(f.push(jbeeb.Utils.makeColor(b[j],b[j+1])),c.push(f.join(" ")),f=[],++j,g=-1),g++;c.length>0&&(i=c.join(","))}a.boxShadow=a.MozBoxShadow=a.WebkitBoxShadow=a.OBoxShadow=a.msBoxShadow=i;if(this._cssStore)this._cssStore.boxShadow=i};b._makeShadow=function(){var a=this.shadow;return a?
[0,a.x||0,a.y||0,a.s,a.c||"#000000",a.a||0.4]:[]};b.setShadow=function(a){this.shadow=a;this._updateShadow()};b._makeInset=function(){var a=this.inset;return a?[1,a.x||0,a.y||0,a.s,a.c||"#000000",a.a||0.4]:[]};b.setInset=function(a){this.inset=a;this._updateShadow()};b._makeBevel=function(){var a=this.bevel;return a?[1,-a.x,-a.y,a.s1,a.c1||"#FFFFFF",a.a1,1,a.x,a.y,a.s2,a.c2||"#000000",a.a2]:[]};b.setBevel=function(a){if(a)jbeeb.Utils.isNumber(a)?a={x:-a,y:-a,s1:0,s2:0,c1:"#FFFFFF",c2:"#000000",a1:1,
a2:1}:(a.c1=a.c1||"#FFFFFF",a.c2=a.c2||"#000000");this.bevel=a;this._updateShadow()};b._makeOutline=function(){if(this.outline){var a=this.outline;return[0,-a.weight,-a.weight,a.spread||0,a.color||"#000000",a.alpha||1,0,a.weight,-a.weight,a.spread||0,a.color||"#000000",a.alpha||1,0,-a.weight,a.weight,a.spread||0,a.color||"#000000",a.alpha||1,0,a.weight,a.weight,a.spread||0,a.color||"#000000",a.alpha||1]}else return[]};b.setOutline=function(a){this.outline=a;this._updateShadow()};b.setMouseEnabled=
function(a){a=a===0||a===false?"none":"auto";this.style.pointerEvents=a;if(this._cssStore)this._cssStore.pointerEvents=a};b._MEL=null;b.MELbubble=false;b.addMEL=function(a,b,e,c,f){this.MELbubble=c;if(!this._MEL)this._MEL=new jbeeb.MouseEventListener(this);(a=="mouseOver"||a=="mouseOut"||a=="mouseMove")&&this._MEL.enableMouseOver(1);this.addEventListener(a,b,e,f)};b.removeMEL=function(a,b){this.removeEventListener(a,b);a=="mouseOver"&&this._MEL.enableMouseOver(0)};b.setFloat=function(a){this.style.position=
"relative";this.style.left="";this.style.top="";this.style.cssFloat=a;this.style.display="inline-block";if(this._cssStore)this._cssStore.position="relative",this._cssStore.left=null,this._cssStore.top=null,this._cssStore.cssFloat=a,this._cssStore.display="inline-block"};b.destroy=function(){this.removeAllEventListeners();if(this._MEL)this._MEL.destroy(),this._MEL=null;if(this.element&&this.element.parentNode)this.element.parentNode.removeChild(this.element),this.element=null;if(this.parent)this.parent.removeChild(this),
this.parent=null;this._cssStore=this.element=this.image=this.inset=this.shadow=this.outline=this.bevel=this.gradient=this.fill=this.stroke=this.temp=null};b.getCSS=function(){return this._cssStore};b.toString=function(){return"[Box (name="+this.name+")]"};b.type="Box";jbeeb.Box=c})();this.jbeeb=this.jbeeb||{};
(function(){var c=function(a){this.init(a)},b=c.prototype=new jbeeb.Box(null);b.textFit=null;b.text="";b._previuosText="";b.textSize=null;b.textColor=null;b.shadowText=null;b.bevelText=null;b.outlineText=null;b.insetText=null;b.font=null;b.align=null;b.textScale=null;b.selectable=null;b.bold=null;b.padding=null;b.editable=null;b._canEdit=null;b.multiline=null;b.baselineShift=null;b._BLScomp=null;b._keyboardHandler=null;b._suspendUpdate=false;b._TextBox_init=b.init;b.init=function(a){if(a){if(a.editable){var b;
b=a.multiline?document.createElement("textarea"):document.createElement("input");this._canEdit=1;b.id=jbeeb.getUID();b.style.position="absolute";b.style.overflow="visible";if(this._cssStore)this._cssStore.position="absolute",this._cssStore.overflow="visible";if(!a.multiline)b.type="text";a.element=b}this._TextBox_init(a);a.element=null;b=this.style;b.textDecoration="none";b.zoom=1;b.size=a.h;this.text=a.text||"";if(this._cssStore)b=this._cssStore,b.fontSmooth="always",b.WebkitFontSmoothing="antialiased",
b.textDecoration="none",b.zoom=1,b.size=a.h;this.applySkin(a,true)}};b._TextBox_applySkin=b.applySkin;b.applySkin=function(a,b){this._suspendUpdate=true;if(a.editable){var e=null;a.fill&&(e=typeof a.fill=="object"?a.fill.color:a.fill);a.stroke=a.stroke||e||{weight:1,color:"#000000",alpha:1}}this._TextBox_applySkin(a,b);this.textFit=a.textFit||null;this.font=a.font||"Arial, Helvetica, sans-serif";this.align=a.align||"left";this.textScale=a.textScale||1;this.bold=a.bold||0;this.selectable=a.selectable||
0;this.editable=a.editable||0;this.multiline=a.multiline||0;this.baselineShift=a.baselineShift||0;if(!b)this.text=a.text||"";this._previuosText="";this.textColor={};if(a.textSize)this.textSize=a.textSize;a.editable==1&&this.setEditable(1);this.setMultiline(this.multiline,true);this.setText(this.text);if(a.textColor){var e=a.textColor,c={};if(typeof e=="string")c={color:e,alpha:1};else if(c=e,!c.color)c.color=null,c.alpha=null;this.setTextColor(c.color||"#000000",c.alpha||1)}if(a.shadowText)this.shadowText=
a.shadowText;if(a.insetText)this.insetText=a.insetText;if(a.bevelText)this.bevelText=a.bevelText;if(a.outlineText)this.outlineText=a.outlineText;if(a.shadow)this.shadow=a.shadow;if(a.inset)this.insetText=a.inset;if(a.bevel)this.bevel=a.bevel;if(a.outline)this.outline=a.outline;a.padding&&this.setPadding(a.padding);if(a.alphaNumeric)this.alphaNumeric=1;if(a.numeric)this.numeric=1;this.setBaselineShift(this.baselineShift);this._suspendUpdate=false;this._update();this._updateShadowText()};b.setMultiline=
function(a){this.multiline=a;var b=this.style;if(a){if(!this.textSize)this.textSize=12;a="normal"}else a="nowrap";b.whiteSpace=a;if(this._cssStore)this._cssStore.whiteSpace=a;this._fit()};b._canEdit=0;b.setEditable=function(a){a===1?(this.amSM||this.setCursor("text"),this._keyboardHandler?this._keyboardHandler.removeAllEventListeners():this._keyboardHandler=new jbeeb.Keyboard(this.element),this._keyboardHandler.addEventListener("keydown",this.keyHandler,this),this._keyboardHandler.addEventListener("keyup",
this.keyHandler,this),this.setOverflow("hidden"),jbeeb.Utils.bindEvent(this.element,"focus",this.setFocus.bind(this)),jbeeb.Utils.bindEvent(this.element,"blur",this._updateChange.bind(this)),this.addMEL("mouseUp",this.setFocus,this)):(this.amSM||this.setCursor("default"),this._keyboardHandler&&this._keyboardHandler.removeAllEventListeners(),jbeeb.Utils.unbindEvent(this.element,"focus",this.setFocus.bind(this)));this.editable=a};b.numeric=null;b.alphaNumeric=null;b.keyHandler=function(a,b,c){var d=
true;this.alphaNumeric?d=this._keyboardHandler.alphaNumeric(b):this.numeric&&(d=this._keyboardHandler.numeric(b));if(this.multiline==0&&(b==108||b==13))d=false,c=="keyup"&&this.dispatchEvent("enter",this,this.text);b==9&&(d=false,c=="keyup"&&this.dispatchEvent("tab",this,this.text));d?(this.text=this._canEdit&&!this.multiline?this.element.value:this._textNode.text,c=="keyup"&&this.dispatchEvent("change",this,this.text)):this._keyboardHandler.block(a)};b._updateChange=function(){this.dispatchEvent("change",
this,this.text)};b.setPadding=function(a){this.padding=a;var b;b=this._textNode?this._textNode.style:this.style;var c="",d="",f="",i="";this.multiline?(c=a+"px",d=a+"px",f=a+"px",i=a+"px"):this.align=="left"?a&&(c=a+"px"):this.align=="right"&&a&&(d=a+"px");b.paddingLeft=c;b.paddingRight=d;b.paddingTop=f;b.paddingBottom=i;if(this._cssStore)a=this._cssStore,a.paddingLeft=c,a.paddingRight=d,a.paddingTop=f,a.paddingBottom=i};b._format=function(){var a=this.font,b=this.textColor||{},b=jbeeb.Utils.makeColor(b.color,
b.alpha),c=this.bold?"bold":"normal",d=this.style;d.fontFamily=a;d.color=b;d.textAlign=this.align;d.fontWeight=c;if(this._cssStore)d=this._cssStore,d.fontFamily=a,d.color=b,d.textAlign=this.align,d.fontWeight=c};b.setFont=function(a){this.font=a;this.style.fontFamily=a;if(this._textNode)this._textNode.style.fontFamily=this.font;if(this._cssStore)this._cssStore.fontFamily=a;this._update()};b.setAlign=function(a){this.align=a;this.style.textAlign=a;a=="center"&&this.setPadding(0);if(this._cssStore)this._cssStore.textAlign=
a};b.setBold=function(a){this.bold=a?"bold":"";this.style.fontWeight=this.bold;if(this._cssStore)this._cssStore.fontWeight=this.bold;this._update()};b.setBaselineShift=function(a){(this.baselineShift=a)?a>1?a=1:a<-1&&(a=-1):a=0;a*=-1;this._BLScomp=1+a;this._update()};b.measureText=function(a){if(this.text||a){var b=document.createElement("div");document.body.appendChild(b);var c=b.style;c.fontSize=this.height*this.textScale+"px";c.fontFamily=this.font;c.fontWeight=this.bold?"bold":"normal";c.position=
"absolute";c.left=-1E3;c.top=-1E3;b.innerHTML=a||this.text;a={w:b.clientWidth,h:b.clientHeight};document.body.removeChild(b);return a}else return 0};b.setTextColor=function(a,b){if(!this.textColor)this.textColor={};this.textColor.color=a;this.textColor.alpha=b;var c=jbeeb.Utils.makeColor(a,b);this.style.color=c;if(this._cssStore)this._cssStore.color=c};b.setText=function(a){if(this.element){this.text=a=a==""||!a?"":String(a);if(this._canEdit&&!this.multiline)this.element.value=a;else{if(!this._textNode){var b=
document.createElement("span");b.style.fontFamily=this.font;this.element.appendChild(b);this._textNode=b}this._textNode.innerHTML=a}this._previuosText!=a&&this._update();this._previuosText=a}};b.selectAll=function(){if(this._canEdit)jbeeb.focus=this,this.element.focus(),this.element.select()};b._TextBox_setWidth=b.setWidth;b.setWidth=function(a){a!=this.width&&(this._TextBox_setWidth(a),this._fit())};b._TextBox_setHeight=b.setHeight;b.setHeight=function(a){a!=this.height&&(this._TextBox_setHeight(a),
this._fit())};b._TextBox_setSize=b.setSize;b.setSize=function(a,b){if(a!=this.width||b!=this.height)this._TextBox_setSize(a,b),this._fit()};b.setTextScale=function(a){this.textScale=a||1;this._fit()};b.setTextSize=function(a){this.textSize=a;this._fit()};b.setTextFit=function(a){this.textFit=a;this._fit()};b._TextBox_onAdded=b.onAdded;b.onAdded=function(){this._TextBox_onAdded();this._update()};b.setFocus=function(){jbeeb.focus=this;this.element.focus()};b._fit=function(){if(this.text!=""){var a=
null,b=null,c=null;if(this.textSize)a=this.textSize,b="1em",c=a+"px";else{var d=this.width,f=this.height;if(d>0&&f>0)if(this.textFit=="wh")a=d<f?d:f,a=this.textScale>0?a*this.textScale:a;else if(this.textFit=="w"){if(d=this.width/this.measureText().w/2,jbeeb.Utils.isNumber(d)&&d>0)this.textScale=d,a=f*d}else a=f*this.textScale;else a=0}a&&(b=this.height*this._BLScomp/a+"em",c=a+"px");a=this.style;a.lineHeight=b;a.fontSize=c;if(this._cssStore)this._cssStore.lineHeight=b,this._cssStore.fontSize=c}};
b.getTextSize=function(){return this.style.fontSize||null};b._update=function(){this._suspendUpdate||(this._fit(),this._format())};b._updateShadowText=function(){var a=this._makeShadowText(),b=this._makeBevelText(),c=this._makeOutlineText(),d=this._makeInsetText(),f="none";if(!(a==[]&&b==[]&&c==[]&&d==[])){for(var a=b.concat(c,a,d),b=a.length,c=[],d=[],i=0,g=0;g<b;g++)i==0?a[g]==1&&d.push("inset"):i<4?d.push(a[g]+"px"):(d.push(jbeeb.Utils.makeColor(a[g],a[g+1])),c.push(d.join(" ")),d=[],++g,i=-1),
i++;c.length>0&&(f=c.join(","))}a=this.style;a.textShadow=a.MozTextShadow=a.WebkitTextShadow=a.OTextShadow=a.msTextShadow=f;if(this._cssStore)this._cssStore.textShadow=f};b._makeShadowText=function(){var a=this.shadowText;return a?[0,a.x,a.y,a.s,a.c,a.a]:[]};b.setShadowText=function(a){this.shadowText=a;this._updateShadowText()};b._makeInsetText=function(){var a=this.insetText;return a?[1,a.x,a.y,a.s,a.c,a.a]:[]};b.setInsetText=function(a){this.insetText=a;this._updateShadowText()};b._makeBevelText=
function(){if(this.bevelText){var a=this.bevelText,b=[];a.c1&&a.a1>0&&(b=[0,-a.x,-a.y,a.s1,a.c1||"#000000",a.a1]);a.c2&&a.a2>0&&(b=b.concat([0,a.x,a.y,a.s2,a.c2||"#FFFFFF",a.a2]));return b}else return[]};b.setBevelText=function(a){this.bevelText=a;this._updateShadowText()};b._makeOutlineText=function(){if(this.outlineText){var a=this.outlineText;return[0,-a.weight,-a.weight,a.spread||0,a.color||"#000000",a.alpha,0,a.weight,-a.weight,a.spread||0,a.color||"#000000",a.alpha,0,-a.weight,a.weight,a.spread||
0,a.color||"#000000",a.alpha,0,a.weight,a.weight,a.spread||0,a.color||"#000000",a.alpha]}else return[]};b.setOutlineText=function(a){this.outlineText=a;this._updateShadowText()};b.toString=function(){return"[TextBox (name="+this.name+")]"};b.type="TextBox";jbeeb.TextBox=c})();this.jbeeb=this.jbeeb||{};
(function(){var c=function(a){this.init(a)},b=c.prototype=new jbeeb.Box(null);b._children=[];b.addChild=function(a){if(a==null)return a;var b=arguments.length;if(b>0)for(var c=0;c<b;c++){var d=arguments[c];d.parent&&d.parent.removeChild(d);d.parent=this;d.stage=this.amStage==1?this:this.stage;d.setZ(this._children.length);this.element.appendChild(d.element);d.onAdded&&d.onAdded.call(d);this._children.push(d)}};b.removeChild=function(a){var b=arguments.length;if(b>1){for(var c=true;b--;)c=c&&this.removeChild(arguments[b]);
return c}return this.removeChildAt(this._children.indexOf(a))};b.removeChildAt=function(a){var b=arguments.length;if(b>1){for(var c=[],d=0;d<b;d++)c[d]=arguments[d];c.sort(function(a,b){return b-a});for(var f=true,d=0;d<b;d++)f=f&&this.removeChildAt(c[d]);return f}if(a<0||a>this._children.length-1)return false;if(b=this._children[a])b.element&&b.element.parentNode&&b.element.parentNode.removeChild(b.element),b.parent=null;this._children.splice(a,1);this._consolidateZ();return true};b.removeAllChildren=
function(){for(var a=this._children;a.length;)this.removeChildAt(0)};b._consolidateZ=function(){for(var a=this._children.length,b=0;b<a;b++){var c=this._children[b];c&&c.setZ(b+1)}};b.toFront=function(a){if(a){for(var b=this._children.length,c=0,d=b;d--;)if(this._children[d]==a){c=d;break}jbeeb.Utils.arrayMove(this._children,c,b-1);this._consolidateZ()}else this.parent&&this.parent.toFront(this)};b.toBack=function(a){if(a){for(var b=0,c=this._children.length;c--;)if(this._children[c]==a){b=c;break}jbeeb.Utils.arrayMove(this._children,
b,0);this._consolidateZ()}else this.parent&&this.parent.toBack(this)};b._Container_init=b.init;b.init=function(a){this._Container_init(a);if(a)this.stage=this.amStage==1?this:this.stage,this._children=[]};b._Container_stretch=b.stretch;b.stretch=function(a,b){var c=a,d=b,f=this.flex;f&&(f.match(/w/)||(c=1),f.match(/h/)||(d=1));for(f=this._children.length;f--;){var i=this._children[f];i&&i.stretch(c,d)}this._Container_stretch(a,b)};b._Container_setFlex=b.setFlex;b.setFlex=function(a){for(var b=this._children.length;b--;)this._children[b].setFlex(a);
this._Container_setFlex(a)};b._Container_destroy=b.destroy;b.destroy=function(){if(this._children)for(var a=this._children.length;a--;)this._children[a]&&(this._children[a].destroy(),this.removeChild(this._children[a]),this._children[a]=null);this._children=null;this._Container_destroy()};b.destroyChildren=function(){if(this._children)for(var a=this._children.length;a--;)this._children[a]&&(this._children[a].destroy(),this.removeChild(this._children[a]),this._children[a]=null);this._children.length=
0;this._children=null;this._children=[]};b.getChildren=function(){return this._children};b.toString=function(){return"[Container (name="+this.name+")]"};b.type="Container";jbeeb.Container=c})();this.jbeeb=this.jbeeb||{};
(function(){var c=function(a){this._configure(a);return this},b=c.prototype=new jbeeb.Container;b.amReady=null;b._readyList=null;b._configure=function(a){if(a){this.amReady=0;if(a.onReady)this._readyList=[],this._readyList.push(a.onReady);this.id=jbeeb.getUID();if(a.stage)this.amStage=0,this._Stage_init(a);else{this.amStage=1;this.parent=this;this.stage=this;var b=a.target,c=null,d=0;if(b)(c=typeof b=="string"?document.getElementById(b):b)?c.nodeType===1?(this.element=document.createElement("div"),this.element.id=
this.id,c.appendChild(this.element)):d=1:d=1;if(!b||d)document.write('<div id="'+this.id+'"></div>'),this.element=document.getElementById(this.id);a.element=this.element;this._Stage_init(a);this.style=this.element.style;this.style.position="relative";this.style.display=a.inline===true||a.inline=="true"||a.inline===1?"inline-block":"block";this.style.verticalAlign="top";this.style.clear="both";this.style.zoom=1;this.setSize(this.width||a.w||1,this.height||a.h||1);this.setOverflow(a.overflow||"visible");
this.setCursor("default")}jbeeb.register(this)}};b._Stage_init=b.init;b.init=function(){var a=jbeeb.Utils.getXYWH(this.element);this.x=a.x;this.y=a.y;this.width=a.width;this.height=a.height;setTimeout(this._doReady.bind(this),50)};b._doReady=function(){this.amReady=1;if(this._readyList)for(var a=0;a<this._readyList.length;a++)this._readyList.pop()()};b.onReady=function(a){if(this.amReady)a();else{if(!this._readyList)this._readyList=[];this._readyList.push(a)}};b.toString=function(){return"[Stage (name="+
this.name+")]"};b.type="Stage";jbeeb.Stage=c})();this.jbeeb=this.jbeeb||{};
(function(){var c=function(a){a=a||{};this._onComplete=a.onComplete;this._userTimezoneOffset=a.timezoneOffset||0;this._digits=a.digits||2;this._truncate=a.truncate||0;this._rangeHi=c._kRange[a.rangeHi]?c._kRange[a.rangeHi]:c._kYear;this._rangeLo=c._kRange[a.rangeLo]?c._kRange[a.rangeLo]:c._kSecond;a.end&&this._setTimeEnd(a.end);return this};c._MS_HOUR=36E5;c._MS_DAY=864E5;c._kMs=0;c._kSecond=1;c._kMinute=2;c._kHour=3;c._kDay=4;c._kMonth=5;c._kYear=6;c._kRange={ms:c._kMs,second:c._kSecond,minute:c._kMinute,
hour:c._kHour,day:c._kDay,month:c._kMonth,year:c._kYear};var b=c.prototype;b._done=false;b._doneFired=false;b._onComplete=null;b._timeEnd=null;b._userTimezoneOffset=0;b._digits=0;b._rangeHi=c._kYear;b._rangeLo=c._kMs;b._truncate=0;b._setTimeEnd=function(a){var b=new Date;if(a instanceof Date)a=new Date(a.getTime());else if(typeof a=="object"){var b=a.year?parseInt(a.year):b.getFullYear(),e=a.month?parseInt(a.month)-1:0,d=a.day?parseInt(a.day):0,f=a.hour?parseInt(a.hour):0,i=a.minute?parseInt(a.minute):
0,g=a.second?parseInt(a.second):0,a=(a.ampm?a.ampm:"am").toLowerCase();f<12&&/p/.test(a)&&(f+=12);a=new Date(b,e,d,f,i,g)}else a=new Date(b.getTime()+(parseInt(a)+1)*1E3);b=0;this._userTimezoneOffset!=0&&(b+=this._userTimezoneOffset*c._MS_HOUR);b!=0&&(a=a.getTime()+b,a=new Date(a));this._timeEnd=a;this._doneFired=this._done=false};b.update=function(){return this._calc(new Date)};b.diff=function(a,b){b&&this._setTimeEnd(b);return this._calc(a)};b._calc=function(a){var b=0,e=0,d=0,f=0,i=0,g=0,j=0,k=
this._timeEnd,o=k.getTime()-a.getTime(),p=Math.floor,v=false;if(o>0){var z=c._MS_HOUR,n=this._rangeLo,m=this._rangeHi;this._truncate&&(n=-1,m=10);var q=c._kMs,s=c._kSecond,r=c._kMinute,w=c._kHour,t=c._kDay,y=c._kMonth,l=o/1E3,u=l/60,x=u/60,B=x/24;n<t&&(m>=q&&(b=p(m==q?o:o%1E3)),m>=s&&(e=p(m==s?l:l%60)),m>=r&&(d=p(m==r?u:u%60)),m>=w&&(f=p(m==w?x:x%24)));o=a.getUTCFullYear();n=a.getUTCMonth();l=a.getUTCDate();q=k.getUTCFullYear();s=k.getUTCMonth();r=k.getUTCDate();w=l;u=0;if(m>=t)if(m==t)i=p(B);else{var i=
a.getUTCHours(),t=a.getUTCMinutes(),a=a.getUTCSeconds(),B=k.getUTCHours(),u=k.getUTCMinutes(),A=k.getUTCSeconds(),k=s+(s==n?0:-1);k<0&&(k+=12);x=c.getMonthDays(k,q);x=x<l?c.getMonthDays(k-1,q):x;x=x<r?r:x;k=0;r>l?k=r-l-1:r<l&&(k=l-r-1);u=(c._MS_DAY-(a+t*60+i*3600)*1E3+(A+u*60+B*3600)*1E3)/z;u<24&&l++;l+=k;i=p((x-l+r+k)%x)}m>=y&&(j=0,g=(q-o)*12,g<0||o==q&&n==s?g=0:(n++,s++,k=0,s==n?w<=r&&k--:s>n?k=s-n-1:s<n&&(k=12-n+s,j--),u<24&&w++,n>=s&&w>r?k--:s>=n&&w<=r&&k++,g+=k,g<0&&(g=0),g>11&&(j+=p(g/12),g%=
12),m==y&&(g+=j*12,j=0)))}else v=true;b={ms:b,second:e,minute:d,hour:f,day:i,month:g,year:j};c.pad(b,this._digits);if(v&&!this._doneFired&&this._onComplete)this._doneFired=this._done=true,this._onComplete(this._timeEnd);return b};c._daysInMonth=[31,28,31,30,31,30,31,31,30,31,30,31];c.getMonthDays=function(a,b){return a==1?b%400==0||b%4==0&&b%100!=0?29:28:c._daysInMonth[a]};c.pad=function(a,b){if(b)for(var c in a){for(var d=String(a[c]),f=c=="ms"?3:b;d.length<f;)d="0"+d;a[c]=d}};Object.defineProperty(b,
"rangeHi",{get:function(){return this._rangeHi},set:function(a){this._rangeHi=c._kRange[a]?c._kRange[a]:c._kYear}});Object.defineProperty(b,"rangeLo",{get:function(){return this._rangeLo},set:function(a){this._rangeLo=c._kRange[a]?c._kRange[a]:c._kSecond}});jbeeb.TimeDiff=c})();var EXTRACT_START=1,CountdownImageFolder="images/",CountdownImageBasename="flipper",CountdownImageExt="png",CountdownImagePhysicalWidth=41,CountdownImagePhysicalHeight=60,CountdownWidth=400,CountdownHeight=60,CountdownLabels={ms:"MS",second:"SECONDS",minute:"MINUTES",hour:"HOURS",day:"DAYS",month:"MONTHS",year:"YEARS"},CountdownInterval=76,EXTRACT_END=1;
(function(){var c=function(a){this.imageFolder=CountdownImageFolder;this.imageBasename=CountdownImageBasename;this.imageExt=CountdownImageExt;this.imagePhysicalWidth=CountdownImagePhysicalWidth;this.imagePhysicalHeight=CountdownImagePhysicalHeight;this.totalFlipDigits=2;this._params=a||{};var b,c,d,f;if(a.bkgd){var i=a.bkgd;if(i.color)b=i.color;i.stroke&&i.strokeColor&&(c={weight:i.stroke||1,color:i.strokeColor,alpha:i.strokeAlpha});if(i.shadow)d=i.shadow;if(i.rounded)f=i.rounded}this._stage=new jbeeb.Stage({target:a.target,
inline:a.inline||false,w:a.w||a.width||CountdownWidth,h:a.h||a.height||CountdownHeight,rounded:f||null,fill:b||null,stroke:c||null,shadow:d||null});jbeeb.register(this)},b=c.prototype;b._params=null;b._stage=null;b._done=false;b._onComplete=null;b.id=null;b._initDone=false;b._style=null;b.totalFlipDigits=null;b.imageFolder=null;b.imageBasename="flipper";b.imageExt="png";b._blocks=null;b._store=null;b._maxDisplayName="second";b._hideLabels=false;b._labelText=null;b._hideLine=false;b._defaultBlockWidth=
0;b._digitWidth=0;b._blockSpacing=0;b._doublePadding=0;b._orderedBlockList=[];b._previousSizes={};b._interval=0;b._intervalCounter=0;b._timeRunnerNow=null;b.init=function(){this.id=jbeeb.getUID();var a=this._params;this._initDone=this._done=false;this._style=a.style||"boring";this.width=a.w||a.width||CountdownWidth;this.height=a.h||a.height||CountdownHeight;this._onComplete=a.onComplete;this._hideLabels=a.hideLabels;this._hideLine=a.hideLine;this._labelText=a.labelText||CountdownLabels;this._interval=
a.interval||CountdownInterval;this._intervalCounter=0;this._timeRunnerNow={year:0,month:0,day:0,hour:0,minute:0,second:0,ms:0};var b="";if(this._style=="flip"){b="";if(this.imageFolder.substr(1)!="/"&&this.imageFolder.substr(4)!="http")b=jbeeb.scriptPath,b!=""&&b.substr(4)=="http"&&b.substr(-1)!="/"&&(b+="/");this.imageFolder.substr(-1)!="/"&&(this.imageFolder+="/");b=b+this.imageFolder+this.imageBasename}this._store={ms:{use:false,prev:[null,null],ani:[null,null],aniCount:[null,null]},second:{use:false,
prev:[null,null],ani:[null,null],aniCount:[null,null]},minute:{use:false,prev:[null,null],ani:[null,null],aniCount:[null,null]},hour:{use:false,prev:[null,null],ani:[null,null],aniCount:[null,null]},day:{use:false,prev:[null,null],ani:[null,null],aniCount:[null,null]},month:{use:false,prev:[null,null],ani:[null,null],aniCount:[null,null]},year:{use:false,prev:[null,null],ani:[null,null],aniCount:[null,null]}};for(var c="ms,second,minute,hour,day,month,year".split(","),d=a.rangeLo?a.rangeLo:"second",
f=a.rangeHi?a.rangeHi:"year",d=d!="ms"&&d.substr(-1)=="s"?d.substr(0,d.length-1):d,f=f!="ms"&&f.substr(-1)=="s"?f.substr(0,f.length-1):f,i=d,g=f,j=0;j<c.length;j++){var k=c[j];k==d&&(d=j);k==f&&(f=j)}for(j=0;j<c.length;j++)if(j>=d&&j<=f)k=c[j],this._store[k].use=true,this._maxDisplayName=k;k=a.padding===0?0:a.padding?a.padding:this._style=="flip"?0:0.8;this._style=="flip"&&(k/=2);var o=this.height,d=this.width/(f-d+1),f=this._hideLabels?0:d*0.25,p=d*0.1,v=d-p,z=o-f,n=v*k;this._style=="flip"&&(n=v*
(k/this.totalFlipDigits));var m=v-n,q=this.height-f*2;this._digitWidth=v/this.totalFlipDigits;this._blockSpacing=p;var s=0;this._style=="flip"&&(q=this.height-f,s=o*0.03);this._defaultBlockWidth=v;this._digitWidth=m*this.totalFlipDigits;this._blockSpacing=p;this._doublePadding=n/2/this.totalFlipDigits/2;var r={font:"Arial, _sans",color:"#FFFFFF",weight:"normal",bkgd:this._style=="flip"?null:{color:["#000000",1,0,"#686868",1,50,"#000000",1,50,"#535050",1,100],alpha:"v"},rounded:this._style=="flip"?
null:0.18,shadow:null},w={font:"Arial, _sans",color:"#303030",weight:"bold",textScale:1,offset:0};if(a.numbers)for(var t in r)a.numbers[t]&&(r[t]=a.numbers[t]);if(a.labels)for(t in w)a.labels[t]&&(w[t]=a.labels[t]);c.reverse();this._blocks={};this._orderedBlockList=[];for(j=t=0;j<c.length;j++){var y=c[j];if(this._store[y].use){this._blocks[y]=new jbeeb.Container({x:t+p/2,y:0,w:v,h:z,rounded:r.rounded||null,fill:jbeeb.Utils.clone(r.bkgd)||null,shadow:r.shadow||null});var l=this._blocks[y];l.store=
{name:y};this._previousSizes[y]=v;if(this._style=="flip"){var u=this.imagePhysicalWidth*((m-s*2-n*2)/this.totalFlipDigits/this.imagePhysicalWidth),x=this.imagePhysicalHeight*(q/this.imagePhysicalHeight);l.time=new jbeeb.Container({x:0,y:0,w:u*this.totalFlipDigits,h:x});for(var B=[],A=0;A<this.totalFlipDigits;A++){for(var C=new jbeeb.Container({x:u*A+s*A,y:0,w:u,h:x}),G=[],D=0;D<10;D++){for(var E=new jbeeb.Container({x:0,y:0,w:u,h:x}),H=[],F=0;F<3;F++){var I=new jbeeb.Box({x:0,y:0,w:u,h:x,image:{url:b+
(""+D+""+F)+"."+this.imageExt,mode:"fit"}});H[F]=I;E.addChild(I)}E.img=H;G[D]=E;C.addChild(E)}C.num=G;B[A]=C;l.time.addChild(C)}l.time.slot=B;l.addChild(l.time)}else if(l.time=new jbeeb.TextBox({x:0,y:0,w:v,h:z,text:"00",textScale:k,font:r.font,textColor:r.color,align:"center"}),l.addChild(l.time),!this._hideLine)l.line=new jbeeb.Box({x:0,y:0,w:v,h:o*0.03,fill:"#000000"}),l.addChild(l.line),l.line.center();this._stage.addChild(l);if(!this._hideLabels)l.labels=new jbeeb.TextBox({x:t,y:o-f*0.7+w.offset,
w:d,h:f*0.7,font:w.font,textScale:w.textScale,textColor:w.color,bold:1,align:"center",text:this._labelText[y]}),this._stage.addChild(l.labels);this._orderedBlockList.push(l);l.time.center();a.numberMarginTop&&l.time.setY(a.numberMarginTop);t+=d}}l=this._blocks;this._style=="flip"?(l.year&&this._flipRunner("year","00"),l.month&&this._flipRunner("month","00"),l.day&&this._flipRunner("day","00"),l.hour&&this._flipRunner("hour","00"),l.minute&&this._flipRunner("minute","00"),l.second&&this._flipRunner("second",
"00"),l.ms&&this._flipRunner("ms","000")):(l.year&&l.year.time.setText("00"),l.month&&l.month.time.setText("00"),l.day&&l.day.time.setText("00"),l.hour&&l.hour.time.setText("00"),l.minute&&l.minute.time.setText("00"),l.second&&l.second.time.setText("00"),l.ms&&l.ms.time.setText("000"),this._reformat());this._timediff=new jbeeb.TimeDiff({end:a.time?a.time:{year:a.year||a.years,month:a.month||a.months,day:a.day||a.days,hour:a.hour||a.hours,minute:a.minute||a.minutes,second:a.second||a.seconds,ms:a.second||
a.ms,ampm:a.ampm||""},rangeHi:g,rangeLo:i,timezoneOffset:a.offset||0,onComplete:this._doWhenDone.bind(this),truncate:a.truncate||0});this._initDone=true;jbeeb.ticker.addEventListener("tick",this.tick,this)};b.tick=function(){this._initDone===true&&this._timeRunner()};b._doWhenDone=function(a){this._onComplete&&this._onComplete(a)};b._calcSize=function(a){return a.toString().length*this._digitWidth};b._reformat=function(){for(var a=false,b=0;b<this._orderedBlockList.length;b++){var c=this._orderedBlockList[b],
d=c.store.name,f=c.time.text,f=this._calcSize(f);f>=this._defaultBlockWidth&&f!=this._previousSizes[d]&&(c.setWidth(f+this._doublePadding),this._previousSizes[d]=f+this._doublePadding,a=true)}if(a)for(b=a=0;b<this._orderedBlockList.length;b++)c=this._orderedBlockList[b],f=c.time.text,this._calcSize(f),c.setX(a),c.time.setWidth(c.width),c.time.center(),c.labels&&(c.labels.setX(a),c.labels.setWidth(c.width)),c.line&&(c.line.setWidth(c.width),c.line.center()),a+=c.width+this._blockSpacing};b._timeRunner=
function(){this._intervalCounter+=jbeeb.ticker.getInterval();if(this._intervalCounter>this._interval)this._timeRunnerNow=this._timediff.update(),this._intervalCounter=0;var a=this._blocks,b=this._timeRunnerNow;this._style=="flip"?(a.year&&this._flipRunner("year",b.year),a.month&&this._flipRunner("month",b.month),a.day&&this._flipRunner("day",b.day),a.hour&&this._flipRunner("hour",b.hour),a.minute&&this._flipRunner("minute",b.minute),a.second&&this._flipRunner("second",b.second),a.ms&&this._flipRunner("ms",
b.ms)):(a.year&&a.year.time.setText(b.year),a.month&&a.month.time.setText(b.month),a.day&&a.day.time.setText(b.day),a.hour&&a.hour.time.setText(b.hour),a.minute&&a.minute.time.setText(b.minute),a.second&&a.second.time.setText(b.second),a.ms&&a.ms.time.setText(b.ms),this._reformat())};b._flipRunner=function(a,b){for(var c=0;c<this.totalFlipDigits;c++){var d=this._blocks[a].time.slot[c],f=this._store[a],i=String(b).substr(c,1),g=d.num[i];if(g){if(f.prev[c]!=i){for(var j=0;j<10;j++)d.num[j].hide();g.show();
f.ani[c]=true;f.aniCount[c]=0}if(f.ani[c]){for(j=0;j<3;j++)g.img[j].hide();this._done?g.img[2].show():(g.img[f.aniCount[c]].show(),f.aniCount[c]++,f.aniCount[c]>2&&(f.ani[c]=false))}f.prev[c]=i}}};window.Countdown=c})();

/*! jQuery v2.1.1 | (c) 2005, 2014 jQuery Foundation, Inc. | jquery.org/license */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=c.slice,e=c.concat,f=c.push,g=c.indexOf,h={},i=h.toString,j=h.hasOwnProperty,k={},l=a.document,m="2.1.1",n=function(a,b){return new n.fn.init(a,b)},o=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,p=/^-ms-/,q=/-([\da-z])/gi,r=function(a,b){return b.toUpperCase()};n.fn=n.prototype={jquery:m,constructor:n,selector:"",length:0,toArray:function(){return d.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:d.call(this)},pushStack:function(a){var b=n.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a,b){return n.each(this,a,b)},map:function(a){return this.pushStack(n.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(d.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:f,sort:c.sort,splice:c.splice},n.extend=n.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||n.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&&(j&&d&&(n.isPlainObject(d)||(e=n.isArray(d)))?(e?(e=!1,f=c&&n.isArray(c)?c:[]):f=c&&n.isPlainObject(c)?c:{},g[b]=n.extend(j,f,d)):void 0!==d&&(g[b]=d));return g},n.extend({expando:"jQuery"+(m+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===n.type(a)},isArray:Array.isArray,isWindow:function(a){return null!=a&&a===a.window},isNumeric:function(a){return!n.isArray(a)&&a-parseFloat(a)>=0},isPlainObject:function(a){return"object"!==n.type(a)||a.nodeType||n.isWindow(a)?!1:a.constructor&&!j.call(a.constructor.prototype,"isPrototypeOf")?!1:!0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?h[i.call(a)]||"object":typeof a},globalEval:function(a){var b,c=eval;a=n.trim(a),a&&(1===a.indexOf("use strict")?(b=l.createElement("script"),b.text=a,l.head.appendChild(b).parentNode.removeChild(b)):c(a))},camelCase:function(a){return a.replace(p,"ms-").replace(q,r)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b,c){var d,e=0,f=a.length,g=s(a);if(c){if(g){for(;f>e;e++)if(d=b.apply(a[e],c),d===!1)break}else for(e in a)if(d=b.apply(a[e],c),d===!1)break}else if(g){for(;f>e;e++)if(d=b.call(a[e],e,a[e]),d===!1)break}else for(e in a)if(d=b.call(a[e],e,a[e]),d===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(o,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(s(Object(a))?n.merge(c,"string"==typeof a?[a]:a):f.call(c,a)),c},inArray:function(a,b,c){return null==b?-1:g.call(b,a,c)},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;c>d;d++)a[e++]=b[d];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,f=0,g=a.length,h=s(a),i=[];if(h)for(;g>f;f++)d=b(a[f],f,c),null!=d&&i.push(d);else for(f in a)d=b(a[f],f,c),null!=d&&i.push(d);return e.apply([],i)},guid:1,proxy:function(a,b){var c,e,f;return"string"==typeof b&&(c=a[b],b=a,a=c),n.isFunction(a)?(e=d.call(arguments,2),f=function(){return a.apply(b||this,e.concat(d.call(arguments)))},f.guid=a.guid=a.guid||n.guid++,f):void 0},now:Date.now,support:k}),n.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(a,b){h["[object "+b+"]"]=b.toLowerCase()});function s(a){var b=a.length,c=n.type(a);return"function"===c||n.isWindow(a)?!1:1===a.nodeType&&b?!0:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var t=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+-new Date,v=a.document,w=0,x=0,y=gb(),z=gb(),A=gb(),B=function(a,b){return a===b&&(l=!0),0},C="undefined",D=1<<31,E={}.hasOwnProperty,F=[],G=F.pop,H=F.push,I=F.push,J=F.slice,K=F.indexOf||function(a){for(var b=0,c=this.length;c>b;b++)if(this[b]===a)return b;return-1},L="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",N="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",O=N.replace("w","w#"),P="\\["+M+"*("+N+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+O+"))|)"+M+"*\\]",Q=":("+N+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+P+")*)|.*)\\)|)",R=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),S=new RegExp("^"+M+"*,"+M+"*"),T=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),U=new RegExp("="+M+"*([^\\]'\"]*?)"+M+"*\\]","g"),V=new RegExp(Q),W=new RegExp("^"+O+"$"),X={ID:new RegExp("^#("+N+")"),CLASS:new RegExp("^\\.("+N+")"),TAG:new RegExp("^("+N.replace("w","w*")+")"),ATTR:new RegExp("^"+P),PSEUDO:new RegExp("^"+Q),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+L+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},Y=/^(?:input|select|textarea|button)$/i,Z=/^h\d$/i,$=/^[^{]+\{\s*\[native \w/,_=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ab=/[+~]/,bb=/'|\\/g,cb=new RegExp("\\\\([\\da-f]{1,6}"+M+"?|("+M+")|.)","ig"),db=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)};try{I.apply(F=J.call(v.childNodes),v.childNodes),F[v.childNodes.length].nodeType}catch(eb){I={apply:F.length?function(a,b){H.apply(a,J.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function fb(a,b,d,e){var f,h,j,k,l,o,r,s,w,x;if((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,d=d||[],!a||"string"!=typeof a)return d;if(1!==(k=b.nodeType)&&9!==k)return[];if(p&&!e){if(f=_.exec(a))if(j=f[1]){if(9===k){if(h=b.getElementById(j),!h||!h.parentNode)return d;if(h.id===j)return d.push(h),d}else if(b.ownerDocument&&(h=b.ownerDocument.getElementById(j))&&t(b,h)&&h.id===j)return d.push(h),d}else{if(f[2])return I.apply(d,b.getElementsByTagName(a)),d;if((j=f[3])&&c.getElementsByClassName&&b.getElementsByClassName)return I.apply(d,b.getElementsByClassName(j)),d}if(c.qsa&&(!q||!q.test(a))){if(s=r=u,w=b,x=9===k&&a,1===k&&"object"!==b.nodeName.toLowerCase()){o=g(a),(r=b.getAttribute("id"))?s=r.replace(bb,"\\$&"):b.setAttribute("id",s),s="[id='"+s+"'] ",l=o.length;while(l--)o[l]=s+qb(o[l]);w=ab.test(a)&&ob(b.parentNode)||b,x=o.join(",")}if(x)try{return I.apply(d,w.querySelectorAll(x)),d}catch(y){}finally{r||b.removeAttribute("id")}}}return i(a.replace(R,"$1"),b,d,e)}function gb(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function hb(a){return a[u]=!0,a}function ib(a){var b=n.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function jb(a,b){var c=a.split("|"),e=a.length;while(e--)d.attrHandle[c[e]]=b}function kb(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||D)-(~a.sourceIndex||D);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function lb(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function mb(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function nb(a){return hb(function(b){return b=+b,hb(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function ob(a){return a&&typeof a.getElementsByTagName!==C&&a}c=fb.support={},f=fb.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=fb.setDocument=function(a){var b,e=a?a.ownerDocument||a:v,g=e.defaultView;return e!==n&&9===e.nodeType&&e.documentElement?(n=e,o=e.documentElement,p=!f(e),g&&g!==g.top&&(g.addEventListener?g.addEventListener("unload",function(){m()},!1):g.attachEvent&&g.attachEvent("onunload",function(){m()})),c.attributes=ib(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ib(function(a){return a.appendChild(e.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=$.test(e.getElementsByClassName)&&ib(function(a){return a.innerHTML="<div class='a'></div><div class='a i'></div>",a.firstChild.className="i",2===a.getElementsByClassName("i").length}),c.getById=ib(function(a){return o.appendChild(a).id=u,!e.getElementsByName||!e.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if(typeof b.getElementById!==C&&p){var c=b.getElementById(a);return c&&c.parentNode?[c]:[]}},d.filter.ID=function(a){var b=a.replace(cb,db);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(cb,db);return function(a){var c=typeof a.getAttributeNode!==C&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return typeof b.getElementsByTagName!==C?b.getElementsByTagName(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return typeof b.getElementsByClassName!==C&&p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=$.test(e.querySelectorAll))&&(ib(function(a){a.innerHTML="<select msallowclip=''><option selected=''></option></select>",a.querySelectorAll("[msallowclip^='']").length&&q.push("[*^$]="+M+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+M+"*(?:value|"+L+")"),a.querySelectorAll(":checked").length||q.push(":checked")}),ib(function(a){var b=e.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+M+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=$.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ib(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",Q)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=$.test(o.compareDocumentPosition),t=b||$.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===e||a.ownerDocument===v&&t(v,a)?-1:b===e||b.ownerDocument===v&&t(v,b)?1:k?K.call(k,a)-K.call(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,f=a.parentNode,g=b.parentNode,h=[a],i=[b];if(!f||!g)return a===e?-1:b===e?1:f?-1:g?1:k?K.call(k,a)-K.call(k,b):0;if(f===g)return kb(a,b);c=a;while(c=c.parentNode)h.unshift(c);c=b;while(c=c.parentNode)i.unshift(c);while(h[d]===i[d])d++;return d?kb(h[d],i[d]):h[d]===v?-1:i[d]===v?1:0},e):n},fb.matches=function(a,b){return fb(a,null,null,b)},fb.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(U,"='$1']"),!(!c.matchesSelector||!p||r&&r.test(b)||q&&q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return fb(b,n,null,[a]).length>0},fb.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},fb.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&E.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},fb.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},fb.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=fb.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=fb.selectors={cacheLength:50,createPseudo:hb,match:X,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(cb,db),a[3]=(a[3]||a[4]||a[5]||"").replace(cb,db),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||fb.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&fb.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return X.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&V.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(cb,db).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+M+")"+a+"("+M+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||typeof a.getAttribute!==C&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=fb.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h;if(q){if(f){while(p){l=b;while(l=l[p])if(h?l.nodeName.toLowerCase()===r:1===l.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){k=q[u]||(q[u]={}),j=k[a]||[],n=j[0]===w&&j[1],m=j[0]===w&&j[2],l=n&&q.childNodes[n];while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if(1===l.nodeType&&++m&&l===b){k[a]=[w,n,m];break}}else if(s&&(j=(b[u]||(b[u]={}))[a])&&j[0]===w)m=j[1];else while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if((h?l.nodeName.toLowerCase()===r:1===l.nodeType)&&++m&&(s&&((l[u]||(l[u]={}))[a]=[w,m]),l===b))break;return m-=e,m===d||m%d===0&&m/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||fb.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?hb(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=K.call(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:hb(function(a){var b=[],c=[],d=h(a.replace(R,"$1"));return d[u]?hb(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),!c.pop()}}),has:hb(function(a){return function(b){return fb(a,b).length>0}}),contains:hb(function(a){return function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:hb(function(a){return W.test(a||"")||fb.error("unsupported lang: "+a),a=a.replace(cb,db).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Z.test(a.nodeName)},input:function(a){return Y.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:nb(function(){return[0]}),last:nb(function(a,b){return[b-1]}),eq:nb(function(a,b,c){return[0>c?c+b:c]}),even:nb(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:nb(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:nb(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:nb(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=lb(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=mb(b);function pb(){}pb.prototype=d.filters=d.pseudos,d.setFilters=new pb,g=fb.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){(!c||(e=S.exec(h)))&&(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=T.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(R," ")}),h=h.slice(c.length));for(g in d.filter)!(e=X[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?fb.error(a):z(a,i).slice(0)};function qb(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function rb(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(i=b[u]||(b[u]={}),(h=i[d])&&h[0]===w&&h[1]===f)return j[2]=h[2];if(i[d]=j,j[2]=a(b,c,g))return!0}}}function sb(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function tb(a,b,c){for(var d=0,e=b.length;e>d;d++)fb(a,b[d],c);return c}function ub(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(!c||c(f,d,e))&&(g.push(f),j&&b.push(h));return g}function vb(a,b,c,d,e,f){return d&&!d[u]&&(d=vb(d)),e&&!e[u]&&(e=vb(e,f)),hb(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||tb(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:ub(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=ub(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?K.call(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=ub(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):I.apply(g,r)})}function wb(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=rb(function(a){return a===b},h,!0),l=rb(function(a){return K.call(b,a)>-1},h,!0),m=[function(a,c,d){return!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d))}];f>i;i++)if(c=d.relative[a[i].type])m=[rb(sb(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return vb(i>1&&sb(m),i>1&&qb(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(R,"$1"),c,e>i&&wb(a.slice(i,e)),f>e&&wb(a=a.slice(e)),f>e&&qb(a))}m.push(c)}return sb(m)}function xb(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,m,o,p=0,q="0",r=f&&[],s=[],t=j,u=f||e&&d.find.TAG("*",k),v=w+=null==t?1:Math.random()||.1,x=u.length;for(k&&(j=g!==n&&g);q!==x&&null!=(l=u[q]);q++){if(e&&l){m=0;while(o=a[m++])if(o(l,g,h)){i.push(l);break}k&&(w=v)}c&&((l=!o&&l)&&p--,f&&r.push(l))}if(p+=q,c&&q!==p){m=0;while(o=b[m++])o(r,s,g,h);if(f){if(p>0)while(q--)r[q]||s[q]||(s[q]=G.call(i));s=ub(s)}I.apply(i,s),k&&!f&&s.length>0&&p+b.length>1&&fb.uniqueSort(i)}return k&&(w=v,j=t),r};return c?hb(f):f}return h=fb.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=wb(b[c]),f[u]?d.push(f):e.push(f);f=A(a,xb(e,d)),f.selector=a}return f},i=fb.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(cb,db),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=X.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(cb,db),ab.test(j[0].type)&&ob(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&qb(j),!a)return I.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,ab.test(a)&&ob(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ib(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),ib(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||jb("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ib(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||jb("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),ib(function(a){return null==a.getAttribute("disabled")})||jb(L,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),fb}(a);n.find=t,n.expr=t.selectors,n.expr[":"]=n.expr.pseudos,n.unique=t.uniqueSort,n.text=t.getText,n.isXMLDoc=t.isXML,n.contains=t.contains;var u=n.expr.match.needsContext,v=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,w=/^.[^:#\[\.,]*$/;function x(a,b,c){if(n.isFunction(b))return n.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return n.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(w.test(b))return n.filter(b,a,c);b=n.filter(b,a)}return n.grep(a,function(a){return g.call(b,a)>=0!==c})}n.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?n.find.matchesSelector(d,a)?[d]:[]:n.find.matches(a,n.grep(b,function(a){return 1===a.nodeType}))},n.fn.extend({find:function(a){var b,c=this.length,d=[],e=this;if("string"!=typeof a)return this.pushStack(n(a).filter(function(){for(b=0;c>b;b++)if(n.contains(e[b],this))return!0}));for(b=0;c>b;b++)n.find(a,e[b],d);return d=this.pushStack(c>1?n.unique(d):d),d.selector=this.selector?this.selector+" "+a:a,d},filter:function(a){return this.pushStack(x(this,a||[],!1))},not:function(a){return this.pushStack(x(this,a||[],!0))},is:function(a){return!!x(this,"string"==typeof a&&u.test(a)?n(a):a||[],!1).length}});var y,z=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,A=n.fn.init=function(a,b){var c,d;if(!a)return this;if("string"==typeof a){if(c="<"===a[0]&&">"===a[a.length-1]&&a.length>=3?[null,a,null]:z.exec(a),!c||!c[1]&&b)return!b||b.jquery?(b||y).find(a):this.constructor(b).find(a);if(c[1]){if(b=b instanceof n?b[0]:b,n.merge(this,n.parseHTML(c[1],b&&b.nodeType?b.ownerDocument||b:l,!0)),v.test(c[1])&&n.isPlainObject(b))for(c in b)n.isFunction(this[c])?this[c](b[c]):this.attr(c,b[c]);return this}return d=l.getElementById(c[2]),d&&d.parentNode&&(this.length=1,this[0]=d),this.context=l,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):n.isFunction(a)?"undefined"!=typeof y.ready?y.ready(a):a(n):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),n.makeArray(a,this))};A.prototype=n.fn,y=n(l);var B=/^(?:parents|prev(?:Until|All))/,C={children:!0,contents:!0,next:!0,prev:!0};n.extend({dir:function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&n(a).is(c))break;d.push(a)}return d},sibling:function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c}}),n.fn.extend({has:function(a){var b=n(a,this),c=b.length;return this.filter(function(){for(var a=0;c>a;a++)if(n.contains(this,b[a]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=u.test(a)||"string"!=typeof a?n(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&n.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?n.unique(f):f)},index:function(a){return a?"string"==typeof a?g.call(n(a),this[0]):g.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(n.unique(n.merge(this.get(),n(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function D(a,b){while((a=a[b])&&1!==a.nodeType);return a}n.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return n.dir(a,"parentNode")},parentsUntil:function(a,b,c){return n.dir(a,"parentNode",c)},next:function(a){return D(a,"nextSibling")},prev:function(a){return D(a,"previousSibling")},nextAll:function(a){return n.dir(a,"nextSibling")},prevAll:function(a){return n.dir(a,"previousSibling")},nextUntil:function(a,b,c){return n.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return n.dir(a,"previousSibling",c)},siblings:function(a){return n.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return n.sibling(a.firstChild)},contents:function(a){return a.contentDocument||n.merge([],a.childNodes)}},function(a,b){n.fn[a]=function(c,d){var e=n.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=n.filter(d,e)),this.length>1&&(C[a]||n.unique(e),B.test(a)&&e.reverse()),this.pushStack(e)}});var E=/\S+/g,F={};function G(a){var b=F[a]={};return n.each(a.match(E)||[],function(a,c){b[c]=!0}),b}n.Callbacks=function(a){a="string"==typeof a?F[a]||G(a):n.extend({},a);var b,c,d,e,f,g,h=[],i=!a.once&&[],j=function(l){for(b=a.memory&&l,c=!0,g=e||0,e=0,f=h.length,d=!0;h&&f>g;g++)if(h[g].apply(l[0],l[1])===!1&&a.stopOnFalse){b=!1;break}d=!1,h&&(i?i.length&&j(i.shift()):b?h=[]:k.disable())},k={add:function(){if(h){var c=h.length;!function g(b){n.each(b,function(b,c){var d=n.type(c);"function"===d?a.unique&&k.has(c)||h.push(c):c&&c.length&&"string"!==d&&g(c)})}(arguments),d?f=h.length:b&&(e=c,j(b))}return this},remove:function(){return h&&n.each(arguments,function(a,b){var c;while((c=n.inArray(b,h,c))>-1)h.splice(c,1),d&&(f>=c&&f--,g>=c&&g--)}),this},has:function(a){return a?n.inArray(a,h)>-1:!(!h||!h.length)},empty:function(){return h=[],f=0,this},disable:function(){return h=i=b=void 0,this},disabled:function(){return!h},lock:function(){return i=void 0,b||k.disable(),this},locked:function(){return!i},fireWith:function(a,b){return!h||c&&!i||(b=b||[],b=[a,b.slice?b.slice():b],d?i.push(b):j(b)),this},fire:function(){return k.fireWith(this,arguments),this},fired:function(){return!!c}};return k},n.extend({Deferred:function(a){var b=[["resolve","done",n.Callbacks("once memory"),"resolved"],["reject","fail",n.Callbacks("once memory"),"rejected"],["notify","progress",n.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return n.Deferred(function(c){n.each(b,function(b,f){var g=n.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&n.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?n.extend(a,d):d}},e={};return d.pipe=d.then,n.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=d.call(arguments),e=c.length,f=1!==e||a&&n.isFunction(a.promise)?e:0,g=1===f?a:n.Deferred(),h=function(a,b,c){return function(e){b[a]=this,c[a]=arguments.length>1?d.call(arguments):e,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(e>1)for(i=new Array(e),j=new Array(e),k=new Array(e);e>b;b++)c[b]&&n.isFunction(c[b].promise)?c[b].promise().done(h(b,k,c)).fail(g.reject).progress(h(b,j,i)):--f;return f||g.resolveWith(k,c),g.promise()}});var H;n.fn.ready=function(a){return n.ready.promise().done(a),this},n.extend({isReady:!1,readyWait:1,holdReady:function(a){a?n.readyWait++:n.ready(!0)},ready:function(a){(a===!0?--n.readyWait:n.isReady)||(n.isReady=!0,a!==!0&&--n.readyWait>0||(H.resolveWith(l,[n]),n.fn.triggerHandler&&(n(l).triggerHandler("ready"),n(l).off("ready"))))}});function I(){l.removeEventListener("DOMContentLoaded",I,!1),a.removeEventListener("load",I,!1),n.ready()}n.ready.promise=function(b){return H||(H=n.Deferred(),"complete"===l.readyState?setTimeout(n.ready):(l.addEventListener("DOMContentLoaded",I,!1),a.addEventListener("load",I,!1))),H.promise(b)},n.ready.promise();var J=n.access=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===n.type(c)){e=!0;for(h in c)n.access(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,n.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(n(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f};n.acceptData=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType};function K(){Object.defineProperty(this.cache={},0,{get:function(){return{}}}),this.expando=n.expando+Math.random()}K.uid=1,K.accepts=n.acceptData,K.prototype={key:function(a){if(!K.accepts(a))return 0;var b={},c=a[this.expando];if(!c){c=K.uid++;try{b[this.expando]={value:c},Object.defineProperties(a,b)}catch(d){b[this.expando]=c,n.extend(a,b)}}return this.cache[c]||(this.cache[c]={}),c},set:function(a,b,c){var d,e=this.key(a),f=this.cache[e];if("string"==typeof b)f[b]=c;else if(n.isEmptyObject(f))n.extend(this.cache[e],b);else for(d in b)f[d]=b[d];return f},get:function(a,b){var c=this.cache[this.key(a)];return void 0===b?c:c[b]},access:function(a,b,c){var d;return void 0===b||b&&"string"==typeof b&&void 0===c?(d=this.get(a,b),void 0!==d?d:this.get(a,n.camelCase(b))):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d,e,f=this.key(a),g=this.cache[f];if(void 0===b)this.cache[f]={};else{n.isArray(b)?d=b.concat(b.map(n.camelCase)):(e=n.camelCase(b),b in g?d=[b,e]:(d=e,d=d in g?[d]:d.match(E)||[])),c=d.length;while(c--)delete g[d[c]]}},hasData:function(a){return!n.isEmptyObject(this.cache[a[this.expando]]||{})},discard:function(a){a[this.expando]&&delete this.cache[a[this.expando]]}};var L=new K,M=new K,N=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,O=/([A-Z])/g;function P(a,b,c){var d;if(void 0===c&&1===a.nodeType)if(d="data-"+b.replace(O,"-$1").toLowerCase(),c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:N.test(c)?n.parseJSON(c):c}catch(e){}M.set(a,b,c)}else c=void 0;return c}n.extend({hasData:function(a){return M.hasData(a)||L.hasData(a)},data:function(a,b,c){return M.access(a,b,c)},removeData:function(a,b){M.remove(a,b)
},_data:function(a,b,c){return L.access(a,b,c)},_removeData:function(a,b){L.remove(a,b)}}),n.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=M.get(f),1===f.nodeType&&!L.get(f,"hasDataAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=n.camelCase(d.slice(5)),P(f,d,e[d])));L.set(f,"hasDataAttrs",!0)}return e}return"object"==typeof a?this.each(function(){M.set(this,a)}):J(this,function(b){var c,d=n.camelCase(a);if(f&&void 0===b){if(c=M.get(f,a),void 0!==c)return c;if(c=M.get(f,d),void 0!==c)return c;if(c=P(f,d,void 0),void 0!==c)return c}else this.each(function(){var c=M.get(this,d);M.set(this,d,b),-1!==a.indexOf("-")&&void 0!==c&&M.set(this,a,b)})},null,b,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){M.remove(this,a)})}}),n.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=L.get(a,b),c&&(!d||n.isArray(c)?d=L.access(a,b,n.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=n.queue(a,b),d=c.length,e=c.shift(),f=n._queueHooks(a,b),g=function(){n.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return L.get(a,c)||L.access(a,c,{empty:n.Callbacks("once memory").add(function(){L.remove(a,[b+"queue",c])})})}}),n.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?n.queue(this[0],a):void 0===b?this:this.each(function(){var c=n.queue(this,a,b);n._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&n.dequeue(this,a)})},dequeue:function(a){return this.each(function(){n.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=n.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=L.get(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var Q=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,R=["Top","Right","Bottom","Left"],S=function(a,b){return a=b||a,"none"===n.css(a,"display")||!n.contains(a.ownerDocument,a)},T=/^(?:checkbox|radio)$/i;!function(){var a=l.createDocumentFragment(),b=a.appendChild(l.createElement("div")),c=l.createElement("input");c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),b.appendChild(c),k.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML="<textarea>x</textarea>",k.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();var U="undefined";k.focusinBubbles="onfocusin"in a;var V=/^key/,W=/^(?:mouse|pointer|contextmenu)|click/,X=/^(?:focusinfocus|focusoutblur)$/,Y=/^([^.]*)(?:\.(.+)|)$/;function Z(){return!0}function $(){return!1}function _(){try{return l.activeElement}catch(a){}}n.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=L.get(a);if(r){c.handler&&(f=c,c=f.handler,e=f.selector),c.guid||(c.guid=n.guid++),(i=r.events)||(i=r.events={}),(g=r.handle)||(g=r.handle=function(b){return typeof n!==U&&n.event.triggered!==b.type?n.event.dispatch.apply(a,arguments):void 0}),b=(b||"").match(E)||[""],j=b.length;while(j--)h=Y.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o&&(l=n.event.special[o]||{},o=(e?l.delegateType:l.bindType)||o,l=n.event.special[o]||{},k=n.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&n.expr.match.needsContext.test(e),namespace:p.join(".")},f),(m=i[o])||(m=i[o]=[],m.delegateCount=0,l.setup&&l.setup.call(a,d,p,g)!==!1||a.addEventListener&&a.addEventListener(o,g,!1)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),n.event.global[o]=!0)}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=L.hasData(a)&&L.get(a);if(r&&(i=r.events)){b=(b||"").match(E)||[""],j=b.length;while(j--)if(h=Y.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=n.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,m=i[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=m.length;while(f--)k=m[f],!e&&q!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));g&&!m.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||n.removeEvent(a,o,r.handle),delete i[o])}else for(o in i)n.event.remove(a,o+b[j],c,d,!0);n.isEmptyObject(i)&&(delete r.handle,L.remove(a,"events"))}},trigger:function(b,c,d,e){var f,g,h,i,k,m,o,p=[d||l],q=j.call(b,"type")?b.type:b,r=j.call(b,"namespace")?b.namespace.split("."):[];if(g=h=d=d||l,3!==d.nodeType&&8!==d.nodeType&&!X.test(q+n.event.triggered)&&(q.indexOf(".")>=0&&(r=q.split("."),q=r.shift(),r.sort()),k=q.indexOf(":")<0&&"on"+q,b=b[n.expando]?b:new n.Event(q,"object"==typeof b&&b),b.isTrigger=e?2:3,b.namespace=r.join("."),b.namespace_re=b.namespace?new RegExp("(^|\\.)"+r.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=d),c=null==c?[b]:n.makeArray(c,[b]),o=n.event.special[q]||{},e||!o.trigger||o.trigger.apply(d,c)!==!1)){if(!e&&!o.noBubble&&!n.isWindow(d)){for(i=o.delegateType||q,X.test(i+q)||(g=g.parentNode);g;g=g.parentNode)p.push(g),h=g;h===(d.ownerDocument||l)&&p.push(h.defaultView||h.parentWindow||a)}f=0;while((g=p[f++])&&!b.isPropagationStopped())b.type=f>1?i:o.bindType||q,m=(L.get(g,"events")||{})[b.type]&&L.get(g,"handle"),m&&m.apply(g,c),m=k&&g[k],m&&m.apply&&n.acceptData(g)&&(b.result=m.apply(g,c),b.result===!1&&b.preventDefault());return b.type=q,e||b.isDefaultPrevented()||o._default&&o._default.apply(p.pop(),c)!==!1||!n.acceptData(d)||k&&n.isFunction(d[q])&&!n.isWindow(d)&&(h=d[k],h&&(d[k]=null),n.event.triggered=q,d[q](),n.event.triggered=void 0,h&&(d[k]=h)),b.result}},dispatch:function(a){a=n.event.fix(a);var b,c,e,f,g,h=[],i=d.call(arguments),j=(L.get(this,"events")||{})[a.type]||[],k=n.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=n.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,c=0;while((g=f.handlers[c++])&&!a.isImmediatePropagationStopped())(!a.namespace_re||a.namespace_re.test(g.namespace))&&(a.handleObj=g,a.data=g.data,e=((n.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==e&&(a.result=e)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&(!a.button||"click"!==a.type))for(;i!==this;i=i.parentNode||this)if(i.disabled!==!0||"click"!==a.type){for(d=[],c=0;h>c;c++)f=b[c],e=f.selector+" ",void 0===d[e]&&(d[e]=f.needsContext?n(e,this).index(i)>=0:n.find(e,this,null,[i]).length),d[e]&&d.push(f);d.length&&g.push({elem:i,handlers:d})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,d,e,f=b.button;return null==a.pageX&&null!=b.clientX&&(c=a.target.ownerDocument||l,d=c.documentElement,e=c.body,a.pageX=b.clientX+(d&&d.scrollLeft||e&&e.scrollLeft||0)-(d&&d.clientLeft||e&&e.clientLeft||0),a.pageY=b.clientY+(d&&d.scrollTop||e&&e.scrollTop||0)-(d&&d.clientTop||e&&e.clientTop||0)),a.which||void 0===f||(a.which=1&f?1:2&f?3:4&f?2:0),a}},fix:function(a){if(a[n.expando])return a;var b,c,d,e=a.type,f=a,g=this.fixHooks[e];g||(this.fixHooks[e]=g=W.test(e)?this.mouseHooks:V.test(e)?this.keyHooks:{}),d=g.props?this.props.concat(g.props):this.props,a=new n.Event(f),b=d.length;while(b--)c=d[b],a[c]=f[c];return a.target||(a.target=l),3===a.target.nodeType&&(a.target=a.target.parentNode),g.filter?g.filter(a,f):a},special:{load:{noBubble:!0},focus:{trigger:function(){return this!==_()&&this.focus?(this.focus(),!1):void 0},delegateType:"focusin"},blur:{trigger:function(){return this===_()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return"checkbox"===this.type&&this.click&&n.nodeName(this,"input")?(this.click(),!1):void 0},_default:function(a){return n.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c,d){var e=n.extend(new n.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?n.event.trigger(e,null,b):n.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},n.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)},n.Event=function(a,b){return this instanceof n.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?Z:$):this.type=a,b&&n.extend(this,b),this.timeStamp=a&&a.timeStamp||n.now(),void(this[n.expando]=!0)):new n.Event(a,b)},n.Event.prototype={isDefaultPrevented:$,isPropagationStopped:$,isImmediatePropagationStopped:$,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=Z,a&&a.preventDefault&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=Z,a&&a.stopPropagation&&a.stopPropagation()},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=Z,a&&a.stopImmediatePropagation&&a.stopImmediatePropagation(),this.stopPropagation()}},n.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){n.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return(!e||e!==d&&!n.contains(d,e))&&(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),k.focusinBubbles||n.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){n.event.simulate(b,a.target,n.event.fix(a),!0)};n.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=L.access(d,b);e||d.addEventListener(a,c,!0),L.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=L.access(d,b)-1;e?L.access(d,b,e):(d.removeEventListener(a,c,!0),L.remove(d,b))}}}),n.fn.extend({on:function(a,b,c,d,e){var f,g;if("object"==typeof a){"string"!=typeof b&&(c=c||b,b=void 0);for(g in a)this.on(g,b,c,a[g],e);return this}if(null==c&&null==d?(d=b,c=b=void 0):null==d&&("string"==typeof b?(d=c,c=void 0):(d=c,c=b,b=void 0)),d===!1)d=$;else if(!d)return this;return 1===e&&(f=d,d=function(a){return n().off(a),f.apply(this,arguments)},d.guid=f.guid||(f.guid=n.guid++)),this.each(function(){n.event.add(this,a,d,c,b)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,n(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return(b===!1||"function"==typeof b)&&(c=b,b=void 0),c===!1&&(c=$),this.each(function(){n.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){n.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?n.event.trigger(a,b,c,!0):void 0}});var ab=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,bb=/<([\w:]+)/,cb=/<|&#?\w+;/,db=/<(?:script|style|link)/i,eb=/checked\s*(?:[^=]|=\s*.checked.)/i,fb=/^$|\/(?:java|ecma)script/i,gb=/^true\/(.*)/,hb=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,ib={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ib.optgroup=ib.option,ib.tbody=ib.tfoot=ib.colgroup=ib.caption=ib.thead,ib.th=ib.td;function jb(a,b){return n.nodeName(a,"table")&&n.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function kb(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}function lb(a){var b=gb.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function mb(a,b){for(var c=0,d=a.length;d>c;c++)L.set(a[c],"globalEval",!b||L.get(b[c],"globalEval"))}function nb(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(L.hasData(a)&&(f=L.access(a),g=L.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;d>c;c++)n.event.add(b,e,j[e][c])}M.hasData(a)&&(h=M.access(a),i=n.extend({},h),M.set(b,i))}}function ob(a,b){var c=a.getElementsByTagName?a.getElementsByTagName(b||"*"):a.querySelectorAll?a.querySelectorAll(b||"*"):[];return void 0===b||b&&n.nodeName(a,b)?n.merge([a],c):c}function pb(a,b){var c=b.nodeName.toLowerCase();"input"===c&&T.test(a.type)?b.checked=a.checked:("input"===c||"textarea"===c)&&(b.defaultValue=a.defaultValue)}n.extend({clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=n.contains(a.ownerDocument,a);if(!(k.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||n.isXMLDoc(a)))for(g=ob(h),f=ob(a),d=0,e=f.length;e>d;d++)pb(f[d],g[d]);if(b)if(c)for(f=f||ob(a),g=g||ob(h),d=0,e=f.length;e>d;d++)nb(f[d],g[d]);else nb(a,h);return g=ob(h,"script"),g.length>0&&mb(g,!i&&ob(a,"script")),h},buildFragment:function(a,b,c,d){for(var e,f,g,h,i,j,k=b.createDocumentFragment(),l=[],m=0,o=a.length;o>m;m++)if(e=a[m],e||0===e)if("object"===n.type(e))n.merge(l,e.nodeType?[e]:e);else if(cb.test(e)){f=f||k.appendChild(b.createElement("div")),g=(bb.exec(e)||["",""])[1].toLowerCase(),h=ib[g]||ib._default,f.innerHTML=h[1]+e.replace(ab,"<$1></$2>")+h[2],j=h[0];while(j--)f=f.lastChild;n.merge(l,f.childNodes),f=k.firstChild,f.textContent=""}else l.push(b.createTextNode(e));k.textContent="",m=0;while(e=l[m++])if((!d||-1===n.inArray(e,d))&&(i=n.contains(e.ownerDocument,e),f=ob(k.appendChild(e),"script"),i&&mb(f),c)){j=0;while(e=f[j++])fb.test(e.type||"")&&c.push(e)}return k},cleanData:function(a){for(var b,c,d,e,f=n.event.special,g=0;void 0!==(c=a[g]);g++){if(n.acceptData(c)&&(e=c[L.expando],e&&(b=L.cache[e]))){if(b.events)for(d in b.events)f[d]?n.event.remove(c,d):n.removeEvent(c,d,b.handle);L.cache[e]&&delete L.cache[e]}delete M.cache[c[M.expando]]}}}),n.fn.extend({text:function(a){return J(this,function(a){return void 0===a?n.text(this):this.empty().each(function(){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&(this.textContent=a)})},null,a,arguments.length)},append:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=jb(this,a);b.appendChild(a)}})},prepend:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=jb(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},remove:function(a,b){for(var c,d=a?n.filter(a,this):this,e=0;null!=(c=d[e]);e++)b||1!==c.nodeType||n.cleanData(ob(c)),c.parentNode&&(b&&n.contains(c.ownerDocument,c)&&mb(ob(c,"script")),c.parentNode.removeChild(c));return this},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(n.cleanData(ob(a,!1)),a.textContent="");return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return n.clone(this,a,b)})},html:function(a){return J(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;if("string"==typeof a&&!db.test(a)&&!ib[(bb.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(ab,"<$1></$2>");try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(n.cleanData(ob(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=arguments[0];return this.domManip(arguments,function(b){a=this.parentNode,n.cleanData(ob(this)),a&&a.replaceChild(b,this)}),a&&(a.length||a.nodeType)?this:this.remove()},detach:function(a){return this.remove(a,!0)},domManip:function(a,b){a=e.apply([],a);var c,d,f,g,h,i,j=0,l=this.length,m=this,o=l-1,p=a[0],q=n.isFunction(p);if(q||l>1&&"string"==typeof p&&!k.checkClone&&eb.test(p))return this.each(function(c){var d=m.eq(c);q&&(a[0]=p.call(this,c,d.html())),d.domManip(a,b)});if(l&&(c=n.buildFragment(a,this[0].ownerDocument,!1,this),d=c.firstChild,1===c.childNodes.length&&(c=d),d)){for(f=n.map(ob(c,"script"),kb),g=f.length;l>j;j++)h=c,j!==o&&(h=n.clone(h,!0,!0),g&&n.merge(f,ob(h,"script"))),b.call(this[j],h,j);if(g)for(i=f[f.length-1].ownerDocument,n.map(f,lb),j=0;g>j;j++)h=f[j],fb.test(h.type||"")&&!L.access(h,"globalEval")&&n.contains(i,h)&&(h.src?n._evalUrl&&n._evalUrl(h.src):n.globalEval(h.textContent.replace(hb,"")))}return this}}),n.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){n.fn[a]=function(a){for(var c,d=[],e=n(a),g=e.length-1,h=0;g>=h;h++)c=h===g?this:this.clone(!0),n(e[h])[b](c),f.apply(d,c.get());return this.pushStack(d)}});var qb,rb={};function sb(b,c){var d,e=n(c.createElement(b)).appendTo(c.body),f=a.getDefaultComputedStyle&&(d=a.getDefaultComputedStyle(e[0]))?d.display:n.css(e[0],"display");return e.detach(),f}function tb(a){var b=l,c=rb[a];return c||(c=sb(a,b),"none"!==c&&c||(qb=(qb||n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=qb[0].contentDocument,b.write(),b.close(),c=sb(a,b),qb.detach()),rb[a]=c),c}var ub=/^margin/,vb=new RegExp("^("+Q+")(?!px)[a-z%]+$","i"),wb=function(a){return a.ownerDocument.defaultView.getComputedStyle(a,null)};function xb(a,b,c){var d,e,f,g,h=a.style;return c=c||wb(a),c&&(g=c.getPropertyValue(b)||c[b]),c&&(""!==g||n.contains(a.ownerDocument,a)||(g=n.style(a,b)),vb.test(g)&&ub.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0!==g?g+"":g}function yb(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}!function(){var b,c,d=l.documentElement,e=l.createElement("div"),f=l.createElement("div");if(f.style){f.style.backgroundClip="content-box",f.cloneNode(!0).style.backgroundClip="",k.clearCloneStyle="content-box"===f.style.backgroundClip,e.style.cssText="border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute",e.appendChild(f);function g(){f.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",f.innerHTML="",d.appendChild(e);var g=a.getComputedStyle(f,null);b="1%"!==g.top,c="4px"===g.width,d.removeChild(e)}a.getComputedStyle&&n.extend(k,{pixelPosition:function(){return g(),b},boxSizingReliable:function(){return null==c&&g(),c},reliableMarginRight:function(){var b,c=f.appendChild(l.createElement("div"));return c.style.cssText=f.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",c.style.marginRight=c.style.width="0",f.style.width="1px",d.appendChild(e),b=!parseFloat(a.getComputedStyle(c,null).marginRight),d.removeChild(e),b}})}}(),n.swap=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};var zb=/^(none|table(?!-c[ea]).+)/,Ab=new RegExp("^("+Q+")(.*)$","i"),Bb=new RegExp("^([+-])=("+Q+")","i"),Cb={position:"absolute",visibility:"hidden",display:"block"},Db={letterSpacing:"0",fontWeight:"400"},Eb=["Webkit","O","Moz","ms"];function Fb(a,b){if(b in a)return b;var c=b[0].toUpperCase()+b.slice(1),d=b,e=Eb.length;while(e--)if(b=Eb[e]+c,b in a)return b;return d}function Gb(a,b,c){var d=Ab.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function Hb(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=n.css(a,c+R[f],!0,e)),d?("content"===c&&(g-=n.css(a,"padding"+R[f],!0,e)),"margin"!==c&&(g-=n.css(a,"border"+R[f]+"Width",!0,e))):(g+=n.css(a,"padding"+R[f],!0,e),"padding"!==c&&(g+=n.css(a,"border"+R[f]+"Width",!0,e)));return g}function Ib(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=wb(a),g="border-box"===n.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=xb(a,b,f),(0>e||null==e)&&(e=a.style[b]),vb.test(e))return e;d=g&&(k.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+Hb(a,b,c||(g?"border":"content"),d,f)+"px"}function Jb(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=L.get(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&S(d)&&(f[g]=L.access(d,"olddisplay",tb(d.nodeName)))):(e=S(d),"none"===c&&e||L.set(d,"olddisplay",e?c:n.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}n.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=xb(a,"opacity");return""===c?"1":c}}}},cssNumber:{columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=n.camelCase(b),i=a.style;return b=n.cssProps[h]||(n.cssProps[h]=Fb(i,h)),g=n.cssHooks[b]||n.cssHooks[h],void 0===c?g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b]:(f=typeof c,"string"===f&&(e=Bb.exec(c))&&(c=(e[1]+1)*e[2]+parseFloat(n.css(a,b)),f="number"),null!=c&&c===c&&("number"!==f||n.cssNumber[h]||(c+="px"),k.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),g&&"set"in g&&void 0===(c=g.set(a,c,d))||(i[b]=c)),void 0)}},css:function(a,b,c,d){var e,f,g,h=n.camelCase(b);return b=n.cssProps[h]||(n.cssProps[h]=Fb(a.style,h)),g=n.cssHooks[b]||n.cssHooks[h],g&&"get"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=xb(a,b,d)),"normal"===e&&b in Db&&(e=Db[b]),""===c||c?(f=parseFloat(e),c===!0||n.isNumeric(f)?f||0:e):e}}),n.each(["height","width"],function(a,b){n.cssHooks[b]={get:function(a,c,d){return c?zb.test(n.css(a,"display"))&&0===a.offsetWidth?n.swap(a,Cb,function(){return Ib(a,b,d)}):Ib(a,b,d):void 0},set:function(a,c,d){var e=d&&wb(a);return Gb(a,c,d?Hb(a,b,d,"border-box"===n.css(a,"boxSizing",!1,e),e):0)}}}),n.cssHooks.marginRight=yb(k.reliableMarginRight,function(a,b){return b?n.swap(a,{display:"inline-block"},xb,[a,"marginRight"]):void 0}),n.each({margin:"",padding:"",border:"Width"},function(a,b){n.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+R[d]+b]=f[d]||f[d-2]||f[0];return e}},ub.test(a)||(n.cssHooks[a+b].set=Gb)}),n.fn.extend({css:function(a,b){return J(this,function(a,b,c){var d,e,f={},g=0;if(n.isArray(b)){for(d=wb(a),e=b.length;e>g;g++)f[b[g]]=n.css(a,b[g],!1,d);return f}return void 0!==c?n.style(a,b,c):n.css(a,b)},a,b,arguments.length>1)},show:function(){return Jb(this,!0)},hide:function(){return Jb(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){S(this)?n(this).show():n(this).hide()})}});function Kb(a,b,c,d,e){return new Kb.prototype.init(a,b,c,d,e)}n.Tween=Kb,Kb.prototype={constructor:Kb,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(n.cssNumber[c]?"":"px")},cur:function(){var a=Kb.propHooks[this.prop];return a&&a.get?a.get(this):Kb.propHooks._default.get(this)},run:function(a){var b,c=Kb.propHooks[this.prop];return this.pos=b=this.options.duration?n.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Kb.propHooks._default.set(this),this}},Kb.prototype.init.prototype=Kb.prototype,Kb.propHooks={_default:{get:function(a){var b;return null==a.elem[a.prop]||a.elem.style&&null!=a.elem.style[a.prop]?(b=n.css(a.elem,a.prop,""),b&&"auto"!==b?b:0):a.elem[a.prop]},set:function(a){n.fx.step[a.prop]?n.fx.step[a.prop](a):a.elem.style&&(null!=a.elem.style[n.cssProps[a.prop]]||n.cssHooks[a.prop])?n.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},Kb.propHooks.scrollTop=Kb.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},n.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},n.fx=Kb.prototype.init,n.fx.step={};var Lb,Mb,Nb=/^(?:toggle|show|hide)$/,Ob=new RegExp("^(?:([+-])=|)("+Q+")([a-z%]*)$","i"),Pb=/queueHooks$/,Qb=[Vb],Rb={"*":[function(a,b){var c=this.createTween(a,b),d=c.cur(),e=Ob.exec(b),f=e&&e[3]||(n.cssNumber[a]?"":"px"),g=(n.cssNumber[a]||"px"!==f&&+d)&&Ob.exec(n.css(c.elem,a)),h=1,i=20;if(g&&g[3]!==f){f=f||g[3],e=e||[],g=+d||1;do h=h||".5",g/=h,n.style(c.elem,a,g+f);while(h!==(h=c.cur()/d)&&1!==h&&--i)}return e&&(g=c.start=+g||+d||0,c.unit=f,c.end=e[1]?g+(e[1]+1)*e[2]:+e[2]),c}]};function Sb(){return setTimeout(function(){Lb=void 0}),Lb=n.now()}function Tb(a,b){var c,d=0,e={height:a};for(b=b?1:0;4>d;d+=2-b)c=R[d],e["margin"+c]=e["padding"+c]=a;return b&&(e.opacity=e.width=a),e}function Ub(a,b,c){for(var d,e=(Rb[b]||[]).concat(Rb["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function Vb(a,b,c){var d,e,f,g,h,i,j,k,l=this,m={},o=a.style,p=a.nodeType&&S(a),q=L.get(a,"fxshow");c.queue||(h=n._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,l.always(function(){l.always(function(){h.unqueued--,n.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[o.overflow,o.overflowX,o.overflowY],j=n.css(a,"display"),k="none"===j?L.get(a,"olddisplay")||tb(a.nodeName):j,"inline"===k&&"none"===n.css(a,"float")&&(o.display="inline-block")),c.overflow&&(o.overflow="hidden",l.always(function(){o.overflow=c.overflow[0],o.overflowX=c.overflow[1],o.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],Nb.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(p?"hide":"show")){if("show"!==e||!q||void 0===q[d])continue;p=!0}m[d]=q&&q[d]||n.style(a,d)}else j=void 0;if(n.isEmptyObject(m))"inline"===("none"===j?tb(a.nodeName):j)&&(o.display=j);else{q?"hidden"in q&&(p=q.hidden):q=L.access(a,"fxshow",{}),f&&(q.hidden=!p),p?n(a).show():l.done(function(){n(a).hide()}),l.done(function(){var b;L.remove(a,"fxshow");for(b in m)n.style(a,b,m[b])});for(d in m)g=Ub(p?q[d]:0,d,l),d in q||(q[d]=g.start,p&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function Wb(a,b){var c,d,e,f,g;for(c in a)if(d=n.camelCase(c),e=b[d],f=a[c],n.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=n.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function Xb(a,b,c){var d,e,f=0,g=Qb.length,h=n.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=Lb||Sb(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:n.extend({},b),opts:n.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:Lb||Sb(),duration:c.duration,tweens:[],createTween:function(b,c){var d=n.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}}),k=j.props;for(Wb(k,j.opts.specialEasing);g>f;f++)if(d=Qb[f].call(j,a,k,j.opts))return d;return n.map(k,Ub,j),n.isFunction(j.opts.start)&&j.opts.start.call(a,j),n.fx.timer(n.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}n.Animation=n.extend(Xb,{tweener:function(a,b){n.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");for(var c,d=0,e=a.length;e>d;d++)c=a[d],Rb[c]=Rb[c]||[],Rb[c].unshift(b)},prefilter:function(a,b){b?Qb.unshift(a):Qb.push(a)}}),n.speed=function(a,b,c){var d=a&&"object"==typeof a?n.extend({},a):{complete:c||!c&&b||n.isFunction(a)&&a,duration:a,easing:c&&b||b&&!n.isFunction(b)&&b};return d.duration=n.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in n.fx.speeds?n.fx.speeds[d.duration]:n.fx.speeds._default,(null==d.queue||d.queue===!0)&&(d.queue="fx"),d.old=d.complete,d.complete=function(){n.isFunction(d.old)&&d.old.call(this),d.queue&&n.dequeue(this,d.queue)},d},n.fn.extend({fadeTo:function(a,b,c,d){return this.filter(S).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=n.isEmptyObject(a),f=n.speed(b,c,d),g=function(){var b=Xb(this,n.extend({},a),f);(e||L.get(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=n.timers,g=L.get(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&Pb.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));(b||!c)&&n.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=L.get(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=n.timers,g=d?d.length:0;for(c.finish=!0,n.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),n.each(["toggle","show","hide"],function(a,b){var c=n.fn[b];n.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(Tb(b,!0),a,d,e)}}),n.each({slideDown:Tb("show"),slideUp:Tb("hide"),slideToggle:Tb("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){n.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),n.timers=[],n.fx.tick=function(){var a,b=0,c=n.timers;for(Lb=n.now();b<c.length;b++)a=c[b],a()||c[b]!==a||c.splice(b--,1);c.length||n.fx.stop(),Lb=void 0},n.fx.timer=function(a){n.timers.push(a),a()?n.fx.start():n.timers.pop()},n.fx.interval=13,n.fx.start=function(){Mb||(Mb=setInterval(n.fx.tick,n.fx.interval))},n.fx.stop=function(){clearInterval(Mb),Mb=null},n.fx.speeds={slow:600,fast:200,_default:400},n.fn.delay=function(a,b){return a=n.fx?n.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},function(){var a=l.createElement("input"),b=l.createElement("select"),c=b.appendChild(l.createElement("option"));a.type="checkbox",k.checkOn=""!==a.value,k.optSelected=c.selected,b.disabled=!0,k.optDisabled=!c.disabled,a=l.createElement("input"),a.value="t",a.type="radio",k.radioValue="t"===a.value}();var Yb,Zb,$b=n.expr.attrHandle;n.fn.extend({attr:function(a,b){return J(this,n.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){n.removeAttr(this,a)})}}),n.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(a&&3!==f&&8!==f&&2!==f)return typeof a.getAttribute===U?n.prop(a,b,c):(1===f&&n.isXMLDoc(a)||(b=b.toLowerCase(),d=n.attrHooks[b]||(n.expr.match.bool.test(b)?Zb:Yb)),void 0===c?d&&"get"in d&&null!==(e=d.get(a,b))?e:(e=n.find.attr(a,b),null==e?void 0:e):null!==c?d&&"set"in d&&void 0!==(e=d.set(a,c,b))?e:(a.setAttribute(b,c+""),c):void n.removeAttr(a,b))
},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(E);if(f&&1===a.nodeType)while(c=f[e++])d=n.propFix[c]||c,n.expr.match.bool.test(c)&&(a[d]=!1),a.removeAttribute(c)},attrHooks:{type:{set:function(a,b){if(!k.radioValue&&"radio"===b&&n.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}}}),Zb={set:function(a,b,c){return b===!1?n.removeAttr(a,c):a.setAttribute(c,c),c}},n.each(n.expr.match.bool.source.match(/\w+/g),function(a,b){var c=$b[b]||n.find.attr;$b[b]=function(a,b,d){var e,f;return d||(f=$b[b],$b[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,$b[b]=f),e}});var _b=/^(?:input|select|textarea|button)$/i;n.fn.extend({prop:function(a,b){return J(this,n.prop,a,b,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[n.propFix[a]||a]})}}),n.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(a,b,c){var d,e,f,g=a.nodeType;if(a&&3!==g&&8!==g&&2!==g)return f=1!==g||!n.isXMLDoc(a),f&&(b=n.propFix[b]||b,e=n.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){return a.hasAttribute("tabindex")||_b.test(a.nodeName)||a.href?a.tabIndex:-1}}}}),k.optSelected||(n.propHooks.selected={get:function(a){var b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null}}),n.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){n.propFix[this.toLowerCase()]=this});var ac=/[\t\r\n\f]/g;n.fn.extend({addClass:function(a){var b,c,d,e,f,g,h="string"==typeof a&&a,i=0,j=this.length;if(n.isFunction(a))return this.each(function(b){n(this).addClass(a.call(this,b,this.className))});if(h)for(b=(a||"").match(E)||[];j>i;i++)if(c=this[i],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ac," "):" ")){f=0;while(e=b[f++])d.indexOf(" "+e+" ")<0&&(d+=e+" ");g=n.trim(d),c.className!==g&&(c.className=g)}return this},removeClass:function(a){var b,c,d,e,f,g,h=0===arguments.length||"string"==typeof a&&a,i=0,j=this.length;if(n.isFunction(a))return this.each(function(b){n(this).removeClass(a.call(this,b,this.className))});if(h)for(b=(a||"").match(E)||[];j>i;i++)if(c=this[i],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ac," "):"")){f=0;while(e=b[f++])while(d.indexOf(" "+e+" ")>=0)d=d.replace(" "+e+" "," ");g=a?n.trim(d):"",c.className!==g&&(c.className=g)}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):this.each(n.isFunction(a)?function(c){n(this).toggleClass(a.call(this,c,this.className,b),b)}:function(){if("string"===c){var b,d=0,e=n(this),f=a.match(E)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else(c===U||"boolean"===c)&&(this.className&&L.set(this,"__className__",this.className),this.className=this.className||a===!1?"":L.get(this,"__className__")||"")})},hasClass:function(a){for(var b=" "+a+" ",c=0,d=this.length;d>c;c++)if(1===this[c].nodeType&&(" "+this[c].className+" ").replace(ac," ").indexOf(b)>=0)return!0;return!1}});var bc=/\r/g;n.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=n.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,n(this).val()):a,null==e?e="":"number"==typeof e?e+="":n.isArray(e)&&(e=n.map(e,function(a){return null==a?"":a+""})),b=n.valHooks[this.type]||n.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=n.valHooks[e.type]||n.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(bc,""):null==c?"":c)}}}),n.extend({valHooks:{option:{get:function(a){var b=n.find.attr(a,"value");return null!=b?b:n.trim(n.text(a))}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],!(!c.selected&&i!==e||(k.optDisabled?c.disabled:null!==c.getAttribute("disabled"))||c.parentNode.disabled&&n.nodeName(c.parentNode,"optgroup"))){if(b=n(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=n.makeArray(b),g=e.length;while(g--)d=e[g],(d.selected=n.inArray(d.value,f)>=0)&&(c=!0);return c||(a.selectedIndex=-1),f}}}}),n.each(["radio","checkbox"],function(){n.valHooks[this]={set:function(a,b){return n.isArray(b)?a.checked=n.inArray(n(a).val(),b)>=0:void 0}},k.checkOn||(n.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})}),n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){n.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),n.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}});var cc=n.now(),dc=/\?/;n.parseJSON=function(a){return JSON.parse(a+"")},n.parseXML=function(a){var b,c;if(!a||"string"!=typeof a)return null;try{c=new DOMParser,b=c.parseFromString(a,"text/xml")}catch(d){b=void 0}return(!b||b.getElementsByTagName("parsererror").length)&&n.error("Invalid XML: "+a),b};var ec,fc,gc=/#.*$/,hc=/([?&])_=[^&]*/,ic=/^(.*?):[ \t]*([^\r\n]*)$/gm,jc=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,kc=/^(?:GET|HEAD)$/,lc=/^\/\//,mc=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,nc={},oc={},pc="*/".concat("*");try{fc=location.href}catch(qc){fc=l.createElement("a"),fc.href="",fc=fc.href}ec=mc.exec(fc.toLowerCase())||[];function rc(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(E)||[];if(n.isFunction(c))while(d=f[e++])"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function sc(a,b,c,d){var e={},f=a===oc;function g(h){var i;return e[h]=!0,n.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function tc(a,b){var c,d,e=n.ajaxSettings.flatOptions||{};for(c in b)void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c]);return d&&n.extend(!0,a,d),a}function uc(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader("Content-Type"));if(d)for(e in h)if(h[e]&&h[e].test(d)){i.unshift(e);break}if(i[0]in c)f=i[0];else{for(e in c){if(!i[0]||a.converters[e+" "+i[0]]){f=e;break}g||(g=e)}f=f||g}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function vc(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}n.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:fc,type:"GET",isLocal:jc.test(ec[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":pc,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":n.parseJSON,"text xml":n.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?tc(tc(a,n.ajaxSettings),b):tc(n.ajaxSettings,a)},ajaxPrefilter:rc(nc),ajaxTransport:rc(oc),ajax:function(a,b){"object"==typeof a&&(b=a,a=void 0),b=b||{};var c,d,e,f,g,h,i,j,k=n.ajaxSetup({},b),l=k.context||k,m=k.context&&(l.nodeType||l.jquery)?n(l):n.event,o=n.Deferred(),p=n.Callbacks("once memory"),q=k.statusCode||{},r={},s={},t=0,u="canceled",v={readyState:0,getResponseHeader:function(a){var b;if(2===t){if(!f){f={};while(b=ic.exec(e))f[b[1].toLowerCase()]=b[2]}b=f[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===t?e:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return t||(a=s[c]=s[c]||a,r[a]=b),this},overrideMimeType:function(a){return t||(k.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>t)for(b in a)q[b]=[q[b],a[b]];else v.always(a[v.status]);return this},abort:function(a){var b=a||u;return c&&c.abort(b),x(0,b),this}};if(o.promise(v).complete=p.add,v.success=v.done,v.error=v.fail,k.url=((a||k.url||fc)+"").replace(gc,"").replace(lc,ec[1]+"//"),k.type=b.method||b.type||k.method||k.type,k.dataTypes=n.trim(k.dataType||"*").toLowerCase().match(E)||[""],null==k.crossDomain&&(h=mc.exec(k.url.toLowerCase()),k.crossDomain=!(!h||h[1]===ec[1]&&h[2]===ec[2]&&(h[3]||("http:"===h[1]?"80":"443"))===(ec[3]||("http:"===ec[1]?"80":"443")))),k.data&&k.processData&&"string"!=typeof k.data&&(k.data=n.param(k.data,k.traditional)),sc(nc,k,b,v),2===t)return v;i=k.global,i&&0===n.active++&&n.event.trigger("ajaxStart"),k.type=k.type.toUpperCase(),k.hasContent=!kc.test(k.type),d=k.url,k.hasContent||(k.data&&(d=k.url+=(dc.test(d)?"&":"?")+k.data,delete k.data),k.cache===!1&&(k.url=hc.test(d)?d.replace(hc,"$1_="+cc++):d+(dc.test(d)?"&":"?")+"_="+cc++)),k.ifModified&&(n.lastModified[d]&&v.setRequestHeader("If-Modified-Since",n.lastModified[d]),n.etag[d]&&v.setRequestHeader("If-None-Match",n.etag[d])),(k.data&&k.hasContent&&k.contentType!==!1||b.contentType)&&v.setRequestHeader("Content-Type",k.contentType),v.setRequestHeader("Accept",k.dataTypes[0]&&k.accepts[k.dataTypes[0]]?k.accepts[k.dataTypes[0]]+("*"!==k.dataTypes[0]?", "+pc+"; q=0.01":""):k.accepts["*"]);for(j in k.headers)v.setRequestHeader(j,k.headers[j]);if(k.beforeSend&&(k.beforeSend.call(l,v,k)===!1||2===t))return v.abort();u="abort";for(j in{success:1,error:1,complete:1})v[j](k[j]);if(c=sc(oc,k,b,v)){v.readyState=1,i&&m.trigger("ajaxSend",[v,k]),k.async&&k.timeout>0&&(g=setTimeout(function(){v.abort("timeout")},k.timeout));try{t=1,c.send(r,x)}catch(w){if(!(2>t))throw w;x(-1,w)}}else x(-1,"No Transport");function x(a,b,f,h){var j,r,s,u,w,x=b;2!==t&&(t=2,g&&clearTimeout(g),c=void 0,e=h||"",v.readyState=a>0?4:0,j=a>=200&&300>a||304===a,f&&(u=uc(k,v,f)),u=vc(k,u,v,j),j?(k.ifModified&&(w=v.getResponseHeader("Last-Modified"),w&&(n.lastModified[d]=w),w=v.getResponseHeader("etag"),w&&(n.etag[d]=w)),204===a||"HEAD"===k.type?x="nocontent":304===a?x="notmodified":(x=u.state,r=u.data,s=u.error,j=!s)):(s=x,(a||!x)&&(x="error",0>a&&(a=0))),v.status=a,v.statusText=(b||x)+"",j?o.resolveWith(l,[r,x,v]):o.rejectWith(l,[v,x,s]),v.statusCode(q),q=void 0,i&&m.trigger(j?"ajaxSuccess":"ajaxError",[v,k,j?r:s]),p.fireWith(l,[v,x]),i&&(m.trigger("ajaxComplete",[v,k]),--n.active||n.event.trigger("ajaxStop")))}return v},getJSON:function(a,b,c){return n.get(a,b,c,"json")},getScript:function(a,b){return n.get(a,void 0,b,"script")}}),n.each(["get","post"],function(a,b){n[b]=function(a,c,d,e){return n.isFunction(c)&&(e=e||d,d=c,c=void 0),n.ajax({url:a,type:b,dataType:e,data:c,success:d})}}),n.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){n.fn[b]=function(a){return this.on(b,a)}}),n._evalUrl=function(a){return n.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},n.fn.extend({wrapAll:function(a){var b;return n.isFunction(a)?this.each(function(b){n(this).wrapAll(a.call(this,b))}):(this[0]&&(b=n(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstElementChild)a=a.firstElementChild;return a}).append(this)),this)},wrapInner:function(a){return this.each(n.isFunction(a)?function(b){n(this).wrapInner(a.call(this,b))}:function(){var b=n(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=n.isFunction(a);return this.each(function(c){n(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){n.nodeName(this,"body")||n(this).replaceWith(this.childNodes)}).end()}}),n.expr.filters.hidden=function(a){return a.offsetWidth<=0&&a.offsetHeight<=0},n.expr.filters.visible=function(a){return!n.expr.filters.hidden(a)};var wc=/%20/g,xc=/\[\]$/,yc=/\r?\n/g,zc=/^(?:submit|button|image|reset|file)$/i,Ac=/^(?:input|select|textarea|keygen)/i;function Bc(a,b,c,d){var e;if(n.isArray(b))n.each(b,function(b,e){c||xc.test(a)?d(a,e):Bc(a+"["+("object"==typeof e?b:"")+"]",e,c,d)});else if(c||"object"!==n.type(b))d(a,b);else for(e in b)Bc(a+"["+e+"]",b[e],c,d)}n.param=function(a,b){var c,d=[],e=function(a,b){b=n.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=n.ajaxSettings&&n.ajaxSettings.traditional),n.isArray(a)||a.jquery&&!n.isPlainObject(a))n.each(a,function(){e(this.name,this.value)});else for(c in a)Bc(c,a[c],b,e);return d.join("&").replace(wc,"+")},n.fn.extend({serialize:function(){return n.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=n.prop(this,"elements");return a?n.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!n(this).is(":disabled")&&Ac.test(this.nodeName)&&!zc.test(a)&&(this.checked||!T.test(a))}).map(function(a,b){var c=n(this).val();return null==c?null:n.isArray(c)?n.map(c,function(a){return{name:b.name,value:a.replace(yc,"\r\n")}}):{name:b.name,value:c.replace(yc,"\r\n")}}).get()}}),n.ajaxSettings.xhr=function(){try{return new XMLHttpRequest}catch(a){}};var Cc=0,Dc={},Ec={0:200,1223:204},Fc=n.ajaxSettings.xhr();a.ActiveXObject&&n(a).on("unload",function(){for(var a in Dc)Dc[a]()}),k.cors=!!Fc&&"withCredentials"in Fc,k.ajax=Fc=!!Fc,n.ajaxTransport(function(a){var b;return k.cors||Fc&&!a.crossDomain?{send:function(c,d){var e,f=a.xhr(),g=++Cc;if(f.open(a.type,a.url,a.async,a.username,a.password),a.xhrFields)for(e in a.xhrFields)f[e]=a.xhrFields[e];a.mimeType&&f.overrideMimeType&&f.overrideMimeType(a.mimeType),a.crossDomain||c["X-Requested-With"]||(c["X-Requested-With"]="XMLHttpRequest");for(e in c)f.setRequestHeader(e,c[e]);b=function(a){return function(){b&&(delete Dc[g],b=f.onload=f.onerror=null,"abort"===a?f.abort():"error"===a?d(f.status,f.statusText):d(Ec[f.status]||f.status,f.statusText,"string"==typeof f.responseText?{text:f.responseText}:void 0,f.getAllResponseHeaders()))}},f.onload=b(),f.onerror=b("error"),b=Dc[g]=b("abort");try{f.send(a.hasContent&&a.data||null)}catch(h){if(b)throw h}},abort:function(){b&&b()}}:void 0}),n.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(a){return n.globalEval(a),a}}}),n.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET")}),n.ajaxTransport("script",function(a){if(a.crossDomain){var b,c;return{send:function(d,e){b=n("<script>").prop({async:!0,charset:a.scriptCharset,src:a.url}).on("load error",c=function(a){b.remove(),c=null,a&&e("error"===a.type?404:200,a.type)}),l.head.appendChild(b[0])},abort:function(){c&&c()}}}});var Gc=[],Hc=/(=)\?(?=&|$)|\?\?/;n.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=Gc.pop()||n.expando+"_"+cc++;return this[a]=!0,a}}),n.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(Hc.test(b.url)?"url":"string"==typeof b.data&&!(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&Hc.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=n.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Hc,"$1"+e):b.jsonp!==!1&&(b.url+=(dc.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||n.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,Gc.push(e)),g&&n.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),n.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||l;var d=v.exec(a),e=!c&&[];return d?[b.createElement(d[1])]:(d=n.buildFragment([a],b,e),e&&e.length&&n(e).remove(),n.merge([],d.childNodes))};var Ic=n.fn.load;n.fn.load=function(a,b,c){if("string"!=typeof a&&Ic)return Ic.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>=0&&(d=n.trim(a.slice(h)),a=a.slice(0,h)),n.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&n.ajax({url:a,type:e,dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?n("<div>").append(n.parseHTML(a)).find(d):a)}).complete(c&&function(a,b){g.each(c,f||[a.responseText,b,a])}),this},n.expr.filters.animated=function(a){return n.grep(n.timers,function(b){return a===b.elem}).length};var Jc=a.document.documentElement;function Kc(a){return n.isWindow(a)?a:9===a.nodeType&&a.defaultView}n.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=n.css(a,"position"),l=n(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=n.css(a,"top"),i=n.css(a,"left"),j=("absolute"===k||"fixed"===k)&&(f+i).indexOf("auto")>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),n.isFunction(b)&&(b=b.call(a,c,h)),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},n.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){n.offset.setOffset(this,a,b)});var b,c,d=this[0],e={top:0,left:0},f=d&&d.ownerDocument;if(f)return b=f.documentElement,n.contains(b,d)?(typeof d.getBoundingClientRect!==U&&(e=d.getBoundingClientRect()),c=Kc(f),{top:e.top+c.pageYOffset-b.clientTop,left:e.left+c.pageXOffset-b.clientLeft}):e},position:function(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};return"fixed"===n.css(c,"position")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),n.nodeName(a[0],"html")||(d=a.offset()),d.top+=n.css(a[0],"borderTopWidth",!0),d.left+=n.css(a[0],"borderLeftWidth",!0)),{top:b.top-d.top-n.css(c,"marginTop",!0),left:b.left-d.left-n.css(c,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||Jc;while(a&&!n.nodeName(a,"html")&&"static"===n.css(a,"position"))a=a.offsetParent;return a||Jc})}}),n.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(b,c){var d="pageYOffset"===c;n.fn[b]=function(e){return J(this,function(b,e,f){var g=Kc(b);return void 0===f?g?g[c]:b[e]:void(g?g.scrollTo(d?a.pageXOffset:f,d?f:a.pageYOffset):b[e]=f)},b,e,arguments.length,null)}}),n.each(["top","left"],function(a,b){n.cssHooks[b]=yb(k.pixelPosition,function(a,c){return c?(c=xb(a,b),vb.test(c)?n(a).position()[b]+"px":c):void 0})}),n.each({Height:"height",Width:"width"},function(a,b){n.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){n.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return J(this,function(b,c,d){var e;return n.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?n.css(b,c,g):n.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),n.fn.size=function(){return this.length},n.fn.andSelf=n.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return n});var Lc=a.jQuery,Mc=a.$;return n.noConflict=function(b){return a.$===n&&(a.$=Mc),b&&a.jQuery===n&&(a.jQuery=Lc),n},typeof b===U&&(a.jQuery=a.$=n),n});

/*
 * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
 *
 * Uses the built in easing capabilities added In jQuery 1.1
 * to offer multiple easing options
 *
 * TERMS OF USE - jQuery Easing
 * 
 * Open source under the BSD License. 
 * 
 * Copyright å© 2008 George McGinley Smith
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this list of 
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list 
 * of conditions and the following disclaimer in the documentation and/or other materials 
 * provided with the distribution.
 * 
 * Neither the name of the author nor the names of contributors may be used to endorse 
 * or promote products derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 *
*/

// t: current time, b: begInnIng value, c: change In value, d: duration
jQuery.easing['jswing'] = jQuery.easing['swing'];

jQuery.extend( jQuery.easing,
{
	def: 'easeOutQuad',
	swing: function (x, t, b, c, d) {
		//alert(jQuery.easing.default);
		return jQuery.easing[jQuery.easing.def](x, t, b, c, d);
	},
	easeInQuad: function (x, t, b, c, d) {
		return c*(t/=d)*t + b;
	},
	easeOutQuad: function (x, t, b, c, d) {
		return -c *(t/=d)*(t-2) + b;
	},
	easeInOutQuad: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t + b;
		return -c/2 * ((--t)*(t-2) - 1) + b;
	},
	easeInCubic: function (x, t, b, c, d) {
		return c*(t/=d)*t*t + b;
	},
	easeOutCubic: function (x, t, b, c, d) {
		return c*((t=t/d-1)*t*t + 1) + b;
	},
	easeInOutCubic: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t + b;
		return c/2*((t-=2)*t*t + 2) + b;
	},
	easeInQuart: function (x, t, b, c, d) {
		return c*(t/=d)*t*t*t + b;
	},
	easeOutQuart: function (x, t, b, c, d) {
		return -c * ((t=t/d-1)*t*t*t - 1) + b;
	},
	easeInOutQuart: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t*t + b;
		return -c/2 * ((t-=2)*t*t*t - 2) + b;
	},
	easeInQuint: function (x, t, b, c, d) {
		return c*(t/=d)*t*t*t*t + b;
	},
	easeOutQuint: function (x, t, b, c, d) {
		return c*((t=t/d-1)*t*t*t*t + 1) + b;
	},
	easeInOutQuint: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t*t*t + b;
		return c/2*((t-=2)*t*t*t*t + 2) + b;
	},
	easeInSine: function (x, t, b, c, d) {
		return -c * Math.cos(t/d * (Math.PI/2)) + c + b;
	},
	easeOutSine: function (x, t, b, c, d) {
		return c * Math.sin(t/d * (Math.PI/2)) + b;
	},
	easeInOutSine: function (x, t, b, c, d) {
		return -c/2 * (Math.cos(Math.PI*t/d) - 1) + b;
	},
	easeInExpo: function (x, t, b, c, d) {
		return (t==0) ? b : c * Math.pow(2, 10 * (t/d - 1)) + b;
	},
	easeOutExpo: function (x, t, b, c, d) {
		return (t==d) ? b+c : c * (-Math.pow(2, -10 * t/d) + 1) + b;
	},
	easeInOutExpo: function (x, t, b, c, d) {
		if (t==0) return b;
		if (t==d) return b+c;
		if ((t/=d/2) < 1) return c/2 * Math.pow(2, 10 * (t - 1)) + b;
		return c/2 * (-Math.pow(2, -10 * --t) + 2) + b;
	},
	easeInCirc: function (x, t, b, c, d) {
		return -c * (Math.sqrt(1 - (t/=d)*t) - 1) + b;
	},
	easeOutCirc: function (x, t, b, c, d) {
		return c * Math.sqrt(1 - (t=t/d-1)*t) + b;
	},
	easeInOutCirc: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return -c/2 * (Math.sqrt(1 - t*t) - 1) + b;
		return c/2 * (Math.sqrt(1 - (t-=2)*t) + 1) + b;
	},
	easeInElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
	},
	easeOutElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;
	},
	easeInOutElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d/2)==2) return b+c;  if (!p) p=d*(.3*1.5);
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		if (t < 1) return -.5*(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
		return a*Math.pow(2,-10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )*.5 + c + b;
	},
	easeInBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c*(t/=d)*t*((s+1)*t - s) + b;
	},
	easeOutBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
	},
	easeInOutBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158; 
		if ((t/=d/2) < 1) return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
		return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
	},
	easeInBounce: function (x, t, b, c, d) {
		return c - jQuery.easing.easeOutBounce (x, d-t, 0, c, d) + b;
	},
	easeOutBounce: function (x, t, b, c, d) {
		if ((t/=d) < (1/2.75)) {
			return c*(7.5625*t*t) + b;
		} else if (t < (2/2.75)) {
			return c*(7.5625*(t-=(1.5/2.75))*t + .75) + b;
		} else if (t < (2.5/2.75)) {
			return c*(7.5625*(t-=(2.25/2.75))*t + .9375) + b;
		} else {
			return c*(7.5625*(t-=(2.625/2.75))*t + .984375) + b;
		}
	},
	easeInOutBounce: function (x, t, b, c, d) {
		if (t < d/2) return jQuery.easing.easeInBounce (x, t*2, 0, c, d) * .5 + b;
		return jQuery.easing.easeOutBounce (x, t*2-d, 0, c, d) * .5 + c*.5 + b;
	}
});

/*
 *
 * TERMS OF USE - EASING EQUATIONS
 * 
 * Open source under the BSD License. 
 * 
 * Copyright å© 2001 Robert Penner
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this list of 
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list 
 * of conditions and the following disclaimer in the documentation and/or other materials 
 * provided with the distribution.
 * 
 * Neither the name of the author nor the names of contributors may be used to endorse 
 * or promote products derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 *
 */
// Sticky Plugin v1.0.2 for jQuery
// =============
// Author: Anthony Garand
// Improvements by German M. Bravo (Kronuz) and Ruud Kamphuis (ruudk)
// Improvements by Leonardo C. Daronco (daronco)
// Created: 2/14/2011
// Date: 16/04/2015
// Website: http://labs.anthonygarand.com/sticky
// Description: Makes an element on the page stick on the screen as you scroll
//       It will only set the 'top' and 'position' of your element, you
//       might need to adjust the width in some cases.

(function($) {
    var slice = Array.prototype.slice; // save ref to original slice()
    var splice = Array.prototype.splice; // save ref to original slice()

  var defaults = {
      topSpacing: 0,
      bottomSpacing: 0,
      className: 'is-sticky',
      wrapperClassName: 'sticky-wrapper',
      center: false,
      getWidthFrom: '',
      widthFromWrapper: true, // works only when .getWidthFrom is empty
      responsiveWidth: false
    },
    $window = $(window),
    $document = $(document),
    sticked = [],
    windowHeight = $window.height(),
    scroller = function() {
      var scrollTop = $window.scrollTop(),
        documentHeight = $document.height(),
        dwh = documentHeight - windowHeight,
        extra = (scrollTop > dwh) ? dwh - scrollTop : 0;

      for (var i = 0; i < sticked.length; i++) {
        var s = sticked[i],
          elementTop = s.stickyWrapper.offset().top,
          etse = elementTop - s.topSpacing - extra;

        if (scrollTop <= etse) {
          if (s.currentTop !== null) {
            s.stickyElement
              .css({
                'width': '',
                'position': '',
                'top': ''
              });
            s.stickyElement.parent().removeClass(s.className);
            s.stickyElement.trigger('sticky-end', [s]);
            s.currentTop = null;
          }
        }
        else {
          var newTop = documentHeight - s.stickyElement.outerHeight()
            - s.topSpacing - s.bottomSpacing - scrollTop - extra;
          if (newTop < 0) {
            newTop = newTop + s.topSpacing;
          } else {
            newTop = s.topSpacing;
          }
          if (s.currentTop != newTop) {
            var newWidth;
            if ( s.getWidthFrom ) {
                newWidth = $(s.getWidthFrom).width() || null;
            }
            else if(s.widthFromWrapper) {
                newWidth = s.stickyWrapper.width();
            }
            if ( newWidth == null ) {
                newWidth = s.stickyElement.width();
            }
            s.stickyElement
              .css('width', newWidth)
              .css('position', 'fixed')
              .css('top', newTop);

            s.stickyElement.parent().addClass(s.className);

            if (s.currentTop === null) {
              s.stickyElement.trigger('sticky-start', [s]);
            } else {
              // sticky is started but it have to be repositioned
              s.stickyElement.trigger('sticky-update', [s]);
            }

            if (s.currentTop === s.topSpacing && s.currentTop > newTop || s.currentTop === null && newTop < s.topSpacing) {
              // just reached bottom || just started to stick but bottom is already reached
              s.stickyElement.trigger('sticky-bottom-reached', [s]);
            } else if(s.currentTop !== null && newTop === s.topSpacing && s.currentTop < newTop) {
              // sticky is started && sticked at topSpacing && overflowing from top just finished
              s.stickyElement.trigger('sticky-bottom-unreached', [s]);
            }

            s.currentTop = newTop;
          }
        }
      }
    },
    resizer = function() {
      windowHeight = $window.height();

      for (var i = 0; i < sticked.length; i++) {
        var s = sticked[i];
        var newWidth = null;
        if ( s.getWidthFrom ) {
            if ( s.responsiveWidth === true ) {
                newWidth = $(s.getWidthFrom).width();
                newHeight = '32px';
            }
        }
        else if(s.widthFromWrapper) {
            newWidth = s.stickyWrapper.width();
            //alert( s.stickyWrapper.find('.push-menu-top').height());
            if(newWidth < 700){
	            newHeight = s.stickyWrapper.find("header").height() + s.stickyWrapper.find(".slide-menu").height();
	        } else {
		         newHeight = s.stickyWrapper.find("header").height() + s.stickyWrapper.find(".navbar").height();
	        }
        }
        if ( newWidth != null ) {
            s.stickyElement.css('width', newWidth);
            s.stickyElement.css('height', newHeight);
            s.stickyElement.parent().css('height', newHeight);
        }
      }
    },
    methods = {
      init: function(options) {
        var o = $.extend({}, defaults, options);
        return this.each(function() {
          var stickyElement = $(this);

          var stickyId = stickyElement.attr('id');
          var stickyHeight = stickyElement.outerHeight();
          var wrapperId = stickyId ? stickyId + '-' + defaults.wrapperClassName : defaults.wrapperClassName
          var wrapper = $('<div></div>')
            .attr('id', wrapperId)
            .addClass(o.wrapperClassName);

          stickyElement.wrapAll(wrapper);

          var stickyWrapper = stickyElement.parent();

          if (o.center) {
            stickyWrapper.css({width:stickyElement.outerWidth(),marginLeft:"auto",marginRight:"auto"});
          }

          if (stickyElement.css("float") == "right") {
            stickyElement.css({"float":"none"}).parent().css({"float":"right"});
          }

          stickyWrapper.css('height', stickyHeight);

          o.stickyElement = stickyElement;
          o.stickyWrapper = stickyWrapper;
          o.currentTop    = null;

          sticked.push(o);
        });
      },
      update: scroller,
      unstick: function(options) {
        return this.each(function() {
          var that = this;
          var unstickyElement = $(that);

          var removeIdx = -1;
          var i = sticked.length;
          while ( i-- > 0 )
          {
            if (sticked[i].stickyElement.get(0) === that)
            {
                splice.call(sticked,i,1);
                removeIdx = i;
            }
          }
          if(removeIdx != -1)
          {
            unstickyElement.unwrap();
            unstickyElement
              .css({
                'width': '',
                'position': '',
                'top': '',
                'float': ''
              })
            ;
          }
        });
      }
    };

  // should be more efficient than using $window.scroll(scroller) and $window.resize(resizer):
  if (window.addEventListener) {
    window.addEventListener('scroll', scroller, false);
    window.addEventListener('resize', resizer, false);
  } else if (window.attachEvent) {
    window.attachEvent('onscroll', scroller);
    window.attachEvent('onresize', resizer);
  }

  $.fn.sticky = function(method) {
    if (methods[method]) {
      return methods[method].apply(this, slice.call(arguments, 1));
    } else if (typeof method === 'object' || !method ) {
      return methods.init.apply( this, arguments );
    } else {
      $.error('Method ' + method + ' does not exist on jQuery.sticky');
    }
  };

  $.fn.unstick = function(method) {
    if (methods[method]) {
      return methods[method].apply(this, slice.call(arguments, 1));
    } else if (typeof method === 'object' || !method ) {
      return methods.unstick.apply( this, arguments );
    } else {
      $.error('Method ' + method + ' does not exist on jQuery.sticky');
    }

  };
  $(function() {
    setTimeout(scroller, 0);
  });
})(jQuery);

/*
* FlowType.JS v1.1
* Copyright 2013-2014, Simple Focus http://simplefocus.com/
*
* FlowType.JS by Simple Focus (http://simplefocus.com/)
* is licensed under the MIT License. Read a copy of the
* license in the LICENSE.txt file or at
* http://choosealicense.com/licenses/mit
*
* Thanks to Giovanni Difeterici (http://www.gdifeterici.com/)
*/

(function($) {
   $.fn.flowtype = function(options) {

// Establish default settings/variables
// ====================================
      var settings = $.extend({
         maximum   : 9999,
         minimum   : 1,
         maxFont   : 9999,
         minFont   : 1,
         fontRatio : 35
      }, options),

// Do the magic math
// =================
      changes = function(el) {
         var $el = $(el),
            elw = $el.width(),
            width = elw > settings.maximum ? settings.maximum : elw < settings.minimum ? settings.minimum : elw,
            fontBase = width / settings.fontRatio,
            fontSize = fontBase > settings.maxFont ? settings.maxFont : fontBase < settings.minFont ? settings.minFont : fontBase;
         $el.css('font-size', fontSize + 'px');
      };

// Make the magic visible
// ======================
      return this.each(function() {
      // Context for resize callback
         var that = this;
      // Make changes upon resize
         $(window).resize(function(){changes(that);});
      // Set changes on load
         changes(this);
      });
   };
}(jQuery));
/*! http://responsiveslides.com v1.54 by @viljamis */
(function(c,I,B){c.fn.responsiveSlides=function(l){var a=c.extend({auto:!0,speed:500,timeout:4E3,pager:!1,nav:!1,random:!1,pause:!1,pauseControls:!0,prevText:"Previous",nextText:"Next",maxwidth:"",navContainer:"",manualControls:"",namespace:"rslides",before:c.noop,after:c.noop},l);return this.each(function(){B++;var f=c(this),s,r,t,m,p,q,n=0,e=f.children(),C=e.size(),h=parseFloat(a.speed),D=parseFloat(a.timeout),u=parseFloat(a.maxwidth),g=a.namespace,d=g+B,E=g+"_nav "+d+"_nav",v=g+"_here",j=d+"_on",
w=d+"_s",k=c("<ul class='"+g+"_tabs "+d+"_tabs' />"),x={"float":"left",position:"relative",opacity:1,zIndex:2},y={"float":"none",position:"absolute",opacity:0,zIndex:1},F=function(){var b=(document.body||document.documentElement).style,a="transition";if("string"===typeof b[a])return!0;s=["Moz","Webkit","Khtml","O","ms"];var a=a.charAt(0).toUpperCase()+a.substr(1),c;for(c=0;c<s.length;c++)if("string"===typeof b[s[c]+a])return!0;return!1}(),z=function(b){a.before(b);F?(e.removeClass(j).css(y).eq(b).addClass(j).css(x),
n=b,setTimeout(function(){a.after(b)},h)):e.stop().fadeOut(h,function(){c(this).removeClass(j).css(y).css("opacity",1)}).eq(b).fadeIn(h,function(){c(this).addClass(j).css(x);a.after(b);n=b})};a.random&&(e.sort(function(){return Math.round(Math.random())-0.5}),f.empty().append(e));e.each(function(a){this.id=w+a});f.addClass(g+" "+d);l&&l.maxwidth&&f.css("max-width",u);e.hide().css(y).eq(0).addClass(j).css(x).show();F&&e.show().css({"-webkit-transition":"opacity "+h+"ms ease-in-out","-moz-transition":"opacity "+
h+"ms ease-in-out","-o-transition":"opacity "+h+"ms ease-in-out",transition:"opacity "+h+"ms ease-in-out"});if(1<e.size()){if(D<h+100)return;if(a.pager&&!a.manualControls){var A=[];e.each(function(a){a+=1;A+="<li><a href='#' class='"+w+a+"'>"+a+"</a></li>"});k.append(A);l.navContainer?c(a.navContainer).append(k):f.after(k)}a.manualControls&&(k=c(a.manualControls),k.addClass(g+"_tabs "+d+"_tabs"));(a.pager||a.manualControls)&&k.find("li").each(function(a){c(this).addClass(w+(a+1))});if(a.pager||a.manualControls)q=
k.find("a"),r=function(a){q.closest("li").removeClass(v).eq(a).addClass(v)};a.auto&&(t=function(){p=setInterval(function(){e.stop(!0,!0);var b=n+1<C?n+1:0;(a.pager||a.manualControls)&&r(b);z(b)},D)},t());m=function(){a.auto&&(clearInterval(p),t())};a.pause&&f.hover(function(){clearInterval(p)},function(){m()});if(a.pager||a.manualControls)q.bind("click",function(b){b.preventDefault();a.pauseControls||m();b=q.index(this);n===b||c("."+j).queue("fx").length||(r(b),z(b))}).eq(0).closest("li").addClass(v),
a.pauseControls&&q.hover(function(){clearInterval(p)},function(){m()});if(a.nav){g="<a href='#' class='"+E+" prev'>"+a.prevText+"</a><a href='#' class='"+E+" next'>"+a.nextText+"</a>";l.navContainer?c(a.navContainer).append(g):f.after(g);var d=c("."+d+"_nav"),G=d.filter(".prev");d.bind("click",function(b){b.preventDefault();b=c("."+j);if(!b.queue("fx").length){var d=e.index(b);b=d-1;d=d+1<C?n+1:0;z(c(this)[0]===G[0]?b:d);if(a.pager||a.manualControls)r(c(this)[0]===G[0]?b:d);a.pauseControls||m()}});
a.pauseControls&&d.hover(function(){clearInterval(p)},function(){m()})}}if("undefined"===typeof document.body.style.maxWidth&&l.maxwidth){var H=function(){f.css("width","100%");f.width()>u&&f.css("width",u)};H();c(I).bind("resize",function(){H()})}})}})(jQuery,this,0);

var hasClass, addClass, removeClass;

function classReg( className ) {
	'use strict';
	return new RegExp('(^|\\s+)' + className + '(\\s+|$)');
}

function toggleClass( elem, c ) {
	'use strict';
	var fn = hasClass( elem, c ) ? removeClass : addClass;
	fn( elem, c );
}

$(document).ready(function ($) {
  'use strict';
	if(typeof $ !== 'undefined'){
		$(function() {
			$('.gallery').responsiveSlides({
		        auto: true,
		        pagination: false,
		        pager: false,
		        nav: false,
		        fade: 500,
		        maxwidth: 1200,
		        manualControls: '#slider3-pager',
		        namespace: 'centered-btns',
		        random: true
			});
		});
		
		/* $('nav .layout .navlist').on('click', function(){
			$(this).parent().toggleClass( 'open' );
			$('.nav-item').animate({
								visibility: 'visible',
								height: '40px'
							}, 500, function(){
								
							});
						
		}); */
		
		//make sticky greybox and nav
		$('#sticky').sticky({topSpacing:0});
		
		
		//makes the dropdown for time selectors on the timeline page
		$('#time-selector #time-span').on('click', function(){
			var NoUnits = $(this).find('#time-units li').length;
			var dropdownHeight = (NoUnits * 30)-13;
			if($('#time-units').height() === 0){
				$('#time-units li').css('border-bottom', '1px solid #ccc');
				$(this).find('#time-units').animate({
					height: dropdownHeight,
				}, 500);
			} else {
				$('#time-units li').css('border-bottom', '0');
				$(this).find('#time-units').animate({
					height: 0,
				}, 500);	
			}
		});
	    $('#time-selector #time-units .time a').on('click', function (event) {
		    event.preventDefault();
		    var loc_to_go = $(this).text();
			var index = $('.time').index($(this).parent());
			var targetPosition = $($('#'+loc_to_go)).offset().top-(200);
	        $('html,body').animate({ scrollTop: targetPosition}, 'slow');
	    });

 
		//build the next previous navigation for the timeline details pages
		if($('#timeline-detail').length > 0){
			var currentPath = (window.location.pathname);
			var pageName = currentPath.substring(location.pathname.lastIndexOf('/') + 1);
			var dataArray = $('#timeline-detail').attr('data-timeline_section');
			var currentArray = window.eval(dataArray);
			var arrayLength = currentArray.length;
			var prev,
				next;
			for (var i = 0; i < arrayLength; i++) {
			    if(pageName === (currentArray[i])){
				    prev = (currentArray[i-1]);
				    next = (currentArray[i+1]);
				}
			}
			if(typeof prev !== 'undefined'){
				$('#nav-left a').attr('href', prev);
			} else {
				$('#nav-left img').hide();
				$('#nav-left').html('&nbsp;');
			}
			if(typeof next !== 'undefined'){
				$('#nav-right a').attr('href', next);
			} else {
				$('#nav-right img').hide();
				$('#nav-right').html('&nbsp;');
			}
			
		}
		
		//control font-size in image caption
		if($('.caption').length > 0){
			$('.caption').flowtype({
				minFont : 12,
				maxFont : 60,
				fontRatio : 10
			});
		}
 /**
 * The nav stuff
 */
 
		// classList support for class management
		// altho to be fair, the api sucks because it won't accept multiple classes at once		
		if ( 'classList' in document.documentElement ) {
		  hasClass = function( elem, c ) {
		    return elem.classList.contains( c );
		  };
		  addClass = function( elem, c ) {
		    elem.classList.add( c );
		  };
		  removeClass = function( elem, c ) {
		    elem.classList.remove( c );
		  };
		}
		else {
		  hasClass = function( elem, c ) {
		    return classReg( c ).test( elem.className );
		  };
		  addClass = function( elem, c ) {
		    if ( !hasClass( elem, c ) ) {
		      elem.className = elem.className + ' ' + c;
		    }
		  };
		  removeClass = function( elem, c ) {
		    elem.className = elem.className.replace( classReg( c ), ' ' );
		  };
		}
		
		var classie = {
		  // full names
		  hasClass: hasClass,
		  addClass: addClass,
		  removeClass: removeClass,
		  toggleClass: toggleClass,
		  // short names
		  has: hasClass,
		  add: addClass,
		  remove: removeClass,
		  toggle: toggleClass
		};
		
		// transport
		//if ( typeof define === 'function' && define.amd ) {
		  // AMD
		//  define( classie );
		//} else {
		  // browser global
		  window.classie = classie;
		//}

 
	 
		var body = document.body,
			mask = document.createElement('div'),
			togglePushTop = document.querySelector( '.toggle-push-top' ),
			toggleSlideBottom = document.querySelector( '.toggle-slide-bottom' ),
			slideMenuTop = document.querySelector( '.slide-push-top' ),
			slideMenuBottom = document.querySelector( '.slide-menu-bottom' ),
			activeNav
		;
		mask.className = 'mask';
	
		/* slide menu top */
		if(togglePushTop){
			togglePushTop.addEventListener( 'click', function(){
				classie.add( body, 'pmt-open' );
				document.body.appendChild(mask);
				activeNav = 'pmt-open';
			} );
		}
		
		if(toggleSlideBottom){
		/* slide menu bottom */
			toggleSlideBottom.addEventListener( 'click', function(){
				classie.add( body, 'smb-open' );
				document.body.appendChild(mask);
				activeNav = 'smb-open';
				$('.close-menu').toggle();
			} );
		}
		
		/* hide active menu if mask is clicked */
		mask.addEventListener( 'click', function(){
			classie.remove( body, activeNav );
			activeNav = '';
			document.body.removeChild(mask);
		} );
	
		/* hide active menu if close menu button is clicked */
		[].slice.call(document.querySelectorAll('.close-menu')).forEach(function(el,i){
			el.addEventListener( 'click', function(){
				$('.close-menu').toggle();
				classie.remove( body, activeNav );
				activeNav = '';
				document.body.removeChild(mask);
			} );
		});

	} else {
		alert('jQuery Library Not Loaded');
	}
  
 }); //on load

