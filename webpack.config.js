//const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        index: './static/js/index.js',
        contact: './static/js/contact.js'
    },
    output: {
        path: __dirname + '/dist',
        filename: '[name].bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader!postcss-loader'
            }
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin('vendors'),
        new HtmlWebpackPlugin({
             filename: 'index.html', chunks: ['index', 'vendors'], minify: {collapseWhitespace: true}, hash: true, template: './src/index.html'
        }),
        new HtmlWebpackPlugin({
             filename: 'contact.html', chunks: ['contact', 'vendors'], minify: {collapseWhitespace: true}, hash: true, template: './src/contact.html'
        })
    ]
};