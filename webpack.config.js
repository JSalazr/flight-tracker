const path = require('path');

const config = {
  entry: [
    '@babel/polyfill',
    './index.js'
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loaders: [
          'babel-loader',
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.(css|sass|scss)$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ],
      }
    ],
  },
  output: {
    path: __dirname,
    filename: 'bundle.js'
  },
  devServer: {
    historyApiFallback: true
  },
  node: {
    fs: "empty"
 }
};

module.exports = config;