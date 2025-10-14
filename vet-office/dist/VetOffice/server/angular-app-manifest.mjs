
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
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 5491, hash: '14aa1bff73efa6f2e2c9db0430e9508b7c07655db4783ca946a8f586af8df83c', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1087, hash: '3545edeab81a6b95de0d4ea4dfc95207e3372939d1390d58f2a3c814b01b4743', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'specjalizacje/index.html': {size: 38129, hash: '1f45142f6eef966a1a839596a46f80deae75d05127eb1b4a9229031783466a0e', text: () => import('./assets-chunks/specjalizacje_index_html.mjs').then(m => m.default)},
    'index.html': {size: 40079, hash: '9520ba6e1d635968b8d1d823a1029d51aee290e72fec220ff4b305e8ce28159d', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5R6E73AZ.css': {size: 316026, hash: 'EZpKUqCRKVs', text: () => import('./assets-chunks/styles-5R6E73AZ_css.mjs').then(m => m.default)}
  },
};
