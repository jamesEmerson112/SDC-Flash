const path = require("path");

module.exports = {
  mode: "development",
  entry: path.join(__dirname, "client/src", "index.js"),
  output: {
    path: path.resolve(__dirname, "client/dist"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.(jsx|js)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
            plugins: ["babel-plugin-styled-components"],
          },
        },
      },
    ],
  },
};
