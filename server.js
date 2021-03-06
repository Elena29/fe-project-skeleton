const path = require('path');
const express = require('express');
const webpack = require('webpack');
const config = require('./webpack/webpack-dev.config.js');

const app = express();
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

app.get('*', function response(req, res) {
  res.sendFile(path.join(__dirname, './index.html'));
});

app.listen(3000);
