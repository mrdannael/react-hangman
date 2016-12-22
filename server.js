/* eslint-disable */
var path = require('path');
var webpack = require('webpack');
var express = require('express');
var config = require('./webpack.config.dev');

var app = express();
var compiler = webpack(config);
var port = 3000;

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath,
  stats: {
    cache: true,
    assets: true,
    colors: true,
    version: true,
    hash: false,
    timings: true,
    chunks: true,
    chunkModules: false,
  },
}));

app.use(require('webpack-hot-middleware')(compiler));

app.get('*', (req, res) => {
  const filename = path.join(compiler.outputPath, 'index.html')
  // eslint-disable-next-line consistent-return
  compiler.outputFileSystem.readFile(filename, (err, result, next) => {
    if (err) {
      console.error(err)
      res.send(err)
      // return next(err)
    }
    res.set('content-type', 'text/html')
    res.send(result)
    res.end()
  })
})

app.listen(port, function(err) {
  if (err) {
    return console.error(err);
  }

  console.log('Listening at http://localhost:/' + port);
});
