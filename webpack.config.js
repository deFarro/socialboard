'use strict';

var dirName = '/Users/Jack/Documents/Coding/Projects/Socialboard/'

module.exports = {
  context: dirName,
  entry: './src/js/index.js',

  output: {
    path: dirName + 'dist/',
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
