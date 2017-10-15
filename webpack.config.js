const webpack = require('webpack');
const path = require('path');

const config = {
    entry: path.resolve('src/index.js'),
    output: {
        path: path.resolve('build/assets'),
        filename: 'bundle.js',
        publicPath: "assets/"
    },

    module: {
        rules: [{
                test: /\.js$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader',
            },
            {
                test: /\.json$/,
                exclude: /(node_modules)/,
                loader: 'json-loader'
            }
        ]
    },

    devServer: {
        contentBase: path.resolve('build/'),
        compress: true,
        port: 5000
    }

};

module.exports = config;