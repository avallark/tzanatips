/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("workbox-v4.3.1/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "workbox-v4.3.1"});

workbox.core.setCacheNameDetails({prefix: "emergency-site"});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "index.html",
    "revision": "6fc70d3cdd07cd5d7539caffaa9d868e"
  },
  {
    "url": "posts/2020-03-19-about-this-template/index.html",
    "revision": "1c1fcaa7ec4d5e142c4309e4a5d85eff"
  },
  {
    "url": "posts/2020-03-22-example-post/index.html",
    "revision": "ebbd130ce7fb56a5c825cbf522084812"
  },
  {
    "url": "posts/2020-03-23-a-note-on-iodine/index.html",
    "revision": "958a56fe94ae9be7048ad961a8f0c188"
  },
  {
    "url": "posts/2020-03-23-how-to-make-hand-sanitizer/index.html",
    "revision": "66c3527a0255a897caaecae772733c7b"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/^.*\.(html|jpg|png|gif|webp|ico|svg|woff2|woff|eot|ttf|otf|ttc|json)$/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:\/\/fonts\.googleapis\.com\/css/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
