
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
  },
  {
    "renderMode": 2,
    "route": "/VetOffice/team"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 5499, hash: 'b5dd73e929bedc4b0041549a204fb33092cfc0273831f94d33ff20e9c07c53c2', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1095, hash: 'bc181ef15f4afd2f3a3b31361169f74e9b2ee464963cbb9297f7ffaa6eb686d6', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'specjalizacje/index.html': {size: 32349, hash: '3e1d33de058d666c6084a022e564ded9d1bfb495243d55cb2966d48e6627a2e5', text: () => import('./assets-chunks/specjalizacje_index_html.mjs').then(m => m.default)},
    'index.html': {size: 40687, hash: '6838195df51cb31507562ad32a5f4d9c59188da8c3dd68b9802562a11aff70e6', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'team/index.html': {size: 30787, hash: '0f6da1d1ecdcb5722043c0e9825634a497e9c6c0188f69f613c8545acdd2624f', text: () => import('./assets-chunks/team_index_html.mjs').then(m => m.default)},
    'styles-5R6E73AZ.css': {size: 316026, hash: 'EZpKUqCRKVs', text: () => import('./assets-chunks/styles-5R6E73AZ_css.mjs').then(m => m.default)}
  },
};
