
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
    'index.csr.html': {size: 5447, hash: 'ce7610ff75246f2a871e8d06d38e8fd42d68c0016e18e46e94dab0aa7bf87c3b', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1043, hash: '448222db1a6163c4cf601e952605e56c76371fa1f1321eede1729dd63e301a4b', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 36562, hash: '9e393417daca42969e2fb6f73b149672b36fff1a9cbd5ecafc423f39f6f7961d', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'specjalizacje/index.html': {size: 24914, hash: 'aac83bb988c13fad8cc2ea9596fe59ba389914d97bab8cbd69f59def6d8a2aa7', text: () => import('./assets-chunks/specjalizacje_index_html.mjs').then(m => m.default)},
    'styles-XF2CPB6K.css': {size: 231262, hash: '4IzkTwgO5yc', text: () => import('./assets-chunks/styles-XF2CPB6K_css.mjs').then(m => m.default)}
  },
};
