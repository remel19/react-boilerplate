//js bundler
const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); //pulgin to create new html
const CleanWebpackPlugin = require('clean-webpack-plugin'); //cleans old build folder

//config of how the bundle should work
const config = {
    entry: [
        'babel-polyfill',
        'react-hot-loader/patch',
        path.resolve('src/index.js')//entry path
    ],
    output: {
        path: path.resolve('build'), //folder's name
        publicPath: '',
        filename: 'assets/bundle.js'//output path
    },

    module: {
        rules: [{
            test: /\.js$/,
            exclude: /(node_modules)/,
            loader: 'babel-loader',
        }, //transpiles es6 to es5
        {
            test: /\.json$/,
            exclude: /(node_modules)/,
            loader: 'json-loader'
        },
        {
            test: /\.css$/,
            exclude: /(node_modules)/,
            loader: 'style-loader!css-loader!postcss-loader'
        }, //loads styles, postcss makes style compatiable with old browser
        {
            test: /\.(png|jpg|svg|jpeg|gif)$/,
            loader: 'url-loader?limit=25000'
        } //loads images inside bundle.js
        ]
    },

    devServer: {
        contentBase: path.resolve('build/'),
        historyApiFallback: true,
        compress: true,
        hot: true,
        port: 5000
    }, //dev-server for development purposes

    plugins: [
        new CleanWebpackPlugin(['build']), // cleaning old build folder
        new HtmlWebpackPlugin({
            title: 'Welcome',
            template: 'template.ejs'
        }), //creating new html from template.js
        new webpack.NamedModulesPlugin(), //shows relative path during development
        new webpack.HotModuleReplacementPlugin(),
    ]

}; //config

module.exports = config; //exporting the config
