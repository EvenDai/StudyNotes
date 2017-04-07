(function(AD_CONFIG, LINKS, RT_CONFIG){
/*! Copyright 2015 Baidu Inc. All Rights Reserved. */
"";
"";
var baidu={version:"1.5.0"};baidu.guid="$BAIDU$";window[baidu.guid]=window[baidu.guid]||{};baidu.sio=baidu.sio||{};baidu.sio._createScriptTag=function(b,a,c){b.setAttribute("type","text/javascript");c&&b.setAttribute("charset",c);b.setAttribute("src",a);document.getElementsByTagName("head")[0].appendChild(b)};baidu.sio._removeScriptTag=function(b){if(b.clearAttributes){b.clearAttributes()}else{for(var a in b){if(b.hasOwnProperty(a)){delete b[a]}}}if(b&&b.parentNode){b.parentNode.removeChild(b)}b=null};baidu.sio.callByBrowser=function(a,g,i){var d=document.createElement("SCRIPT"),e=0,j=i||{},c=j.charset,h=g||function(){},f=j.timeOut||0,b;d.onload=d.onreadystatechange=function(){if(e){return}var k=d.readyState;if("undefined"==typeof k||k=="loaded"||k=="complete"){e=1;try{h();clearTimeout(b)
}finally{d.onload=d.onreadystatechange=null;baidu.sio._removeScriptTag(d)}}};if(f){b=setTimeout(function(){d.onload=d.onreadystatechange=null;baidu.sio._removeScriptTag(d);j.onfailure&&j.onfailure()},f)}baidu.sio._createScriptTag(d,a,c)};baidu.array=baidu.array||{};baidu.each=baidu.array.forEach=baidu.array.each=function(g,e,b){var d,f,c,a=g.length;if("function"==typeof e){for(c=0;c<a;c++){f=g[c];d=e.call(b||g,f,c);if(d===false){break}}}return g};baidu.array.filter=function(h,f,d){var c=[],b=0,a=h.length,g,e;if("function"==typeof f){for(e=0;e<a;e++){g=h[e];if(true===f.call(d||h,g,e)){c[b++]=g}}}return c};baidu.lang=baidu.lang||{};baidu.lang.inherits=function(g,e,d){var c,f,a=g.prototype,b=new Function();b.prototype=e.prototype;f=g.prototype=new b();for(c in a){f[c]=a[c]}g.prototype.constructor=g;
g.superClass=e.prototype;if("string"==typeof d){f._className=d}};baidu.inherits=baidu.lang.inherits;;
var l=l||{};l.global=this;l.o=!0;l.r="en";l.p=!0;l.m=function(a){return void 0!==a};l.l=function(a,b,c){a=a.split(".");c=c||l.global;a[0]in c||!c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)!a.length&&l.m(b)?c[d]=b:c=c[d]?c[d]:c[d]={}};l.u=function(a,b,c){l.l(a,b,c)};l.t=function(a,b,c){a[b]=c};l.w=function(){return!1};l.D=function(){};l.v=function(){};window.$ECMA$=window.$ECMA$||{};window.$ECMA$._instances=window.$ECMA$._instances||{};(function(){var a=window.$ECMA$;a.f=a.f||1;return function(){return"ECMA__"+(a.f++).toString(36)}})();function q(a,b){for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c]);return a};navigator.userAgent.toLowerCase().indexOf("phantomjs");function r(a){a=a.split(".");for(var b=window,c;c=a.shift();)if(null!=b[c])b=b[c];else return null;return b}function s(a,b){var c=a.split("."),d=window;c[0]in d||!d.execScript||d.execScript("var "+c[0]);for(var f;c.length&&(f=c.shift());)c.length||void 0===b?d=d[f]?d[f]:d[f]={}:d[f]=b}var u=RT_CONFIG.HOSTMAP;u||(u=RT_CONFIG.HOSTMAP={});"object"!==typeof RT_CONFIG||RT_CONFIG.HOST||(RT_CONFIG.HOST=function(a){return RT_CONFIG.HOSTMAP[a]||"http://"+a});
function v(a){var b=r("bds.ready");"function"===typeof b&&b(function(){a()})}function w(a){var b=r("bds.comm.registerUnloadHandler");"function"===typeof b?b(a):v(function(){w(a)})};var x,y;if(y=/msie (\d+\.\d)/i.exec(navigator.userAgent))var z=document.documentMode||+y[1];y=/firefox\/(\d+\.\d)/i.exec(navigator.userAgent);if(y=/opera\/(\d+\.\d)/i.exec(navigator.userAgent))var A=+y[1];var B=navigator.userAgent,C=B.match(/(\d+\.\d)?(?:\.\d)?\s+safari\/?(\d+\.\d+)?/i);C&&!/chrome/i.test(B)&&(x=+(C[1]||C[2]));y=/UCBrowser\/(\d+\.\d)/i.exec(navigator.userAgent);(function(){function a(a,b){for(var c=0,f=a.length,d={};c<f;c++)d[a[c]]=b[a[c]],delete b[a[c]];return d}function b(b,c,f){f=q({},f);var d=a(n[c],f),g=[],m;for(m in d)d.hasOwnProperty(m)&&g.push(d[m]);d=document.createEvent(c);g.unshift(b);"KeyEvents"===c?d.initKeyEvent.apply(d,g):"MouseEvents"===c?d.initMouseEvent.apply(d,g):"UIEvents"===c?d.initUIEvent.apply(d,g):d.initEvent.apply(d,g);q(d,f);return d}function c(a){var b;document.createEventObject&&(b=document.createEventObject(),q(b,a));return b}
var d={A:1,C:1,B:1},f={click:1,s:1,F:1,H:1,K:1,J:1,I:1},g={abort:1,blur:1,k:1,error:1,focus:1,load:z?0:1,reset:1,resize:1,scroll:1,select:1,submit:1,L:z?0:1},m={scroll:1,resize:1,reset:1,submit:1,k:1,select:1,error:1,abort:1},n={KeyEvents:"bubbles cancelable view ctrlKey altKey shiftKey metaKey keyCode charCode".split(" "),MouseEvents:"bubbles cancelable view detail screenX screenY clientX clientY ctrlKey altKey shiftKey metaKey button relatedTarget".split(" "),HTMLEvents:["bubbles","cancelable"],
UIEvents:["bubbles","cancelable","view","detail"],Events:["bubbles","cancelable"]};q(m,d);q(m,f);return function(t,p,e){p=p.replace(/^on/i,"");t=D.g(t);e=q({bubbles:!0,cancelable:!0,view:window,detail:1,screenX:0,screenY:0,clientX:0,clientY:0,ctrlKey:!1,altKey:!1,shiftKey:!1,metaKey:!1,keyCode:0,charCode:0,button:0,relatedTarget:null},e);if(d[p]){var h=p;e=a(n.KeyEvents,e);var k;if(document.createEvent)try{k=b(h,"KeyEvents",e)}catch(V){try{k=b(h,"Events",e)}catch(W){k=b(h,"UIEvents",e)}}else e.keyCode=
0<e.charCode?e.charCode:e.keyCode,k=c(e);e=k}else if(f[p])k=p,e=a(n.MouseEvents,e),document.createEvent?(h=b(k,"MouseEvents",e),e.relatedTarget&&!h.relatedTarget&&("mouseout"===k.toLowerCase()?h.toElement=e.relatedTarget:"mouseover"===k.toLowerCase()&&(h.fromElement=e.relatedTarget))):(k=e,0===e.button?h=1:1===e.button?h=4:(h=e.button,h="[object Number]"===Object.prototype.toString.call(h)&&isFinite(h)?e.button:0),k.button=h,h=c(e)),e=h;else if(g[p]){k=p;e.bubbles=m.hasOwnProperty(k);e=a(n.HTMLEvents,
e);if(document.createEvent)try{h=b(k,"HTMLEvents",e)}catch(X){try{h=b(k,"UIEvents",e)}catch(Y){h=b(k,"Events",e)}}else h=c(e);e=h}else throw Error(p+" is not support!");e&&(t.dispatchEvent?t.dispatchEvent(e):t.fireEvent&&t.fireEvent("on"+p,e))}})();function E(a){this.a=a||document;F(this)}E.prototype.g=function(a){return"[object String]"===Object.prototype.toString.call(a)?this.a.getElementById(a):a&&a.nodeName&&(1===a.nodeType||9===a.nodeType)?a:null};E.prototype.b=null;E.prototype.c=null;function G(a){var b=D;b.b=a;var c=b.a.head||b.a.getElementsByTagName("head")[0]||b.a.body;c.insertBefore(a,c.firstChild);b.b=null}
function H(){var a=D;if(a.b)return a.b;if(a.c&&"interactive"===a.c.readyState)return a.c;for(var b=a.a.getElementsByTagName("script"),c=b.length;c--;){var d=b[c];if("interactive"===d.readyState)return a.c=d}return null}E.prototype.insertBefore=function(a,b){var c;a=this.g(a);b=this.g(b);(c=b.parentNode)&&c.insertBefore(a,b);return a};
function F(a){a.n||(a.n=function(){function b(){if(!b.isReady){b.isReady=!0;for(var a=0,c=d.length;a<c;a++)d[a]()}}var c=!1,d=[];(function(){if(!c){c=!0;var d=a.a,g=window;if(z&&g===top)(function(){if(!b.isReady){try{d.documentElement.doScroll("left")}catch(a){setTimeout(arguments.callee,0);return}b()}})();else if(d.addEventListener){var m=A?function(){if(!b.isReady){for(var a=0;a<d.styleSheets.length;a++)if(d.styleSheets[a].disabled){setTimeout(arguments.callee,0);return}b()}}:b;d.addEventListener("DOMContentLoaded",
m,!1);w(function(){d.removeEventListener("DOMContentLoaded",m,!1)})}else if(x){var n;(function(){if(!b.isReady)if("loaded"!==d.readyState&&"complete"!==d.readyState)setTimeout(arguments.callee,0);else{if(void 0===n){n=0;var a=d.getElementsByTagName("style"),c=d.getElementsByTagName("link");a&&(n+=a.length);if(c)for(var a=0,e=c.length;a<e;a++)"stylesheet"===c[a].getAttribute("rel")&&n++}d.styleSheets.length!==n?setTimeout(arguments.callee,0):b()}})()}g.attachEvent?(g.attachEvent("onload",b),w(function(){g.detachEvent("onload",
b)})):g.addEventListener&&(g.addEventListener("load",b,!1),w(function(){g.removeEventListener("load",b,!1)}))}})();return function(a){b.isReady?a():d[d.length]=a}}())}var D=new E;var I={},J=[];function K(a,b){function c(){d++;d>=f&&b.apply(null,L(a))}"string"===typeof a&&(a=[a]);for(var d=0,f=a.length,g=0;g<f;g++)M(a[g],c)}function L(a){for(var b=[],c=0;c<a.length;c++)b.push(I[a[c]]||null);return b}
function M(a,b){function c(){var a=d.readyState;if("undefined"===typeof a||/^(?:loaded|complete)$/.test(a))if(a=d.src,d=d.onload=d.onreadystatechange=null,I[a])b(I[a]);else{var c=J.pop();c&&(I[a]=c,b(c))}}if(I[a])b(I[a]);else{var d=N();d.src=a;document.addEventListener?d.onload=c:d.readyState&&(d.onreadystatechange=c);G(d)}}function N(){var a=document.createElement("script");a.type="text/javascript";a.charset="utf-8";a.async=!0;return a}
window.ECMA_define=window.ECMA_define||function(a){var b=H();b?(a=a(),(b=b.src)?I[b]=a:J.push(a)):(b=a(),J.push(b))};window.ECMA_require=window.ECMA_require||function(a,b){K(a,b)};function O(){this.d={imageplus:[{url:"http://ecma.bdimg.com/public03/imageplus/loader.js"},{url:"http://bs.baidu.com/public03/imageplus/loader-dev.js",mode:"development",cacheTime:1},{url:"http://bs.baidu.com/public03/imageplus/loader-test.js",mode:"test",cacheTime:1}],imageright:[{url:"http://ecma.bdimg.com/public03/imageright/loader.js"},{url:"http://bs.baidu.com/public03/imageright/loader-dev.js",mode:"development"}]};this.h={};var a=location.href.match(/[\?&]ecomMode=([^$&#]+)/);this.j=a?a[1]:
"production"}function P(a,b){var c=baidu.array.filter(b,function(b){return(b.mode||"production")===a.j});if(!c.length)return null;var d=100*Math.random(),f=0,g;baidu.array.each(c,function(a){f+=a.rate?parseInt(a.rate,10):100;if(d<f)return g=a,!1});return g}
function Q(a,b,c){var d=b.toLowerCase(),f=a.d[d];if(a.h[d])c&&c(b);else{if(f.length&&(f=P(a,f),!f)){c&&c();return}var g=f?f.url:"",m=f.cacheTime||864E5;g&&(a.h[d]=!0,baidu.sio.callByBrowser(g+"?cache="+Math.ceil(new Date/m),function(){c&&c(b)},{charset:f.charset||"utf-8",onfailure:function(){c&&c()}}))}}O.prototype.load=function(a,b){a="string"===typeof a?a.split(","):a;var c=a.length;if(c){var d=0,f=[],g=function(a){d++;a&&f.push(a);d<c||b&&b(f)},m=this;baidu.array.each(a,function(a){Q(m,a,g)})}};
var R=new O;s("ecom.ma.adLoader",R);function S(){O.call(this);this.d={article:[{url:"http://ecmb.bdimg.com/public03/imageplus/jingyan_loader.js"},{url:"http://ecmb.bdimg.com/public03/imageplus/jingyan_loader-dev.js",mode:"development",cacheTime:1}],album:[{url:"http://ecmb.bdimg.com/public03/imageplus/jingyan_album_loader.js"},{url:"http://ecmb.bdimg.com/public03/imageplus/jingyan_album_loader-dev.js",mode:"development",cacheTime:1}]}}baidu.inherits(S,O);var U=new S;s("ecom.ma.expLoader",U);

})(/** AD_CONFIG */{}, /** LINKS */[], /** RT_CONFIG */{});