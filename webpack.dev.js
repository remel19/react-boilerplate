const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');

module.exports = merge(common, {
    devServer: {
        contentBase: path.resolve('build/'),
        historyApiFallback: true,
        compress: true,
        hot: true,
        port: 5000
    }, //dev-server for development purposes
});
