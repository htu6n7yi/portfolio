
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 1412, hash: '143205d0847b78f7bdeda8414ed1f20d118417eaa3791d7844f1457f319f328b', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1925, hash: '6df170b376aaffd8fd518d16ccc91f1f041eaadbedf3454b7094a950572b2818', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 14813, hash: 'b16506da3313d69669c11e91ee13d1d01e2ccbfe7fde13994f6202b03c25f09f', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
