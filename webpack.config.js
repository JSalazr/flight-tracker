const path = require('path');

const config = {
  entry: [
    './index.js',
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
};

module.exports = config;