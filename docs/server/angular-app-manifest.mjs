
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
    'index.csr.html': {size: 1581, hash: '5f011beb95570628a46bac22f0e8cbf151bf8f6d6452eb8812fd91621e3e0c58', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1925, hash: 'd8a03a88047b3a136a03f3f421875322638a817ecb5968338e6453f5da1c063e', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 17416, hash: 'cc3d43f4078ff56cf3ae1f1ac07a1c0063051ffc652513500f09dfb285e2fe8c', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-7HCKL3HY.css': {size: 44, hash: 'RnO0YkbANT8', text: () => import('./assets-chunks/styles-7HCKL3HY_css.mjs').then(m => m.default)}
  },
};
