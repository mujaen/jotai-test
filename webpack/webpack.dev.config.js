/***
 *  DEVELOPMENT WEBPACK CONFIGURATION
 */
const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = require('./webpack.base.config')({
  mode: 'development',
  output: {
    publicPath: '/',
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  entry: [
    'react-hot-loader/patch',
    'webpack-hot-middleware/client?reload=true',
    path.join(process.cwd(), 'src/app.tsx'),
  ],
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      inject: true,
      template: './src/index.html',
    }),
  ],
})
