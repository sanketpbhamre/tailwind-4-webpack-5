const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: "production",
  devtool: false,

  output: {
    filename: "scripts/[name]-[contenthash].js",
    chunkFilename: "scripts/[name]-[id]-[contenthash].js",
  },

  devServer: {
    port: 4173,
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: "styles/[name]-[contenthash].css",
      chunkFilename: "styles/[name]-[id]-[contenthash].css",
    }),
  ].filter(Boolean),
};
