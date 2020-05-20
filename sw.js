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

workbox.core.setCacheNameDetails({prefix: "gatsby-plugin-offline"});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "page-data/404.html/page-data.json",
    "revision": "d2d3612af1df181302e193fa8c922dd4"
  },
  {
    "url": "page-data/404/page-data.json",
    "revision": "885296f794bc4c06d05f9cb1f0a23695"
  },
  {
    "url": "page-data/app-data.json",
    "revision": "63bff958a0f401d4c413b3cd3a66eca8"
  },
  {
    "url": "page-data/index/page-data.json",
    "revision": "9fd5d438a7118e2bfc11c85a0137f107"
  },
  {
    "url": "page-data/math/page-data.json",
    "revision": "ac20c28b26443e6e03e5a44eb792a6bf"
  },
  {
    "url": "page-data/math/poly/div-mod/page-data.json",
    "revision": "f623ccb96263326add21d18f21ef6329"
  },
  {
    "url": "page-data/math/poly/fft/page-data.json",
    "revision": "86fc81935de86af9a810d719fedf7a1d"
  },
  {
    "url": "page-data/math/poly/fwt/page-data.json",
    "revision": "7f3b35904d2b02463f676c9fff62fa23"
  },
  {
    "url": "page-data/math/poly/intro/page-data.json",
    "revision": "bbb45d2e8beebdac815f858fc5399c04"
  },
  {
    "url": "page-data/math/poly/inv-tri-func/page-data.json",
    "revision": "46609b9d99a56d325bab9a1bbf03ad1b"
  },
  {
    "url": "page-data/math/poly/inv/page-data.json",
    "revision": "2490d4d0a00d5edb4c82bd2b9f887950"
  },
  {
    "url": "page-data/math/poly/lagrange/page-data.json",
    "revision": "52a7530321a39422b64d5cfa68f6bd15"
  },
  {
    "url": "page-data/math/poly/ln-exp/page-data.json",
    "revision": "1596b4960ebd992dc3b58edf9a9f54f8"
  },
  {
    "url": "page-data/math/poly/multipoint-eval-interpolation/page-data.json",
    "revision": "24613a0af1a6954299cf163575eef9fd"
  },
  {
    "url": "page-data/math/poly/newton/page-data.json",
    "revision": "3d8f78d2a0bb541d9be64458438f496b"
  },
  {
    "url": "page-data/math/poly/ntt/page-data.json",
    "revision": "5ea3ef9eac196acb18a75684d150e3b4"
  },
  {
    "url": "page-data/math/poly/sqrt/page-data.json",
    "revision": "2d7ca477a73afcb9d290bfd644bd0f43"
  },
  {
    "url": "page-data/math/poly/tri-func/page-data.json",
    "revision": "e7e27ff1b2887ed5a77e4c647a226efd"
  },
  {
    "url": "page-data/offline-plugin-app-shell-fallback/page-data.json",
    "revision": "43232b01cc861c0701a3ece4bd67720b"
  },
  {
    "url": "page-data/pages/page-data.json",
    "revision": "b018b9ee50d4103f36387ad3c2fcca11"
  },
  {
    "url": "page-data/search/page-data.json",
    "revision": "3bde0c154ca8ce7fbed4926b729b38fd"
  },
  {
    "url": "page-data/settings/page-data.json",
    "revision": "c09f7f413cb329bcf7211e4955ddcfa1"
  },
  {
    "url": "page-data/tags/animals/page-data.json",
    "revision": "c5174fae8be6c6231409c4c7bfdc03fa"
  },
  {
    "url": "page-data/tags/chicago/page-data.json",
    "revision": "3d0c07ac2a40f7e34efb2b262c411b6a"
  },
  {
    "url": "page-data/tags/chinese/page-data.json",
    "revision": "6429deb47a7f828940ee7d3a22795df7"
  },
  {
    "url": "page-data/tags/math/page-data.json",
    "revision": "be3a4764af2feec3ac03588908c0dcf3"
  },
  {
    "url": "page-data/tags/page-data.json",
    "revision": "668b7da83ba79d703e347ae3219cb37f"
  },
  {
    "url": "page-data/tags/polynomial/page-data.json",
    "revision": "2c560cc9f86a1d37be80bb3225cccc1b"
  },
  {
    "url": "page-data/tags/test/page-data.json",
    "revision": "f1de0b026c0e6181dac0d2e76324d0d8"
  },
  {
    "url": "page-data/tags/zoos/page-data.json",
    "revision": "fd3b2b8fc9c78c0f712f2b88a0acd67e"
  },
  {
    "url": "page-data/tags/中文/page-data.json",
    "revision": "0cdc4458160bc5f8cd9c7fe47d975ef3"
  },
  {
    "url": "page-data/test/page-data.json",
    "revision": "4741675d8c4d36c42bbcc70acc6b97fe"
  },
  {
    "url": "15-eef4694b8e7202e55a29.js"
  },
  {
    "url": "17757bf87520686e179ce312b80d666e25b65c83-3e11b6d0a2cd704f5a02.js"
  },
  {
    "url": "5de1d9917bc7801582665e1533c183f2d7fd2157-ce66ed9849f0f137f656.js"
  },
  {
    "url": "app-b02c09aefaf28aa437f8.js"
  },
  {
    "url": "bab4896a-e8ff0456cc9378fbff15.js"
  },
  {
    "url": "component---cache-caches-gatsby-plugin-offline-app-shell-js-4221fab6bc348d601965.js"
  },
  {
    "url": "component---src-pages-404-js-b983d2a2b81a1d00f1ce.js"
  },
  {
    "url": "component---src-pages-pages-js-411ac4c6fbe4d080b920.js"
  },
  {
    "url": "component---src-pages-search-js-2668c4713a46d965190f.js"
  },
  {
    "url": "component---src-pages-settings-tsx-7621c61f27a4065ca3aa.js"
  },
  {
    "url": "component---src-pages-tags-js-a942c18722879f5970a7.js"
  },
  {
    "url": "component---src-templates-doc-js-09edf45e2a4747c33f45.js"
  },
  {
    "url": "component---src-templates-tags-js-ec9f7d58ec38e4486cb2.js"
  },
  {
    "url": "framework-6bf65813ef0f9943b78c.js"
  },
  {
    "url": "idb-keyval-iife.min.js"
  },
  {
    "url": "styles-d3259afcef90844d6efd.js"
  },
  {
    "url": "webpack-runtime-f3eb3459f58db32e7cd4.js"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "9bcdd043190e6c3d4683603dfe39dc45"
  },
  {
    "url": "styles.1c5aaac32b2e86deff0f.css"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "a64367b2f20302a9d6f214569017f012"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/(\.js$|\.css$)/, new workbox.strategies.CacheFirst(), 'GET');
