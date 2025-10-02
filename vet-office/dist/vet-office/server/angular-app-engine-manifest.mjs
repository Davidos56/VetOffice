
export default {
  basePath: 'https://davidos56.github.io/VetOffice',
  supportedLocales: {
  "en-US": ""
},
  entryPoints: {
    '': () => import('./main.server.mjs')
  },
};
