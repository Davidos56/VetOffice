
export default {
  basePath: 'https://gabinetbrzescy.pl/app',
  supportedLocales: {
  "en-US": ""
},
  entryPoints: {
    '': () => import('./main.server.mjs')
  },
};
