const webpack = require('webpack');
const path = require("path");
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        index: './src/js/index.js',
        contact: './src/js/contact.js'
    },
    output: {path: __dirname + '/dist', filename: '[name].bundle.js'},
    module: {
        loaders: [
            {test: /\.css$/, loader: 'style-loader!css-loader!postcss-loader'},
            {test: /\.(jpe?g|png|gif|svg)$/i, loader: ["file-loader?name=assets/[name].[ext]", 'image-webpack-loader']},
            {test: /\.hbs$/, loader: 'handlebars-loader', options:{helperDirs: path.resolve(__dirname, "./src/partials/helpers")}}
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin('vendors'),
        new UglifyJSPlugin({mangle: {except: ['$super', '$', 'exports', 'require']}}),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            chunks: ['index', 'vendors'],
            minify: {collapseWhitespace: true},
            hash: true,
            template: './src/index.html'
        }),
        new HtmlWebpackPlugin({
            filename: 'contact.html',
            chunks: ['contact', 'vendors'],
            minify: {collapseWhitespace: true},
            hash: true,
            template: './src/contact.html'
        })
    ]
};