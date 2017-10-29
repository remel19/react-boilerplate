const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const config = {
    entry: [
        'babel-polyfill',
        'react-hot-loader/patch',
        path.resolve('src/index.js')
    ],
    output: {
        path: path.resolve('build/'),
        filename: 'bundle.js'
    },

    module: {
        rules: [{
                test: /\.js$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader'
            },
            {
                test: /\.json$/,
                exclude: /(node_modules)/,
                loader: 'json-loader'
            },
            {
                test: /\.css$/,
                exclude: /(node_modules)/,
                loader: 'style-loader!css-loader!postcss-loader'
            }
        ]
    },

    devServer: {
        contentBase: path.resolve('build/'),
        historyApiFallback: true,
        compress: true,
        hot: true,
        port: 5000
    },

    plugins: [
        new CleanWebpackPlugin(['build']),
        new HtmlWebpackPlugin({
            title: 'Welcome to Poletop',
            template: 'template.ejs'
        }),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ]

};

module.exports = config;