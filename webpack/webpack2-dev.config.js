const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const projectPath = path.resolve(__dirname, '../src');
const buildPath = path.resolve(__dirname, '../public/');

module.exports = {
  devtool: 'eval-source-map',
  entry: {
    app: ['react-hot-loader/patch', 'index'],
  },
  output: {
    path: buildPath,
    filename: '[name].js',
    publicPath: '/',
  },
  resolve: {
    modules: [projectPath, 'node_modules'],
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        include: [projectPath],
        options: {
          babelrc: false,
          presets: [
            [
              'env',
              {
                modules: false,
              },
            ],
            'react',
          ],
          env: {
            development: {
              plugins: [
                'react-hot-loader/babel',
              ],
            },
          },
        },
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'style-loader', // creates style nodes from JS strings
          },
          {
            loader: 'css-loader', // translates CSS into CommonJS
          },
          {
            loader: 'sass-loader', // compiles Sass to CSS
            options: {
              sourceMap: true,
            },
          },
        ],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
    }),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.LoaderOptionsPlugin({
      debug: true,
    }),
    new webpack.NamedModulesPlugin(),
  ],
};
