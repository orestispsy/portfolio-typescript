const path = require("path");

const port = process.env.CONTAINER_PORT || 3000;
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "production",
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx", ".css"],
  },
  entry: [
    `webpack-dev-server/client?http://localhost:${port}`,
    "./client/src/Index.tsx",
  ],
  output: {
    path: path.resolve(__dirname, "client", "build"),
    filename: "bundle.js",
  },

  performance: {
    hints: false,
  },
  devServer: {
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
        test: /\.(png|jpg|jpeg|gif|mp3)$/i,
        type: "asset/resource",
      },
      {
        test: [/\.jsx?$/, /\.tsx?$/],
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
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
    new HtmlWebPackPlugin({
      template: "./client/index.html",
      filename: "./index.html",
    }),
  ],
};
