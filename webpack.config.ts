import path from "path";
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: "production",
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx", ".css"],
  },
  entry: ["./client/src/Index.tsx"],
  output: {
    path: path.resolve(__dirname, "client", "build"),
    filename: "bundle.js",
  },

  performance: {
    hints: false,
  },
  devServer: {
    historyApiFallback: true,

    hot: true,
    static: {
      directory: path.join(__dirname, "client", "public"),
    },
    compress: true,
    proxy: {
      "/": {
        target: "http://localhost:3001",
      },
    },
    port: 3000,
  },
  module: {
    rules: [
      {
        test: /\.(woff2|woff|eot|ttf|otf)$/,
        use: ["file-loader"],
      },
      {
        test: /\.(png|jpg|jpeg|gif|mp3)$/i,
        type: "asset/resource",
      },
      {
        test: [/\.jsx?$/, /\.tsx?$/],
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              url: false,
            },
          },
        ],
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
          },
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "bundle.css",
    }),
  ],
};
