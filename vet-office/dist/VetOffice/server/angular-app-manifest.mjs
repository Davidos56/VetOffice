
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
    'index.csr.html': {size: 5499, hash: '4ac266d20dc25fb847fcee87703740d10a2a7b09c5867f5eabb4253ca56c097e', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1095, hash: 'cf7a12dd31cb24d517faee9c06450bdbcc4fa2cc463d0b1f218f8d20d05a26d1', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'specjalizacje/index.html': {size: 28157, hash: '2dc8d6429bffa7ccb2bd8acdfec85075c89370c59dcd42723ddcb256c9a91670', text: () => import('./assets-chunks/specjalizacje_index_html.mjs').then(m => m.default)},
    'team/index.html': {size: 26626, hash: '8c430fdc7a2940dce65bf6ce1b81133e3a19ada575ec7c76e397fa07006cd9ed', text: () => import('./assets-chunks/team_index_html.mjs').then(m => m.default)},
    'index.html': {size: 37554, hash: '7815d4ed52ccfc0f8983d0d861ad0de72f8a04ce1138290fd12abf847a149eaf', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-XF2CPB6K.css': {size: 231262, hash: '4IzkTwgO5yc', text: () => import('./assets-chunks/styles-XF2CPB6K_css.mjs').then(m => m.default)}
  },
};
