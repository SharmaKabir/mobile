const { getDefaultConfig } = require('expo/metro-config');

const config = getDefaultConfig(__dirname);

// Add configuration for corporate networks
config.server = {
  port: 8081,
  rewriteRequestUrl: (url) => {
    if (!url.endsWith('.bundle')) {
      return url;
    }
    return url + '?platform=web&dev=true&minify=false&modulesOnly=false&runModule=true';
  },
};

module.exports = config;