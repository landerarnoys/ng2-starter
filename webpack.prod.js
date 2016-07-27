var webpack = require('webpack');
var webpackMerge = require('webpack-merge');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var commonConfig = require('./webpack.common.js');

const ENV = process.env.NODE_ENV = process.env.ENV = 'production';

module.exports = webpackMerge(commonConfig, {
  devtool: 'source-map',

  entry: {
    'app': './app/main.ts',
    'vendor': './app/vendor.ts',
    'polyfills': './app/polyfills.ts',
  },

  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: '[name].[hash].js',
    chunkFilename: '[id].[hash].chunk.js'
  },

  htmlLoader: {
    minimize: false // workaround for ng2
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
        name: ['app', 'vendor', 'polyfills']
    }),
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.UglifyJsPlugin({
        compress: {
            warnings: false
        },
    }),
    new webpack.optimize.DedupePlugin(),
    new ExtractTextPlugin('[name].[hash].css'),
    new webpack.DefinePlugin({
      'process.env': {
        'ENV': JSON.stringify(ENV),
        'URL_BASE': JSON.stringify('http://myServer/api')
      },
    })
  ]
});
