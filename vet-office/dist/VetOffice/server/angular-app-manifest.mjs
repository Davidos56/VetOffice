
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
    'index.csr.html': {size: 5505, hash: '7f0370cbc1ed90c2f896cf238ef0bbc50af35b3c571ff5651a0d07510e8cf919', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1101, hash: 'f0aef149cbfc5816e6ebb35034bad26cee7c8583bc038def2c1dd0c0420148f0', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 47972, hash: '0f8173d7488e8f0f46e6b5f22c8df550c5a94376dd703483c32dfe3d42b120af', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'specjalizacje/index.html': {size: 45629, hash: '4cd2c09f93fdaa41e0094596095f1132bae70e026191e5e9bcbc5c5a560fbe0c', text: () => import('./assets-chunks/specjalizacje_index_html.mjs').then(m => m.default)},
    'styles-5R6E73AZ.css': {size: 316026, hash: 'EZpKUqCRKVs', text: () => import('./assets-chunks/styles-5R6E73AZ_css.mjs').then(m => m.default)}
  },
};
