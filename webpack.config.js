'use strict';

var webpack = require('webpack');
var path = require('path');

module.exports = {
  devtool: 'eval-source-map',

  context: path.resolve('app'),

  entry: './app.ts',

  output: {
    path: path.resolve('build'),
    filename: 'bundle.js',
    sourceMapFilename: 'bundle.map'
  },

  resolve: {
    extensions: ['', '.ts', '.js']
  },

  module: {
    preLoaders: [
      {
        test: /\.ts$/,
        loader: 'tslint-loader',
        exclude: [/node_modules/]
      }
    ],
    loaders: [
      {
        test: /\.ts$/,
        loader: 'ts-loader',
        exclude: [/node_modules\/(?!(ng2-.+))/]
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
