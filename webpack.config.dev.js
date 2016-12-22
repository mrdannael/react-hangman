/* eslint-disable */
var path = require('path');
var webpack = require('webpack');
var autoprefixer = require('autoprefixer');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var config = {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    'react-hot-loader/patch',
    'webpack-hot-middleware/client?http:0.0.0.0:3000',
    './src/scripts/App'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new HtmlWebpackPlugin({
      title: 'Dev React Hangman',
      filename: 'index.html',
      template: __dirname + '/src/index.ejs',
      inject: false,
      hash: true,
    })
  ],
  module: {
    loaders: [
      { test: /\.js$/, loaders: ['babel'], exclude: /node_modules/ },
      { test: /\.sass$/, loaders: ['style', 'css', 'postcss', 'sass?outputStyle=expanded'] },
      { test: /\.svg$/, loaders: ['raw'] },
      { test: /\.json$/, loaders: ['json'] },
      { test: /\.ttf$/, loaders: ['file'] }
    ]
  },
  postcss: function(webpack) {
    return autoprefixer({ browsers: 'last 2 versions '})
  }
};

module.exports = config;
