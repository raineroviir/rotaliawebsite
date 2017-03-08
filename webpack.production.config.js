const path = require('path')
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin');
var CompressionPlugin = require("compression-webpack-plugin");

module.exports = {
  devtool: 'cheap-module-source-map',
  entry: [
    './src/index.js'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/dist/'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': JSON.stringify({ NODE_ENV: 'production' }),
      __DEVELOPMENT__: false,
    }),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
      },
      comments: false,
      sourceMap: false
    }),
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
    new CompressionPlugin({
      asset: "[path].gz[query]",
      algorithm: "gzip",
      test: /\.js$|\.scss$|\.html$/,
      threshold: 10240,
      minRatio: 0.8
    })
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        include: path.join(__dirname, 'src'),
        query: {
          presets: [ "react", "es2015" , "stage-0" ]
        }
      },
      // {
      // test: /\.(jpe?g|png|gif|svg)$/i,
      //   loaders: [
      //     'file?name=images/[name].[ext]',
      //     'webp?name=images/[name].[ext]'
      //   ]
      // },
      { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192' },
      {
        test: /\.scss$/,
        loader: 'style!css?localIdentName=[path][name]--[local]!postcss-loader!sass',
      },
      {
        test: /\.(pdf)$/,
        loader: 'file?name=[path][name].[ext]'
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
