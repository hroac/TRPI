const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  // Proxy for JSONBin
  app.use(
    createProxyMiddleware({
      target: 'https://api.jsonbin.io',
      changeOrigin: true,
      ws: true,
      pathRewrite: {
        '^/api': '',
      },
      pathFilter: (pathname, req) => pathname.startsWith('/api'),
    })
  );

  // Proxy for Medium RSS
  app.use(
    createProxyMiddleware({
      target: 'https://medium.com',
      changeOrigin: true,
      ws: true,
      pathRewrite: {
        '^/medium': '',
      },
      headers: {
        'User-Agent': 'Mozilla/5.0',
      },
      pathFilter: (pathname, req) => pathname.startsWith('/medium'),
    })
  );
};
