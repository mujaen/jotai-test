/***
 *  BASE WEBPACK CONFIGURATION
 */
const path = require('path')

module.exports = options => ({
  mode: options.mode,
  entry: options.entry,
  output: {
    filename: '[name].[chunkhash].js',
    path: path.resolve(process.cwd(), 'build'),
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    modules: [path.resolve(process.cwd(), 'src'), 'node_modules'],
    alias: {
      '#assets': path.resolve(process.cwd(), 'src/assets'),
      '#components': path.resolve(process.cwd(), 'src/components'),
      '#hooks': path.resolve(process.cwd(), 'src/hooks'),
      '#pages': path.resolve(process.cwd(), 'src/pages'),
      '#styles': path.resolve(process.cwd(), 'src/styles'),
      '#utils': path.resolve(process.cwd(), 'src/utils'),
    },
  },
  plugins: [...options.plugins],
  optimization: options.optimization,
  module: {
    rules: [
      {
        // Match `.js`, `.jsx`, `.ts` or `.tsx` files
        test: /\.[jt]sx?$/,
        loader: 'esbuild-loader',
        options: {
          // JavaScript version to compile to
          target: 'es2015',
        },
      },
      {
        test: /\.(eot|otf|ttf|woff|woff2|jpe?g|png|gif)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: 'assets/images/[name].[ext]?[hash]',
          },
        },
      },
    ],
  },
})
