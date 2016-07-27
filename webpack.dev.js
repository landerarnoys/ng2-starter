var webpack = require('webpack');
var webpackMerge = require('webpack-merge');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var commonConfig = require('./webpack.common.js');

const ENV = process.env.NODE_ENV = process.env.ENV = 'development';

module.exports = webpackMerge(commonConfig, {
  devtool: 'cheap-module-source-map',

  entry: {
    'app': './app/main.ts',
    'polyfills': './app/polyfills.ts',
  },

  output: {
    path: __dirname + '/dist',
    publicPath: 'http://localhost:8083/',
    filename: '[name].js',
    chunkFilename: '[id].chunk.js'
  },

  plugins: [
    new ExtractTextPlugin('[name].css'),
    new webpack.DefinePlugin({
        'process.env': {
            NODE_ENV: JSON.stringify("development"),
           'URL_BASE': JSON.stringify('http://localhost:3000/api')
        },
    }),
  ],

  devServer: {
    historyApiFallback: true,
    stats: 'minimal'
  }
});

