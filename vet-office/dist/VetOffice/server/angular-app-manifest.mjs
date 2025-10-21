
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://gabinetbrzescy.pl/app/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/app"
  },
  {
    "renderMode": 2,
    "route": "/app/news"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 5513, hash: '52fb2845f13366dc2d32214abaf69a7e83533c9c6893948dfbba30f8cfda74b4', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1109, hash: 'ea59a9a8ef9d1c3de3ae4c6598ed9d8d7d68985cc7108ff8c28b143d4ef4c0de', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'news/index.html': {size: 39270, hash: '7a7a31bf0013867ca01be60235f74b60e3dcc3152163a1195cb630e1d00c9393', text: () => import('./assets-chunks/news_index_html.mjs').then(m => m.default)},
    'index.html': {size: 46857, hash: '1a5586a891938c47bf2390b3a1016f69f8a6abe2e22249dfc0b51e10781e0b83', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5R6E73AZ.css': {size: 316026, hash: 'EZpKUqCRKVs', text: () => import('./assets-chunks/styles-5R6E73AZ_css.mjs').then(m => m.default)}
  },
};
