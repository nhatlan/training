/*! scripts/tumblr/utils/exceptions.js */
(function(r,I){var f=r.document;var z=r.encodeURIComponent;var x=r.navigator;var h=r.parseInt;var o=r.performance;var B=r.window;var A=r.Date;var i=r.Error;var n=r.Math;var F=r.XMLHttpRequest;var H=[];var p=[];var a={};var c=false;function M(P,O,Q,N){P.addEventListener?P.addEventListener(O,Q,!!N):P.attachEvent&&P.attachEvent("on"+O,Q,!!N)}function g(O,N){return(typeof O==="string")&&(O.length>N)?[O.slice(0,N/2),"...",O.length-N,"...",O.slice(-N/2)].join(""):O}function C(R,P){var S=[];for(var Q in R){if(!R.hasOwnProperty(Q)){continue}var O=P?(P+"["+Q+"]"):Q,N=R[Q];S.push(typeof N==="object"?C(N,O):z(O)+"="+z(N))}return S.join("&")}function m(N){for(var O in N){if(N.hasOwnProperty(O)){return false}}return true}var u=(function(N){return(N&&N.keys)||function(R){var O=[];var Q=N.prototype.hasOwnProperty;for(var P in R){Q.call(R,P)&&O.push(P)}return O}})(r.Object);var d=function(O,R,P){if(typeof R!=="function"){return}var N=(O&&O.length)>>>0;for(var Q=0;Q<N;Q++){R.call(P,O[Q],Q,O)}};var L=(function(N){return(N&&N.stringify&&function(P){try{return N.stringify(P)}catch(O){k(O);return'"FAILED_JSON_STRINGIFY"'}})||function(){return'"NO_JSON_STRINGIFY"'}})(r.JSON);var s=(function(N){return(N&&N.Flags)||(function(){k(new i("Missing Tumblr.Flags in exceptions.js"));var O={enable_js_errors_log:true,enable_js_ephemeral_log:true};function P(Q,R){return(typeof Q==="function")?Q.call(this,R):Q}return function(R){var Q=!!(O[R]);return function S(U,V){var T=P.call(this,(Q?U:V),Q);return(T!==void 0)?T:S}}})()})(r.Tumblr);function k(O,N){if(typeof N==="number"&&n.random()>N){return}if(O instanceof i){O.url||(O.url="//www.tumblr.com/");l(O.message,O.url,O.ln,O.col,O)}else{H.push(L(O))}}var E=/https?:\/\//;var G=/https?:\/\/[^/]*tumblr[^/]*/;function l(R,O,Q,N,P){try{O=g(O,300)||"";if(E.test(O)&&!G.test(O)){return}P=L(g(P&&P.stack,1000)||"");if(E.test(P)&&!G.test(P)){return}p.push({path:(f.location||{}).pathname||"NO_LOCATION_OR_PATHNAME",msg:g(R,200)||"",url:O,ln:h(Q,10)||-1,col:h(N,10)||-1,err:P,group:s("js_errors_a")("A",s("js_errors_b")("B","*"))})}catch(P){}}function b(){return((f.head||{}).innerHTML||"").indexOf("#missinge_button")!==-1}var v=k.debugDump=function(){var N=[];d(f.getElementsByTagName("script"),function(O){N.push(O.src)});return{timestamp:+new A(),path:(f.location||{}).href||"NO_HREF",lang:(x||{}).userLanguage||(x||{}).language||"NO_LANG",referrer:f.referrer||"NO_REFERRER",ua:(x||{}).userAgent||"NO_UA",timing:(o||{}).timing||"NO_TIMING",scripts:N,globals:u(r),cookie:f.cookie,ephemeral:H,errors:p,document:(f.documentElement||{}).innerHTML||"NO_DOCUMENT"}};function q(N){var O=v();O.name=N;return L(O)}function w(Q){var N=Q.length,O,P;while(N>0){P=n.floor(n.random()*N);N--;O=Q[N];Q[N]=Q[P];Q[P]=O}return Q}function e(S){if(!o||!o.getEntriesByType){return S}var O=o.getEntriesByType("resource");var T={};d(O,function(V){var U=(V.name.match(/\/\/([^/]+)/)||"")[1];if(U.indexOf(".tumblr.")===-1){return}if(!T[V.initiatorType]){T[V.initiatorType]=[]}var W=U.split(".")[0];T[V.initiatorType].push({name:V.name.split(U)[1],duration:V.duration,bucket:W})});a.entries||(a.entries=[]);var N=[{type:"img",num:10},{type:"link",num:2},{type:"script",num:2},{type:"css",num:2}];for(var R=0;R<N.length;++R){var Q=N[R];var P=T[Q.type];if(!P){continue}if(Q.num<P.length){w(P)}while(Q.num&&P.length){a.entries.push(P.pop());--Q.num}}if(u(a)){((S||(S={})).perf=a);a.timing=o.timing;a.memory=o.memory;a.navigation=o.navigation}return S}function K(){try{if(!c){p.length=0;k(new i("PAGE_DID_NOT_LOAD"))}var N;!b()&&s("enable_js_errors_log")(function(){p.length&&((N||(N={})).errors=p)});s("js_performance_logging")(function(){try{N=e(N)}catch(R){}});s("enable_js_ephemeral_log")(function(){H.length&&((N||(N={})).ephemeral=H)});s("js_debugger_1")(function(){(N||(N={})).ephemeral=[q("js_debugger_1")]});s("js_debugger_2")(function(){(N||(N={})).ephemeral=[q("js_debugger_2")]});if(!N){return}var P=JSON.stringify({form_key:(f.getElementById("tumblr_form_key")||f.body).getAttribute("content"),log:N});var Q=new F();Q.open("POST","/svc/log/capture/exceptions",false);Q.setRequestHeader("Content-type","text/plain");Q.onreadystatechange=function(){if(Q.readyState!==4){return}p.length=H.length=0};Q.send(P)}catch(O){if(!r.jQuery){return}(N||(N={})).errors||(N.errors=p);r.jQuery.ajax({async:false,dataType:"json",contentType:"text/plain",type:"POST",data:{form_key:r.jQuery("#tumblr_form_key").attr("content"),log:N},url:"/svc/log/capture/exceptions",with_form_key:true});k(O)}}(function J(){M(B,"beforeunload",K);B.onerror=l})();(I.Utils||(I.Utils={})).exceptions=k;function j(){a.page_info={};a.page_info.path=f.location.pathname||"n/a"}function y(){var N=new A().getTime();var O=N-o.timing.navigationStart;a.page_load_time=O}function t(){if(!o||!o.timing){return}try{j();y()}catch(N){}}function D(){c=true;t()}M(B,"load",D)})(this,this.Tumblr||(this.Tumblr={}));