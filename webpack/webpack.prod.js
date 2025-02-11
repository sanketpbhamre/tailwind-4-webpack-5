const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

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

  module: {
    rules: [
      {
        test: /\.(ico|png|jpg|jpeg|gif|svg)$/i,
        type: "asset",
        generator: {
          filename: "assets/images/[name]-[contenthash][ext][query]",
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
          filename: "assets/fonts/[name]-[contenthash][ext][query]",
        },
      },
    ],
  },

  optimization: {
    minimizer: [
      // For webpack@5 you can use the `...` syntax to extend existing minimizers (i.e. `terser-webpack-plugin`), uncomment the next line
      `...`,
      new CssMinimizerPlugin(),
    ],
  },
};
