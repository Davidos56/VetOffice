
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
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
    'index.csr.html': {size: 5419, hash: 'fc6e289c8532a86241ac0175701e4421d751b1fc7d69dcd39de6df75c36d1bb6', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1015, hash: 'ebcdc86e1b581a1b46109bc1090a9feaed422b40ddf90c9e5224befb42d34836', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'VetOffice/index.html': {size: 36530, hash: 'c2ed20359ddd76347d15b9e90e0e2021d067fc7cf9422b49b991c6e94fd21ff2', text: () => import('./assets-chunks/VetOffice_index_html.mjs').then(m => m.default)},
    'VetOffice/specjalizacje/index.html': {size: 24886, hash: 'dec3602236619d8c1db5b56e96a2d5b853e32d91084e7fa06eed057d5bc9570c', text: () => import('./assets-chunks/VetOffice_specjalizacje_index_html.mjs').then(m => m.default)},
    'styles-XF2CPB6K.css': {size: 231262, hash: '4IzkTwgO5yc', text: () => import('./assets-chunks/styles-XF2CPB6K_css.mjs').then(m => m.default)}
  },
};
