const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const dotenv = require('dotenv-webpack')

module.exports = {
    entry: './src/client/index.js',
    devtool: 'source-map',
    mode: 'development',
    stats: 'verbose',
    output: {
        path: path.resolve(process.cwd(), 'dist'),
        libraryTarget: 'var',
        library: 'Client'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node-modules/,
                loader: "babel-loader"
            },
            {
                test: /\.scss$/,
                use: ['style-loader','css-loader','sass-loader']
            }
        ]
    },
    plugins: [

        new HtmlWebpackPlugin({
            template: './src/client/views/index.html',
            filename: './index.html'
        }),
        new CleanWebpackPlugin({
            // Simulate the removal of files
            dry: true,
            // Write Logs to Console
            verbose: true,
            // Automatically remove all unused webpack assets on rebuild
            cleanStaleWebpackAssets: true,
            protectWebpackAssets: false
        }),
        new dotenv({
            systemVars: true
        })
    ],
    resolve: {
        fallback: { "os": require.resolve("os-browserify/browser") }
    }
}

