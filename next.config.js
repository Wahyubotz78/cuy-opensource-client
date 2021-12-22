const path = require("path");
const { ASSET_HOST } = process.env;

// for those who using CDN
const assetPrefix = ASSET_HOST || "";

module.exports = {
  assetPrefix,
  webpack: (config) => {
    config.output.publicPath = `${assetPrefix}${config.output.publicPath}`;
    return config;
  },
};
