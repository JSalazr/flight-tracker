const path = require('path');
const Dotenv = require('dotenv-webpack');

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
 },
 plugins: [
  new Dotenv()
]
};

module.exports = config;