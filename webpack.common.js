var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {

    resolve: {
        extensions: ['', '.js', '.ts']
    },

    module: {
         loaders: [
                {
                        test: /\.ts$/,
                        loader: 'ts',
                },
                {
                        test: /\.html$/,
                        loader: 'html'
                },
                {
                        test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
                        loader: 'file'
                },
                {
                        test: /\.scss$/,
                        loaders: ["style", "css", "sass"]
                },
                {
                        test: /\.(otf|eot|png|svg|ttf|woff|woff2)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                        loader: 'url?limit=8192'
                }
         ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: 'app/index.html'
        }),
        new webpack.ProvidePlugin({
        //     $: "jquery",        // semantic-ui requires jquery available as $
        //     jQuery: "jquery"
        })
    ],
}
