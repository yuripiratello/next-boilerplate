if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return n[e]||(s=new Promise((async s=>{if("document"in self){const n=document.createElement("script");n.src=e,document.head.appendChild(n),n.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!n[e])throw new Error(`Module ${e} didn’t register its module`);return n[e]}))},s=(s,n)=>{Promise.all(s.map(e)).then((e=>n(1===e.length?e[0]:e)))},n={require:Promise.resolve(s)};self.define=(s,r,i)=>{n[s]||(n[s]=Promise.resolve().then((()=>{let n={};const t={uri:location.origin+s.slice(1)};return Promise.all(r.map((s=>{switch(s){case"exports":return n;case"module":return t;default:return e(s)}}))).then((e=>{const s=i(...e);return n.default||(n.default=s),n}))})))}}define("./sw.js",["./workbox-8778d57b"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/cCTTOq8VQwbzLzfS--yqW/_buildManifest.js",revision:"cCTTOq8VQwbzLzfS--yqW"},{url:"/_next/static/cCTTOq8VQwbzLzfS--yqW/_ssgManifest.js",revision:"cCTTOq8VQwbzLzfS--yqW"},{url:"/_next/static/chunks/f6078781a05fe1bcb0902d23dbbb2662c8d200b3.5858c56812fd1f98de2b.js",revision:"cCTTOq8VQwbzLzfS--yqW"},{url:"/_next/static/chunks/framework.abffcf18e526b7c0dbcd.js",revision:"cCTTOq8VQwbzLzfS--yqW"},{url:"/_next/static/chunks/main-839b01117387286300b3.js",revision:"cCTTOq8VQwbzLzfS--yqW"},{url:"/_next/static/chunks/pages/_app-b0535512c45e739608aa.js",revision:"cCTTOq8VQwbzLzfS--yqW"},{url:"/_next/static/chunks/pages/_error-e2ffa4674eea62b50f3f.js",revision:"cCTTOq8VQwbzLzfS--yqW"},{url:"/_next/static/chunks/pages/index-f3b8ccb635c29b8499a3.js",revision:"cCTTOq8VQwbzLzfS--yqW"},{url:"/_next/static/chunks/polyfills-f7c7888febe67bef43b4.js",revision:"cCTTOq8VQwbzLzfS--yqW"},{url:"/_next/static/chunks/webpack-50bee04d1dc61f8adf5b.js",revision:"cCTTOq8VQwbzLzfS--yqW"},{url:"/favicon.ico",revision:"21b739d43fcb9bbb83d8541fe4fe88fa"},{url:"/img/hero-illustration.svg",revision:"363cd83275a61b2a06008efc5144fcf2"},{url:"/img/icon-512.png",revision:"f1d74b43a3832183202483a40d9e9d84"},{url:"/img/logo.svg",revision:"37ec18e21a0e84e78077565dd634314d"},{url:"/manifest.json",revision:"6acb5df25b4172d84bfa0d09c3611aa3"},{url:"/vercel.svg",revision:"4b4f1876502eb6721764637fe5c41702"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[new e.ExpirationPlugin({maxEntries:1,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/api\/.*$/i,new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/.*/i,new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET")}));
