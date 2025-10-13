
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
    'index.csr.html': {size: 5491, hash: '5b327b542a3f93a5eb13c5f771dc1fbdffbb48c3dab34cb9c5f7c796c172693b', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1087, hash: '0a605a40182c57ebc87dbfb396a999676fb30d40d404a91f881497db9a160bf8', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'specjalizacje/index.html': {size: 32845, hash: 'a7e7e46072727277e0ed93fd8b5bdbd57f8fe3079868b38823bae2780650e975', text: () => import('./assets-chunks/specjalizacje_index_html.mjs').then(m => m.default)},
    'index.html': {size: 53722, hash: 'd371a6e795979cb8afc8f00a7d42a331709432ad8b46d75f06d6c59721dd2b91', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5R6E73AZ.css': {size: 316026, hash: 'EZpKUqCRKVs', text: () => import('./assets-chunks/styles-5R6E73AZ_css.mjs').then(m => m.default)}
  },
};
