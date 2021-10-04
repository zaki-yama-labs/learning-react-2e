const path = require("path");

module.exports = (_, argv) => ({
  entry: "./src/index.tsx",
  output: {
    path: path.join(__dirname, "dist"),
    filename: "bundle.js",
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
  },
  devtool: argv.mode === "production" ? false : "inline-source-map",
  module: {
    rules: [
      {
        exclude: /node_modules/,
        test: /\.tsx?$/,
        use: "ts-loader",
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },
});
