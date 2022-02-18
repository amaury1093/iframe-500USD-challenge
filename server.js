const http = require("http");
const httpProxy = require("http-proxy");

const TARGET = "http://startpage.com";
const proxy = httpProxy.createProxyServer();

//
// Create your server that makes an operation that waits a while
// and then proxies the request
//
http
  .createServer((req, res) => {
    proxy.on("proxyRes", (proxyRes) => {
      // Allow embedding in iframe.

      // Update relevant headers.
      delete proxyRes.headers["x-frame-options"];

      // Update relevant CSP. It's super unsafe, careful.
      proxyRes.headers["Content-Security-Policy"] =
        "default-src 'self' 'unsafe-inline' 'unsafe-eval' *;";
    });
    proxy.web(req, res, { changeOrigin: true, target: TARGET });
  })
  .listen(3000);

console.log("Listening on 3000.");
