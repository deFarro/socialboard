'use strict';
// This config is used for developing builds with Gulp

module.exports = {
  output: {
    filename: 'bundle.js'
  },

  devtool: 'source-map',

  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: [{
          loader: 'babel-loader',
          options: {"presets": ["react", "es2015"]}
      }]
    },
    {
      test: /\.scss$/,
      use: [
        {
          loader: 'style-loader',
          options: {sourceMap: true}
        },
        {
          loader: 'css-loader',
          options: {sourceMap: true}
        },
        {
          loader: 'sass-loader',
          options: {sourceMap: true}
      }]
    }]
  },

  stats: {
    assets: false,
    version: false
  }
};
