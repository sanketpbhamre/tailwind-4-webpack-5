const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: {
    index: path.resolve(__dirname, "..", "src", "main"),
  },

  // Optional here, as in the above entry object, main considered by default main.js. But when when we deal with react, we need to resolv both .js and .jsx anlong with .ts and .tsx (in case of typescript).
  // resolve: {
  //   extensions: [".js", ".jsx", ".ts", ".tsx"],
  // },

  output: {
    // path: path.resolve(__dirname, "..", "dist"),
    clean: true,
    // publicPath: "/",
  },

  devServer: {
    open: true,
    // compress: false,
    // hot: false,
    // liveReload: false,
    static: {
      directory: path.resolve(__dirname, "..", "dist"),
    },
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "..", "pages", "index.html"),
    }),
  ].filter(Boolean),

  module: {
    rules: [
      {
        // test: /\.(js|jsx)$/i,
        test: /\.js$/i,
        exclude: /node_modules/,
        use: {
          // Without additional settings, this will reference babel.config.js
          loader: "babel-loader",
        },
      },
      {
        test: /\.(s[ac]|c)ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              importLoaders: 2,
            },
          },
          "postcss-loader",
          "sass-loader",
        ],
      },
    ],
  },
};
