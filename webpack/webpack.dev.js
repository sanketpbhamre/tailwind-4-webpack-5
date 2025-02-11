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

  module: {
    rules: [
      {
        test: /\.(ico|png|jpg|jpeg|gif|svg)$/i,
        type: "asset",
        generator: {
          filename: "assets/images/[name][ext][query]",
        },
        parser: {
          dataUrlCondition: {
            maxSize: 4 * 1024, // 8kb
          },
        },
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
        generator: {
          filename: "assets/fonts/[name][ext][query]",
        },
      },
    ],
  },
};
