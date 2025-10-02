
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/vet-office/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/vet-office"
  },
  {
    "renderMode": 2,
    "route": "/vet-office/specjalizacje"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 5421, hash: '43f80c797faaf4e69c3c92b37c12f99dee9e57e39bdd75ceb860c412e0524158', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1017, hash: 'c0a331590dc9d7a2b8dafe6cd408409d3572e29ae9bf3d98c234b004516eb4ea', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 36532, hash: '46f7ea9d6c551e447259ed71a3b8c75adabec7e33d616b5d8f8fb8b022352ae4', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'specjalizacje/index.html': {size: 24888, hash: '653d9e93c10004a69fd99bca24df17802daf72c7d6795c6dc16ba157713bb88e', text: () => import('./assets-chunks/specjalizacje_index_html.mjs').then(m => m.default)},
    'styles-XF2CPB6K.css': {size: 231262, hash: '4IzkTwgO5yc', text: () => import('./assets-chunks/styles-XF2CPB6K_css.mjs').then(m => m.default)}
  },
};
