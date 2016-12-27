const webpack = require('webpack');
const path = require('path');

module.exports = {
  debug: true,
  context: __dirname,
  devtool: 'inline-source-map',
  entry: {
    bundle: [
      'webpack-hot-middleware/client',
      'index',
    ],
  },
  output: {
    path: path.join(__dirname, '../public'),
    filename: '[name].js',
    publicPath: '/',
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
      }
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
};
