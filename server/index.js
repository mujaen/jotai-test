/**
 * express 서버에 middleware를 연결합니다.
 */
const express = require('express')
const port = require('./port.js')
const app = express()
const logger = require('./logger.js')
const isProd = process.env.NODE_ENV === 'production'
const devMiddleware = require('./middlewares/devMiddleware')
const prodMiddleware = require('./middlewares/prodMiddleware')
const webpackDevConfig = require('../webpack/webpack.dev.config')
const protocol = process.env.PROTOCOL || 'https'

// Setup middleware.
if (isProd) {
  const options = {
    outputPath: resolve(process.cwd(), 'build'),
    publicPath: '/',
  }
  prodMiddleware(app, options)
} else {
  devMiddleware(app, webpackDevConfig)
}

// Start app.
if (protocol === 'https') {
  app.listen(port, async err => {
    if (err) {
      return logger.error(err.message)
    }

    logger.appStarted(port)
  })
}
