const path = require('path')
const webpack = require('webpack')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  devtool: 'eval',
  entry: [
    'webpack-hot-middleware/client', './src/index.js'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/dist/'
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    // new BundleAnalyzerPlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        include: path.join(__dirname, 'src'),
        query: {
        presets: [ 'react-hmre', "react", "es2015" , "stage-0" ]
        }
      },
      {
        test: /\.scss$/,
        loader: 'style!css?localIdentName=[path][name]--[local]!postcss-loader!sass',
      },
      {
        test: /\.(png|jpg|svg|gif)$/,
        loader: 'file-loader?name=images/[name].[ext]',
      },
      {
        test: /\.json$/,
        loader: 'json',
        include: path.join(__dirname, 'src')
      },
      {
        test: /\.css?$/,
        loaders: ['style', 'raw']
      },
      {
        test: /\.(eot|ttf|woff|woff2)$/,
        loader: 'file?name=public/fonts/[name].[ext]'
      }
    ]
  }
}
