
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
    'index.csr.html': {size: 5447, hash: '3b10c0974b52f2155e0081c0887247b95dd8dcca04d7c8696027b37b26b7a74e', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1043, hash: '8640acdd0eeaf42c68abb8048d20fd494b56cffbcff8245746d4468b61cb7b72', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'team/index.html': {size: 25987, hash: '6dfa9112183f06449e430f087d257425b59a7ae21a2f779e254dbd433f392ec1', text: () => import('./assets-chunks/team_index_html.mjs').then(m => m.default)},
    'specjalizacje/index.html': {size: 27492, hash: '6ad89a159af2fed8060469811a5f7f97ce0b275427662b7eefe54d084c20b08d', text: () => import('./assets-chunks/specjalizacje_index_html.mjs').then(m => m.default)},
    'index.html': {size: 36870, hash: '7006708f4db779bdda652cc4291a607a4c897b8fd4cd9aa74c2c326ca3e0d644', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-XF2CPB6K.css': {size: 231262, hash: '4IzkTwgO5yc', text: () => import('./assets-chunks/styles-XF2CPB6K_css.mjs').then(m => m.default)}
  },
};
