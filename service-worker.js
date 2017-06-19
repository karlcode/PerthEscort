"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["index.html","b8d6b58ce2fcbd34eb5278cc92233e47"],["static/css/main.e9e46855.css","3c9939426e7bf45625af13d205add9a1"],["static/js/main.9021a1c7.js","3f37994148b872aa65cfb83ad3527133"],["static/media/home-background.4db8c299.jpg","4db8c2998cb3948fb213a233e19178a9"],["static/media/josh-bed.aacb120e.jpg","aacb120e41ddd9713a31365250e6e70a"],["static/media/josh-portrait-shirtless.7323ef74.png","7323ef74ee4a638d13320220e5f1c06d"],["static/media/josh-runway-suit.8b584d81.jpg","8b584d8137bb014469d7a371f75b5d06"],["static/media/slick.b7c9e1e4.woff","b7c9e1e479de3b53f1e4e30ebac2403a"],["static/media/slick.ced611da.eot","ced611daf7709cc778da928fec876475"],["static/media/slick.d41f55a7.ttf","d41f55a78e6f49a5512878df1737e58a"],["static/media/slick.f97e3bbf.svg","f97e3bbf73254b0112091d0192f17aec"],["static/media/slide1.bb11ee2c.jpg","bb11ee2ce44467127c1bc0608df96d97"],["static/media/slide2.74953332.jpg","74953332bccd6a3937d70d8a8cc58194"],["static/media/slide3.ae3c9ace.jpg","ae3c9ace587b8b4b802eb8a45af07d3a"],["static/media/slide4.7d4cafb6.jpg","7d4cafb6413d999518a448f8f44fea8c"],["static/media/slide5.625511b1.jpg","625511b1690e30f5b52a048ff5965236"],["static/media/slide6.e7bea23e.jpg","e7bea23e43018f19fd5bef95d361a39b"],["static/media/slide7.d4f1501c.jpg","d4f1501c4a4d400fa9443e3de29a684b"],["static/media/slide8.fffeb896.jpg","fffeb89651090a05906b5b6276592e84"],["static/media/world-map.0edabb31.jpg","0edabb31e3b2cd917042e60cbefed807"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,a,n){var r=new URL(e);return n&&r.pathname.match(n)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),r=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),r]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var n=new Request(a,{credentials:"same-origin"});return fetch(n).then(function(t){if(!t.ok)throw new Error("Request for "+a+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(a,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!t.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);t=urlsToCacheKeys.has(a);t||(a=addDirectoryIndex(a,"index.html"),t=urlsToCacheKeys.has(a));!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(a=new URL("/PerthEscort/index.html",self.location).toString(),t=urlsToCacheKeys.has(a)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});