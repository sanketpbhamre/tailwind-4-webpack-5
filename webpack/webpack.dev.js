const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: "development",
  devtool: "source-map",

  output: {
    filename: "scripts/[name].js",
    chunkFilename: "scripts/[name]-[id].js",
  },

  devServer: {
    port: 5173,
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: "styles/[name].css",
      chunkFilename: "styles/[name]-[id].css",
    }),
  ].filter(Boolean),
};
