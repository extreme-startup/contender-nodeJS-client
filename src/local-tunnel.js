const localtunnel = require("localtunnel");
const { name, proxyPort } = require("./contender.json");

const tunnel = localtunnel(
    proxyPort,
  { subdomain: name },
  function(err, tunnel) {
    if (err) {
      console.error(`Local tunnel throws ERROR: ${err}`);
    }
    console.log(`Local tunnel opened on ${tunnel.url}`);
  }
);
