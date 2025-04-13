
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
    'index.csr.html': {size: 1412, hash: 'aa24b86a76f53656d62145d8b5ca9642c9bf9248472fd201ecbb1041952d0c70', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1925, hash: '41ad3bcf8b5fa7fbded7b7e0e63dcb1cb57bbf30c13311780dbe791bfd88d18a', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 11234, hash: 'acf664ace302df6eef4e2fa72ea1afc37371dacde2951139bce23bb812b18d1c', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
