
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://davidos56.github.io/VetOffice/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/VetOffice"
  },
  {
    "renderMode": 2,
    "route": "/VetOffice/specjalizacje"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 5447, hash: '1fb76ae0a734cd4b8585d018cede7f834fabfabee868901789df46ace4c3a1a9', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1043, hash: 'cf1da5a5add97814c7c65847678f41db616ccc18bf4203493b814f9de03cfba4', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 36558, hash: 'f101b71b33c0e1d0ce3c8161bd8be5fc36d0629f005aa697e6da201f1321fd86', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'specjalizacje/index.html': {size: 24914, hash: '06b371476a0ac295fd327fc90f91ba91b31f842ee0f2de3540610222d9a441f5', text: () => import('./assets-chunks/specjalizacje_index_html.mjs').then(m => m.default)},
    'styles-XF2CPB6K.css': {size: 231262, hash: '4IzkTwgO5yc', text: () => import('./assets-chunks/styles-XF2CPB6K_css.mjs').then(m => m.default)}
  },
};
