'use strict';

var webpack = require('webpack');
var path = require('path');

module.exports = {

  context: path.resolve('js'),

  entry: './app.js',

  output: {
    path: path.resolve('build'),
    filename: 'bundle.js'
  },

  module: {
    preLoaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'jscs-loader'
      }
    ],
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        query: {
          presets: ['es2015'] // to compile ES6 to ES5
        }
      },
      {
        test: /\.css$/,
        //exclude: /node_modules/,
        loader: "style-loader!css-loader"
      },
      {
        test: /\.html/,
        exclude: /node_modules/,
        loader: "ngtemplate-loader?relativeTo=" + __dirname + "!html-loader"
      },
      {
        test: /\.(ttf|eot|woff|woff2)$/,
        loader: 'url-loader?limit=10000'
      },
      {
        test: /\.(svg)$/,
        loader: 'url-loader?limit=10000&mimetype=image/svg+xml'
      }
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      compress: {
        warnings: false
      }
    })
  ]
};
