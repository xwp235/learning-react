const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        '/api',
        createProxyMiddleware({
            target: 'http://localhost:5000', // 指向 json-server 的端口
            changeOrigin: true,
            pathRewrite: {
                '^/api': '', // 将 /api 替换为空字符串，从而代理请求直接访问 json-server 的路由
            },
        })
    );
};