/* eslint-disable */
var path = require('path');
var webpack = require('webpack');
var autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin');

var config = {
  devtool: 'source-map',
  entry: [
    './src/scripts/App'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
      }
    }),
    new HtmlWebpackPlugin({
      hash: true,
      title: 'React Hangman',
      filename: 'index.html',
      template: __dirname + '/src/index.ejs',
      inject: false,
    }),
  ],
  module: {
    loaders: [
      { test: /\.js$/, loaders: ['babel'], exclude: /node_modules/ },
      { test: /\.sass$/, loaders: ['style', 'css', 'postcss', 'sass?outputStyle=expanded'] },
      { test: /\.svg/, loaders: ['raw'] },
      { test: /\.json$/, loaders: ['json'] },
      { test: /\.ttf$/, loaders: ['file'] },
      { test: /\.png$/, loaders: ['file'] },
    ]
  },
  postcss: function(webpack) {
    return autoprefixer({ browsers: 'last 2 versions '})
  }
};

module.exports = config;
