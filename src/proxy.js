const httpProxy = require('http-proxy');
const { proxyPort, port } = require("./contender.json");
httpProxy
    .createProxyServer({target: `http://localhost:${port}`})
    .listen(proxyPort);