workbox.routing.registerRoute(/^https?:.*\.(json)$/, new workbox.strategies.NetworkFirst(), 'GET');
workbox.routing.registerRoute(/^https?:.*\.(woff|woff2)$/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:.*\.(png|jpg|jpeg|webp|svg|gif|tiff)$/, new workbox.strategies.NetworkOnly(), 'GET');

/* global importScripts, workbox, idbKeyval */

importScripts(`idb-keyval-iife.min.js`)

const { NavigationRoute } = workbox.routing

let lastNavigationRequest = null
let offlineShellEnabled = true

// prefer standard object syntax to support more browsers
const MessageAPI = {
  setPathResources: (event, { path, resources }) => {
    event.waitUntil(idbKeyval.set(`resources:${path}`, resources))
  },

  clearPathResources: event => {
    event.waitUntil(idbKeyval.clear())
  },

  enableOfflineShell: () => {
    offlineShellEnabled = true
  },

  disableOfflineShell: () => {
    offlineShellEnabled = false
  },
}

self.addEventListener(`message`, event => {
  const { gatsbyApi: api } = event.data
  if (api) MessageAPI[api](event, event.data)
})

function handleAPIRequest({ event }) {
  const { pathname } = new URL(event.request.url)

  const params = pathname.match(/:(.+)/)[1]
  const data = {}

  if (params.includes(`=`)) {
    params.split(`&`).forEach(param => {
      const [key, val] = param.split(`=`)
      data[key] = val
    })
  } else {
    data.api = params
  }

  if (MessageAPI[data.api] !== undefined) {
    MessageAPI[data.api]()
  }

  if (!data.redirect) {
    return new Response()
  }

  return new Response(null, {
    status: 302,
    headers: {
      Location: lastNavigationRequest,
    },
  })
}

const navigationRoute = new NavigationRoute(async ({ event }) => {
  // handle API requests separately to normal navigation requests, so do this
  // check first
  if (event.request.url.match(/\/.gatsby-plugin-offline:.+/)) {
    return handleAPIRequest({ event })
  }

  if (!offlineShellEnabled) {
    return await fetch(event.request)
  }

  lastNavigationRequest = event.request.url

  let { pathname } = new URL(event.request.url)
  pathname = pathname.replace(new RegExp(`^`), ``)

  // Check for resources + the app bundle
  // The latter may not exist if the SW is updating to a new version
  const resources = await idbKeyval.get(`resources:${pathname}`)
  if (!resources || !(await caches.match(`/app-b02c09aefaf28aa437f8.js`))) {
    return await fetch(event.request)
  }

  for (const resource of resources) {
    // As soon as we detect a failed resource, fetch the entire page from
    // network - that way we won't risk being in an inconsistent state with
    // some parts of the page failing.
    if (!(await caches.match(resource))) {
      return await fetch(event.request)
    }
  }

  const offlineShell = `/offline-plugin-app-shell-fallback/index.html`
  const offlineShellWithKey = workbox.precaching.getCacheKeyForURL(offlineShell)
  return await caches.match(offlineShellWithKey)
})

workbox.routing.registerRoute(navigationRoute)

// this route is used when performing a non-navigation request (e.g. fetch)
workbox.routing.registerRoute(/\/.gatsby-plugin-offline:.+/, handleAPIRequest)
