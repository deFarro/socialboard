'use strict';
// This config is used for production build only via cli

const webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

const dirName = '/Users/Jack/Documents/Coding/Projects/Socialboard/'

module.exports = {
  context: dirName,
  entry: './src/js/index.js',

  output: {
    path: dirName + '/dist',
    filename: 'bundle.min.js'
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env': { 'NODE_ENV': JSON.stringify('production') }
    }),
    new UglifyJSPlugin(),
  ],

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
