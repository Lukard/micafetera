require = require('esm')(module);
const { routes } = require('./src/router/index.js');

module.exports = {
  publicPath: '/',
  pluginOptions: {
    sitemap: {
      baseURL: 'https://micafetera.net',
      routes,
    },
  },
};
