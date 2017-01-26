const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  debug: true,
  context: __dirname,
  devtool: 'inline-source-map',
  entry: {
    bundle: [
      'webpack-dev-server/client?http://127.0.0.1:8080/',
      'webpack/hot/only-dev-server',
      'index'
    ],
  },
  output: {
    path: path.join(__dirname, '../public'),
    filename: '[name].js',
    publicPath: '/'
  },
  resolve: {
    root: [path.join(__dirname, '../src')],
    modulesDirectories: ['node_modules'],
    extensions: ['', '.js', '.jsx'],
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: ['react-hot', 'babel'],
        include: path.join(__dirname, '../src')
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('style', 'style!css!resolve-url!sass?sourceMap'),
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style', 'css'),
      },
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new ExtractTextPlugin('styles.css', { allChunks: true }),
    new webpack.NamedModulesPlugin(),
  ],
};
