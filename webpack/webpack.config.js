const { merge } = require("webpack-merge");
const commonConfig = require("./webpack.common.js");

module.exports = () => {
  const envConfig = require(`./webpack.${process.env.NODE_ENV || "dev"}.js`);
  return merge(commonConfig, envConfig);
};
