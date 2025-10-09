
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
    "route": "/app/specjalizacje"
  },
  {
    "renderMode": 2,
    "route": "/app/team"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 5491, hash: '7a650438a1469cfb4ffb989adf635e5dee47a206bbd10204ae6e970c26572732', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1087, hash: '30f080af646e59d31f15dd545a819771099ffc62015a3722e3a9e3f618054f46', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'specjalizacje/index.html': {size: 32931, hash: '52b133af28b7a7f1da554541468d9e7ff583ac8230f2ae6a64d04073f993a90d', text: () => import('./assets-chunks/specjalizacje_index_html.mjs').then(m => m.default)},
    'team/index.html': {size: 31369, hash: '0ce7f1ced96cd4d3a6e656298a150851570979c6c6a707f0dfa481c9b216e269', text: () => import('./assets-chunks/team_index_html.mjs').then(m => m.default)},
    'index.html': {size: 57531, hash: '86505219ca6652c5a429a33f8b00e1689e62f36c377080110c1a5495c45885c5', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5R6E73AZ.css': {size: 316026, hash: 'EZpKUqCRKVs', text: () => import('./assets-chunks/styles-5R6E73AZ_css.mjs').then(m => m.default)}
  },
};
