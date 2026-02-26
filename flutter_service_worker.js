'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "eab39225842df1283d36a632305d4035",
"assets/AssetManifest.bin.json": "132594a3b1a21eafeb81a9b8bc803f97",
"assets/AssetManifest.json": "6addaf314c5169252a534a9a5d8dab00",
"assets/assets/images/bg1.png": "70bb9c36b73e7300eeec98b2aa0e6ee4",
"assets/assets/images/bg2.png": "cae70c855a3ea8f5d3f390a32dc17847",
"assets/assets/images/bg3.png": "b598f23c14238aa04ba7dcb6185c2702",
"assets/assets/images/bg4.png": "af5c66e17b7106c0a0a1ed5af18212d0",
"assets/assets/logo.png": "e6fdf195b82e58c89a8165190ddf7764",
"assets/assets/product/Achiken.png": "83bade95751c9de94752b0c88e48e88c",
"assets/assets/product/Akebab.png": "87fe6eeb272ee19add3135c37b79cf3d",
"assets/assets/product/am%25C3%25A9ricain.png": "c1cd6a2192dc3eeb53cdda996079c7bd",
"assets/assets/product/Amixte.png": "9cc3fa39a25bb7d98e6cfa1b2bfe9ab4",
"assets/assets/product/andalouse.png": "015955b7a514ac99a36f508c53574283",
"assets/assets/product/Asteak.png": "ba39d60d6fec568617cde4d1f7af273c",
"assets/assets/product/baberocue.png": "8e078e463292bcd591e05d7ce498dbc8",
"assets/assets/product/barcalmar.png": "456a5f4bab45a7f310a5be4a01fc8ad9",
"assets/assets/product/barfrites.png": "cae7c11e7bf29ac6782eae6646c16466",
"assets/assets/product/barviand.png": "6ac5edda37208f1d944a5a99450647f2",
"assets/assets/product/biggy.png": "2099ff10af57add3a6d153a5568a31d4",
"assets/assets/product/blanche.png": "d9fdf6851eb3e1908708172645e7c7c7",
"assets/assets/product/bledard.png": "4d49cefecdc0a15640a246d2b1445400",
"assets/assets/product/burger.png": "76aa21be83381b21277ad58856ccccaa",
"assets/assets/product/campnard.png": "5f364c72bc13e4b57e9522dd7ccf74d3",
"assets/assets/product/capri.png": "370ae282e68fcad878d1c2720ce61336",
"assets/assets/product/cheddar.png": "f563de1c9163ff5f61b0c53171731ad5",
"assets/assets/product/chicken.png": "f014bbb4cd7b1425f244381e255951be",
"assets/assets/product/coca.png": "da941789de52be5bc7042df1162fda02",
"assets/assets/product/eau.png": "93b2e8cc023f4241feea881d05c4d2ac",
"assets/assets/product/flafel.png": "33951350977d3e718a9be9fb9d9f085c",
"assets/assets/product/fritesenfant.png": "f9c177289ce49cd2023843c913c5e406",
"assets/assets/product/harissa.png": "346dfa7d664362ffaaa89082b1d4c3b8",
"assets/assets/product/kebab.png": "d656c849af6544aa3ed40d6f6feb38e9",
"assets/assets/product/kefta.png": "dbd764913f297fde814c8dcfe246541a",
"assets/assets/product/ketchup.png": "a41c65b5501f38950ad83f73a5cdfd29",
"assets/assets/product/mayonaise.png": "7583938f2a73a9f5b25ba6edfa0a2a23",
"assets/assets/product/oeuf.png": "c9a1d350be07a0c853d6557aec184621",
"assets/assets/product/panchiken.png": "a78abfa8c31157fc158b100159cb678e",
"assets/assets/product/panfromag.png": "879d5aeff3e9c77f1db58eb3fbcefaf9",
"assets/assets/product/pankebab.png": "6a32f78e2a549fea3f88031ab00e82ac",
"assets/assets/product/pannutella.png": "4875f1c3d61c735221f549453ef92d2b",
"assets/assets/product/pansteak.png": "2678a6be0a471c6ac73d896ce05dc821",
"assets/assets/product/pat_or.png": "bdf1b4aa8f0b922fc2427363d11c8180",
"assets/assets/product/pepsi.png": "53e397701385b4e651dc73f402f5b16f",
"assets/assets/product/redbull.png": "8995db1675164e099deea2da4f8aa18c",
"assets/assets/product/royalkebab.png": "4d19c2a3846ab41e4c393c3b926fcf32",
"assets/assets/product/royalsteak.png": "fa3cc51517dd0a5527983eb1438c3570",
"assets/assets/product/samourai.png": "9e3941806f08337d712b2afafd9ecb8a",
"assets/assets/product/ssteak.png": "70fea2b1ed6b34bc67cb4ab4e62fd484",
"assets/assets/product/texchiken.png": "5e6c7b67ed59db865c761fc163b72255",
"assets/assets/product/texnugget.png": "fc206f8b1cd909e4c558ac5b6558313e",
"assets/assets/product/th%25C3%25A9.png": "f396d6bd7182e8a74bca496226ee97bd",
"assets/assets/product/tira.png": "c07d60926eab812065e475cc118bb28d",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "97298512e36be5348380792401f979fa",
"assets/NOTICES": "e08fc28f484793e51f36247fc6e0334a",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"flutter_bootstrap.js": "89051f841758f3bc43f49aaf0fd4d900",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "cc7724f4c4a0f5b733b3ca221f5c5766",
"/": "cc7724f4c4a0f5b733b3ca221f5c5766",
"main.dart.js": "044bf0d44efd3342c3d155ab5b366b58",
"manifest.json": "15cae8ca79d127ba62375a27fb4e6b7d",
"version.json": "f9abcb1c7ac23504cf1cdc6291a16e7b"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
