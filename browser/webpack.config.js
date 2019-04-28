const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const webpack = require('webpack')

module.exports = {
    mode: 'development',
    devServer: {
        hot: true,
        open: true,
        port: 3001,
        stats: 'minimal'
    },
    entry: path.resolve(__dirname, 'index.js'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js'
    },
    module: {
        rules: [{
            test: /Fn\.js$/,
            // use: ['script-loader']
        }]
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, '..'),
            '_': path.resolve(__dirname, '../lib')
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './browser/index.html'
        }),
        new webpack.HotModuleReplacementPlugin()
    ]
}
