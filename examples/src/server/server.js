var webpack = require('webpack');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');
var WebpackDevServer = require('webpack-dev-server');

var config = require('../../webpack.config');
var path = require('path');

var app = new require('express')();
var port = 8000;

var compiler = webpack(config);
app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath}));
app.use(webpackHotMiddleware(compiler));


/* This line means that all requests get routed through index.html ensuring smooth hard reloads */
app.get('*', function (request, response){
  response.sendFile(path.resolve('./src/browser/index.html'))
})

app.listen(port, function(error) {
  if (error) {
    console.error(error);
  } else {
    console.info("Listening on port %s. Open up http://localhost:%s/ in your browser.", port, port);
  }
});
