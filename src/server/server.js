const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const path = require('path')
const http = require('http')
app.use(require('morgan')('short'));
const bodyParser = require('body-parser')
const fetch = require('isomorphic-fetch')
const compression = require('compression')

if (process.env.NODE_ENV !== "production") {
  (function initWebpack() {
  const webpack = require('webpack');
  const webpackConfig = require('../../webpack.config');
  const compiler = webpack(webpackConfig);

  app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true, publicPath: webpackConfig.output.publicPath,
  }));

  app.use(require('webpack-hot-middleware')(compiler, {
    log: console.log, path: '/__webpack_hmr', heartbeat: 10 * 1000,
  }));
})();
}

app.use(compression())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

const options = {
  setHeaders: function (res, path, stat) {
    res.set("Accept-Encoding", "gzip")
  }
}

// app.get('*.js', function (req, res, next) {
//   req.url = req.url + '.gz';
//   res.set('Content-Encoding', 'gzip');
//   next();
// });

app.use(express.static(path.join(__dirname, '..','..', '/'), options));

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, '..', '..', 'index.html'));
});

app.listen(port, (error) => {
  if (error) {
    console.error(error)
  } else {
    console.info(`==> 🌎  Listening on port ${port}. Open up http://localhost:${port}/ in your browser.`)
  }
})
